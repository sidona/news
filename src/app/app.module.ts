import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import 'hammerjs';
import { LiveExchangeComponent } from './live-exchange/live-exchange.component';
import {ExchangeService} from "./exchange.service";
import { NewsContentComponent } from './news-content/news-content.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveExchangeComponent,
    NewsContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [
    ExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
