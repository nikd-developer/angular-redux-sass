import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  AppState,
  default as reducer
} from './redux/app.reducer';
import {
  AppStore,
  appStoreProviders
} from './redux/app.store';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ModalsManagerModule } from './modules/modals-manager/modals-manager.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // root modules
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    // app modules
    SharedModule,
    CoreModule,
    AppRoutingModule,
    ModalsManagerModule
  ],
  providers: [
    appStoreProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
