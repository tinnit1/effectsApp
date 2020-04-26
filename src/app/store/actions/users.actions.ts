import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user.model';

export const loadUsers = createAction('[Users Component] loadUsers');

export const loadUsersSuccess = createAction(
  '[Users Component] loadUsers success',
  props<{users: User[]}>());

export const loadUsersError = createAction(
  '[Users Component] loadUsers error',
  props<{payload: any}>());
