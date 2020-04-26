import {createReducer, on} from '@ngrx/store';
import {User} from '../../models/user.model';
import {loadUser, loadUserError, loadUserSuccess} from '../actions';

export interface Userstate {
  id: string;
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: Userstate = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};

const _userReducer = createReducer(userInitialState,
  on(loadUser, (state, {id}) => ({
    ...state,
    loading: true,
    id
  })),
  on(loadUserSuccess, (state, {user}) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...user}
  })),
  on(loadUserError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
      status: payload.status
    }
  })),
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
