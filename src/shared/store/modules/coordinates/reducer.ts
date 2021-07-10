/* eslint-disable import/prefer-default-export */
import {
  CoordinatesActionTypes,
  UPDATE_COORDINATES_USER,
  REMOVE_COORDINATES_USER,
  CoordinatesUserState,
} from '../../../types/store/coordinates';

const initialState: CoordinatesUserState = {
  latitude: '',
  longitude: '',
};

const logoutState: CoordinatesUserState = {
  latitude: '',
  longitude: '',
};

export const coordinatesReducer = (
  state = initialState,
  action: CoordinatesActionTypes,
): CoordinatesUserState => {
  switch (action.type) {
    case REMOVE_COORDINATES_USER:
      return logoutState;

    case UPDATE_COORDINATES_USER:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };

    default:
      return state;
  }
};
