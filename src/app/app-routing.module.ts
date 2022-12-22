import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedeemCodeComponent } from './redeem-code/redeem-code.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PurchaseTicketComponent } from './purchase-ticket/purchase-ticket.component'
import { WinnerComponent } from './winner/winner.component';
import { DidNotWinComponent } from './did-not-win/did-not-win.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'redeem-code', component: RedeemCodeComponent },
  { path: 'purchase-ticket', component : PurchaseTicketComponent },
  { path: 'winner_WRGUZRVKRR2M3', component : WinnerComponent },
  { path: 'did-not-win', component : DidNotWinComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
