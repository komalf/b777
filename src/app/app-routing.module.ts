import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { UnsetteledbetComponent } from './unsetteledbet/unsetteledbet.component';
import { SetbuttonvalueComponent } from './setbuttonvalue/setbuttonvalue.component';
import { BethistoryComponent } from './bethistory/bethistory.component';
import { ProfitlossreportComponent } from './profitlossreport/profitlossreport.component';
import { PasswordComponent } from './password/password.component';
import { MobileviewComponent } from "./mobileview/MobileviewComponent";
import { InplayComponent } from './inplay/inplay.component';
import { OffplayComponent } from './offplay/offplay.component';
import { ElectionComponent } from './election/election.component';
import { CricketComponent } from './cricket/cricket.component';
import { AccountmobileComponent } from './accountmobile/accountmobile.component';
import { UnsetteledmobileComponent } from './unsetteledmobile/unsetteledmobile.component';
import { ProfitmobileComponent } from './profitmobile/profitmobile.component';
import { BethistorymobileComponent } from './bethistorymobile/bethistorymobile.component';
import { SetbuttonmobileComponent } from './setbuttonmobile/setbuttonmobile.component';
import { CasinomobileComponent } from './casinomobile/casinomobile.component';
import { RulesComponent } from './rules/rules.component';
import {PasswordmobileComponent } from './passwordmobile/passwordmobile.component';
import {NewlaunchComponent } from './newlaunch/newlaunch.component';
import {TeenpattiComponent } from './teenpatti/teenpatti.component';
import {OnedayteenpattiComponent } from './onedayteenpatti/onedayteenpatti.component';
import {OpenteenpattiComponent } from './openteenpatti/openteenpatti.component';
import {PokerComponent } from './poker/poker.component';
import {ThreecardsComponent } from './threecards/threecards.component';
import {LotteryComponent } from './lottery/lottery.component';
import {DragonComponent } from './dragon/dragon.component';
import {AndarbaharComponent } from './andarbahar/andarbahar.component';
import {Lucky7Component } from './lucky7/lucky7.component';
import {WorlimatakaComponent } from './worlimataka/worlimataka.component';
import {InstantworliComponent } from './instantworli/instantworli.component';
import {Cards32Component } from './cards32/cards32.component';
import {OnedaydragonComponent } from './onedaydragon/onedaydragon.component';
import {Cards32BComponent } from './cards32-b/cards32-b.component';
import {BollywooodComponent } from './bollywoood/bollywoood.component';
import {TwentyteeenpattiComponent } from './twentyteeenpatti/twentyteeenpatti.component';
import {TwentypokerComponent } from './twentypoker/twentypoker.component';
import {SixpokerComponent } from './sixpoker/sixpoker.component';
import {SportsComponent } from './sports/sports.component';
import {TournamentComponent } from './tournament/tournament.component';
import {MatchComponent } from './match/match.component';
import {MarketComponent } from './market/market.component';
import {HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'unsetteledbet', component: UnsetteledbetComponent, canActivate: [AuthGuard] },
  { path: 'setbuttonvalue', component: SetbuttonvalueComponent, canActivate: [AuthGuard] },
  { path: 'bethistory', component: BethistoryComponent, canActivate: [AuthGuard] },
  { path: 'profitlossreport', component: ProfitlossreportComponent, canActivate: [AuthGuard] },
  { path: 'password', component: PasswordComponent, canActivate: [AuthGuard] },
  { path: 'mobileview', component: MobileviewComponent, canActivate: [AuthGuard] },
  { path: 'inplay', component: InplayComponent, canActivate: [AuthGuard] },
  { path: 'offplay', component: OffplayComponent, canActivate: [AuthGuard] },
  { path: 'election', component: ElectionComponent, canActivate: [AuthGuard] },
  { path: 'cricket', component: CricketComponent, canActivate: [AuthGuard] },
  { path: 'accountmobile', component: AccountmobileComponent, canActivate: [AuthGuard] },
  { path: 'unsetteledmobile', component: UnsetteledmobileComponent, canActivate: [AuthGuard] },
  { path: 'profitmobile', component: ProfitmobileComponent, canActivate: [AuthGuard] },
  { path: 'bethistorymobile', component: BethistorymobileComponent, canActivate: [AuthGuard] },
  { path: 'setbuttonmobile', component: SetbuttonmobileComponent, canActivate: [AuthGuard] },
  { path: 'casinomobile', component: CasinomobileComponent, canActivate: [AuthGuard] },
  { path: 'rules', component: RulesComponent, canActivate: [AuthGuard] },
  { path: 'passwordmobile', component: PasswordmobileComponent, canActivate: [AuthGuard] },
  { path: 'newlaunch', component: NewlaunchComponent, canActivate: [AuthGuard] },
  { path: 'teenpatti', component: TeenpattiComponent, canActivate: [AuthGuard] },
  { path: 'onedayteenpatti', component: OnedayteenpattiComponent, canActivate: [AuthGuard] },
  { path: 'openteenpatti', component: OpenteenpattiComponent, canActivate: [AuthGuard] },
  { path: 'poker', component: PokerComponent, canActivate: [AuthGuard] },
  { path: 'threecards', component: ThreecardsComponent, canActivate: [AuthGuard] },
  { path: 'lottery', component: LotteryComponent, canActivate: [AuthGuard] },
  { path: 'dragon', component: DragonComponent, canActivate: [AuthGuard] },
  { path: 'andarbahar', component: AndarbaharComponent, canActivate: [AuthGuard] },
  { path: 'lucky7', component: Lucky7Component, canActivate: [AuthGuard] },
  { path: 'worlimataka', component: WorlimatakaComponent, canActivate: [AuthGuard] },
  { path: 'instantworli', component: InstantworliComponent, canActivate: [AuthGuard] },
  { path: 'cards32', component: Cards32Component, canActivate: [AuthGuard] },
  { path: 'onedaydragon', component: OnedaydragonComponent, canActivate: [AuthGuard] },
  { path: 'cards32-b', component: Cards32BComponent, canActivate: [AuthGuard] },
  { path: 'bollywoood', component: BollywooodComponent, canActivate: [AuthGuard] },
  { path: 'twentyteeenpatti', component: TwentyteeenpattiComponent, canActivate: [AuthGuard] },
  { path: 'twentypoker', component: TwentypokerComponent, canActivate: [AuthGuard] },
  { path: 'sixpoker', component: SixpokerComponent,canActivate: [AuthGuard] },
  { path: 'sports/:sptid', component: SportsComponent,canActivate: [AuthGuard] },
  { path: 'tournament/:sptid/:mid', component: TournamentComponent,canActivate: [AuthGuard] },
  { path: 'match/:mrid', component: MatchComponent,canActivate: [AuthGuard] },
  { path: 'market', component: MarketComponent,canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
