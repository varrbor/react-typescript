import { createAction } from '../../utils/actions';

export const READ = 'CHAT/READ';
export const SET_OWNER = 'CHAT/SET_OWNER';
export const SHOW_NOTIFICATION_EXPIRE = 'CHAT/SHOW_NOTIFICATION_EXPIRE';
export const EVENT_ADD_TIME_SUCCESS = '@PUBNUB/EVENT_ADD_TIME_SUCCESS';
export const EVENT_MESSAGE = '@PUBNUB/EVENT_MESSAGE';
export const EVENT_JOINED = '@PUBNUB/EVENT_JOINED';
export const INCIDENT_UPDATE = '@PUBNUB/INCIDENT_UPDATE';
export const TIME_EXPIRED = '@PUBNUB/TIME_EXPIRED';

export const types = {
  READ,
  EVENT_JOINED,
  EVENT_ADD_TIME_SUCCESS,
  EVENT_MESSAGE,
  SET_OWNER,
  INCIDENT_UPDATE,
  TIME_EXPIRED,
};

export const read = createAction(READ);
export const setOwner = createAction(SET_OWNER);
export const showNotificationExpire = createAction(SHOW_NOTIFICATION_EXPIRE);

export default {
  read,
  setOwner,
  showNotificationExpire,
};

