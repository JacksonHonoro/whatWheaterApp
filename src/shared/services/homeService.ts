import { constants } from '../constants';
import Http from './apiService';
import { keys } from '../configs/keys';

export async function getCurrentWeather(latitude, longitude) {
  return Http.get(`${constants.api}lat=${latitude}&lon=${longitude}&appid=${keys.keyWeather}`);
}
