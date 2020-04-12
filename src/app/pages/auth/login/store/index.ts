import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from "@ngrx/store";
import { environment } from "../../../../../environments/environment";
import { User } from "src/app/interfaces/User.interface";
import { loadLoginSuccess, loadLoginFailure } from "./login.actions";

export const loginStateFeatureKey = "loginState";

export interface LoginState {
  user: User;
  error: any;
}

export const initialState: LoginState = {
  user: undefined,
  error: undefined,
};

export const reducers = createReducer(
  initialState,
  on(loadLoginSuccess, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(loadLoginFailure, (state, action) => {
    return {
      user: state.user,
      error: action.error,
    };
  })
);

export const metaReducers: MetaReducer<LoginState>[] = !environment.production
  ? []
  : [];
