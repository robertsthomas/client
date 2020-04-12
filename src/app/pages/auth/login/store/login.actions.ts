import { createAction, props } from "@ngrx/store";
import { User } from "../../../../interfaces/User.interface";

export const loadLogin = createAction("[Login Page] Load Login");

export const loadLoginSuccess = createAction(
  "[Login Page] Load Login Success",
  props<{ user: User }>()
);

export const loadLoginFailure = createAction(
  "[Login Page] Load Login Failure",
  props<{ error: any }>()
);

