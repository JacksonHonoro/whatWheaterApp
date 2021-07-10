import { SessionUser } from '../viewModels/sessionUser';

export interface SessionState {
  token: string;
  sessionUser: SessionUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  deviceId?: string;
  deviceFcmToken: string;
  refreshToken: string;
  expiresIn: Date;
}

export const UPDATE_SESSION_USER = 'UPDATE_SESSION_USER';

export const REMOVE_SESSION_USER = 'REMOVE_SESSION_USER';

export const CHANGE_SESSIONUSER = 'CHANGE_SESSIONUSER';

export const SET_DEVICE_ID = 'SET_DEVICE_ID';

export const SET_DEVICE_FCM_TOKEN = 'SET_DEVICE_FCM_TOKEN';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION_USER;
  payload: {
    sessionUser: SessionUser;
    token: string;
    refreshToken: string;
    expiresIn: Date;
  };
}

interface RemoveSessionAction {
  type: typeof REMOVE_SESSION_USER;
}

interface ChangeSessionUser {
  type: typeof CHANGE_SESSIONUSER;
  payload: {
    sessionUser: SessionUser;
  };
}

interface SetDeviceId {
  type: typeof SET_DEVICE_ID;
  payload: {
    deviceId: string;
  };
}

interface SetDeviceFcmToken {
  type: typeof SET_DEVICE_FCM_TOKEN;
  payload: {
    deviceFcmToken: string;
  };
}

export type SessionActionTypes =
  | UpdateSessionAction
  | RemoveSessionAction
  | ChangeSessionUser
  | SetDeviceId
  | SetDeviceFcmToken;

export type {
  UpdateSessionAction,
  RemoveSessionAction,
  ChangeSessionUser,
  SetDeviceId,
  SetDeviceFcmToken,
};
