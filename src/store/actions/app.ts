import { createAction, createEmptyAction } from '../../utils/actions';

export interface IAuthObject {
  token?: string;
  bearerToken?: string;
  incidentId?: number;
}

export const AUTHORIZE = 'APP/AUTHORIZE';
export const SET_LOADING = 'APP/SET_LOADING';

export const types = {
  AUTHORIZE,
  SET_LOADING,
};

export const authorize = createAction<boolean>(AUTHORIZE);
export const setLoading = createAction<boolean>(SET_LOADING);

export default {
  authorize,
  setLoading,
};
