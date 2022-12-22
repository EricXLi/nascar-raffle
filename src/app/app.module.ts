import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RedeemCodeComponent } from './redeem-code/redeem-code.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseTicketComponent } from './purchase-ticket/purchase-ticket.component';
import { WinnerComponent } from './winner/winner.component';
import { DidNotWinComponent } from './did-not-win/did-not-win.component';

@NgModule({
  declarations: [
    AppComponent,
    RedeemCodeComponent,
    PageNotFoundComponent,
    HomeComponent,
    PurchaseTicketComponent,
    WinnerComponent,
    DidNotWinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
