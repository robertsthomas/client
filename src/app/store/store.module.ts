import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState } from './model';
import { rootReducer } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ]
})
export class StoreModule {
  constructor(public store: NgRedux<AppState>, devTools: DevToolsExtension) {
    store.configureStore(
      rootReducer,
      {},
      null,
      (devTools.isEnabled() ? [devTools.enhancer()] : []) as any,
    );
  }
}
