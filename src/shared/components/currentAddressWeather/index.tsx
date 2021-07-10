/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  AddressCurrentUser,
  AddressTitle,
  AddressDataName,
  WeatherCurrentUser,
  WeatherFieldName,
  WeatherDataName,
} from './styles';

 interface CurrentAddressWeatherProps {
  city: string;
  state: string;
  country: string;
  street: string;
  number: string;
  neighborhood: string;
  temp: string;
  feelsLike: string;
  tempMin: string;
  tempMax: string;
 }

const CurrentAddressWeather: React.FC<CurrentAddressWeatherProps> = ({
  city,
  state,
  country,
  street,
  number,
  neighborhood,
  temp,
  feelsLike,
  tempMin,
  tempMax,
}) => (
  <Container>
    <AddressCurrentUser>
      <AddressTitle>{`${city} - ${state} (${country})`}</AddressTitle>
      <AddressDataName>{`${street}, ${number} - ${neighborhood}`}</AddressDataName>
    </AddressCurrentUser>

    <WeatherCurrentUser>
      <WeatherFieldName>Temperatura</WeatherFieldName>
      <WeatherDataName>{`${temp} ºC`}</WeatherDataName>
    </WeatherCurrentUser>

    <WeatherCurrentUser>
      <WeatherFieldName>Sensação térmica</WeatherFieldName>
      <WeatherDataName>{`${feelsLike} ºC`}</WeatherDataName>
    </WeatherCurrentUser>

    <WeatherCurrentUser>
      <WeatherFieldName>Temperatura Min.</WeatherFieldName>
      <WeatherDataName>{`${tempMin} ºC`}</WeatherDataName>
    </WeatherCurrentUser>

    <WeatherCurrentUser>
      <WeatherFieldName>Temperatura Max.</WeatherFieldName>
      <WeatherDataName>{`${tempMax} ºC`}</WeatherDataName>
    </WeatherCurrentUser>
  </Container>
);

export default CurrentAddressWeather;
