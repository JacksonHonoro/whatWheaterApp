import {
  CoordinatesUserState,
  CoordinatesActionTypes,
  UPDATE_COORDINATES_USER,
  REMOVE_COORDINATES_USER,
} from '../../../types/store/coordinates';

export function UpdateCoordinatesUser(
  coordinatesUser: CoordinatesUserState,
): CoordinatesActionTypes {
  return {
    type: UPDATE_COORDINATES_USER,
    payload: {
      latitude: coordinatesUser.latitude,
      longitude: coordinatesUser.longitude,
    },
  };
}

export function RemoveCoordinatesUser(): CoordinatesActionTypes {
  return {
    type: REMOVE_COORDINATES_USER,
  };
}
