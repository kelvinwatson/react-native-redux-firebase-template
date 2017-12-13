import { combineReducers } from 'redux';

const STREAM_PLATFORMS = {
  TWITCH: 'Twitch',
  DEFAULT: 'Twitch',
};

/*
 * reduces gaymersForSelectedGame
 */
export function addGaymer(state = {
  isFetching: false,
  isSuccess: false,
  hasError: false,
  status: undefined,
  streamPlatform: STREAM_PLATFORMS.DEFAULT,
  gaymerName: undefined,
  gaymerId: undefined
   }, action){
  switch(action.type){
    default:
      return state;
  }
}

/*
 * root reducer
 */
const RootReducer = combineReducers({
  addGaymer,
});

export default RootReducer;
