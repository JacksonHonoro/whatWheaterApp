import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import GetLocation from 'react-native-get-location';

import { UpdateCoordinatesUser } from '../shared/store/modules/coordinates/actions';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        dispatch(UpdateCoordinatesUser(location));
      })
      .catch((error) => {
        const { code } = error;
        if (code === 'CANCELLED') {
          Alert.alert('Ação cancelada pelo usuário ou pela API.');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert(
            'Serviço indisponível',
            'Habilite sua localização',
            [
              {
                text: 'Não',
                style: 'cancel',
              },
              {
                text: 'Habilitar',
                onPress: () => {
                  Platform.OS === 'ios' ? GetLocation.openCelularSettings() : GetLocation.openGpsSettings();
                },
              },
            ],
            { cancelable: true },
          );
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Não obteve resposta', 'Tente novamente mais tarde.');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Sem autorização!');
        }
      });
  }, [dispatch]);
  return (
    true ? <AppRoutes /> : null
  );
};

export default Routes;
