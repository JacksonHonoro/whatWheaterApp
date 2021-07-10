import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { getCurrentWeather } from '../../shared/services/homeService';
import { AddressLocationUserVm } from '../../shared/types/viewModels/addressLocationUserVm';
import { WeatherLocationUserVm } from '../../shared/types/viewModels/weatherLocationUserVm';
import getAddressLocation from '../../shared/services/getAddressService';
import NativeLoader from '../../shared/components/nativeLoader';
import CurrentAddressWeather from '../../shared/components/currentAddressWeather';

import {
  Container,
  ButtonArea,
  Button,
} from './styles';

const Home: React.FC = () => {
  const isFocused = useIsFocused();
  const coordinates = useSelector((state) => state.coordinatesUser);
  const [addressUser, setAddressUser] = useState<AddressLocationUserVm>({});
  const [weatherUser, setWeatherUser] = useState<WeatherLocationUserVm>({});
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [loadingScrollview, setLoadingScrollview] = useState<boolean>(false);

  const loadDataCurrentUser = async (
    latitude: string,
    longitude: string,
    refreshOnScroll?: boolean,
  ) => {
    if (refreshOnScroll) {
      setLoadingScrollview(true);
    } else {
      setLoadingPage(true);
    }
    await getAddressLocation(latitude, longitude).then((resp) => {
      setAddressUser(resp);
    });

    await getCurrentWeather(latitude, longitude)
      .then((resp) => {
        const infoWeather = {
          temp: resp.data?.main?.temp,
          tempMax: resp.data?.main?.temp_max,
          tempMin: resp.data?.main?.temp_min,
          feelsLike: resp.data?.main?.feels_like,
        };
        setWeatherUser(infoWeather);
      })
      .catch((err) => {
        console.log('error', err);
      }).finally(() => {
        setLoadingPage(false);
        setLoadingScrollview(false);
      });

    setLoadingPage(false);
    setLoadingScrollview(false);
  };

  useEffect(() => {
    if (!isFocused) {
      return;
    }

    loadDataCurrentUser(coordinates.latitude, coordinates.longitude);
  }, [isFocused, coordinates.latitude, coordinates.longitude]);

  return (
    <Container
      contentContainerStyle={{ flex: 1, paddingTop: 80 }}
      refreshControl={(
        <RefreshControl
          refreshing={loadingScrollview}
          onRefresh={() => loadDataCurrentUser(coordinates.latitude, coordinates.longitude, true)}
        />
    )}
    >
      {
        loadingPage ? (<NativeLoader size="large" />) : (
          <CurrentAddressWeather
            city={addressUser?.city}
            state={addressUser?.state}
            country={addressUser?.country}
            street={addressUser?.street}
            number={addressUser?.number}
            neighborhood={addressUser?.neighborhood}
            temp={weatherUser?.temp}
            feelsLike={weatherUser?.feelsLike}
            tempMin={weatherUser?.tempMin}
            tempMax={weatherUser?.tempMax}
          />
        )
      }

      <ButtonArea>
        <Button
          onPress={() => loadDataCurrentUser(coordinates.latitude, coordinates.longitude)}
        >
          Atualizar
        </Button>
      </ButtonArea>
    </Container>
  );
};

export default Home;
