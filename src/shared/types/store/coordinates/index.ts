export interface CoordinatesUserState {
  latitude: number;
  longitude: number;
}

export const UPDATE_COORDINATES_USER = 'UPDATE_COORDINATES_USER';

export const REMOVE_COORDINATES_USER = 'REMOVE_COORDINATES_USER';

interface UpdateCoordinatesAction {
  type: typeof UPDATE_COORDINATES_USER;
  payload: {
    latitude: number;
    longitude: number
  };
}

interface RemoveCoordinatesAction {
  type: typeof REMOVE_COORDINATES_USER;
}

export type CoordinatesActionTypes =
  | UpdateCoordinatesAction
  | RemoveCoordinatesAction;

export type {
  UpdateCoordinatesAction,
  RemoveCoordinatesAction,
};
