import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DefaultDataServiceConfig, EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './shop/shop-entity-metadata';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomUtlHttpGeneralGeneratorService } from './custom-url-http-generalgenerator.service';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig, useValue: {
        root: 'http://localhost:3000'
      }
    },
    {
      provide: HttpUrlGenerator,
      useClass: CustomUtlHttpGeneralGeneratorService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
