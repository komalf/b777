import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
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
import { PasswordmobileComponent } from './passwordmobile/passwordmobile.component';
import { NewlaunchComponent } from './newlaunch/newlaunch.component';
import { TeenpattiComponent } from './teenpatti/teenpatti.component';
import { OnedayteenpattiComponent } from './onedayteenpatti/onedayteenpatti.component';
import { OpenteenpattiComponent } from './openteenpatti/openteenpatti.component';
import { PokerComponent } from './poker/poker.component';
import { ThreecardsComponent } from './threecards/threecards.component';
import { LotteryComponent } from './lottery/lottery.component';
import { DragonComponent } from './dragon/dragon.component';
import { HeaderComponent } from './header/header.component';
import { AndarbaharComponent } from './andarbahar/andarbahar.component';
import { Lucky7Component } from './lucky7/lucky7.component';
import { WorlimatakaComponent } from './worlimataka/worlimataka.component';
import { InstantworliComponent } from './instantworli/instantworli.component';
import { Cards32Component } from './cards32/cards32.component';
import { OnedaydragonComponent } from './onedaydragon/onedaydragon.component';
import { Cards32BComponent } from './cards32-b/cards32-b.component';
import { BollywooodComponent } from './bollywoood/bollywoood.component';
import { TwentyteeenpattiComponent } from './twentyteeenpatti/twentyteeenpatti.component';
import { TwentypokerComponent } from './twentypoker/twentypoker.component';
import { SixpokerComponent } from './sixpoker/sixpoker.component';

import {PopoverModule} from "ngx-popover";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './token-interceptor';
import { SportsComponent } from './sports/sports.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from './match/match.component';
import { MarketComponent } from './market/market.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AccountComponent,
    UnsetteledbetComponent,
    SetbuttonvalueComponent,
    BethistoryComponent,
    ProfitlossreportComponent,
    PasswordComponent,
    MobileviewComponent,
    InplayComponent,
    OffplayComponent,
    ElectionComponent,
    CricketComponent,
    AccountmobileComponent,
    UnsetteledmobileComponent,
    ProfitmobileComponent,
    BethistorymobileComponent,
    SetbuttonmobileComponent,
    CasinomobileComponent,
    RulesComponent,
    PasswordmobileComponent,
    NewlaunchComponent,
    TeenpattiComponent,
    OnedayteenpattiComponent,
    OpenteenpattiComponent,
    PokerComponent,
    ThreecardsComponent,
    LotteryComponent,
    DragonComponent,
    HeaderComponent,
    AndarbaharComponent,
    Lucky7Component,
    WorlimatakaComponent,
    InstantworliComponent,
    Cards32Component,
    OnedaydragonComponent,
    Cards32BComponent,
    BollywooodComponent,
    TwentyteeenpattiComponent,
    TwentypokerComponent,
    SixpokerComponent,
    SportsComponent,
    TournamentComponent,
    MatchComponent,
    MarketComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatIconModule,
    PopoverModule,
    CarouselModule 
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
