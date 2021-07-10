import Geocode from 'react-geocode';
import { Alert } from 'react-native';

import { keys } from '../configs/keys';
import { AddressLocationUserVm } from '../types/viewModels/addressLocationUserVm';

export default async function getAddressLocation(
  latitude: string,
  longitude: string,
): Promise<AddressLocationUserVm> {
  Geocode.setApiKey(keys.keyGeolocation);
  Geocode.setLanguage('en');

  const addressObject: AddressLocationUserVm = {};

  await Geocode.fromLatLng(latitude, longitude).then(
    (response) => {
      const address = response.results[0].formatted_address;
      const splitAddress = address.split(',');

      addressObject.street = splitAddress[0].trim();
      addressObject.number = splitAddress[1].split('-')[0].trim();
      addressObject.neighborhood = splitAddress[1].split('-')[1].trim();
      addressObject.city = splitAddress[2].split('-')[0].trim();
      addressObject.state = splitAddress[2].split('-')[1].trim();
      addressObject.zipCode = splitAddress[3].trim();
      addressObject.country = splitAddress[4].trim();
    },
  ).catch((err) => {
    Alert.alert('Sem internet!', 'Tente novamente mais tarde.');
  });
  return addressObject;
}
