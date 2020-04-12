import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LoginPageRoutingModule } from "./login-routing.module";

import { LoginPage } from "./login.page";
import { StoreModule } from '@ngrx/store';
import * as fromLoginState from './store';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule, StoreModule.forFeature(fromLoginState.loginStateFeatureKey, fromLoginState.reducers, { metaReducers: fromLoginState.metaReducers })],
  declarations: [LoginPage],
})
export class LoginPageModule {}
