import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {LudiComponent} from './views/ludi/ludi.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {GladiatorTypeService} from "./services/gladiatorType/gladiator-type.service";
import {PropositionService} from "./services/proposition/proposition.service";
import {AppRoutingModule} from './app-routing.module';
import {NoPageFoundComponent} from './views/no-page-found/no-page-found.component';
import {EmperorComponent} from './views/emperor/emperor.component';
import {SpectatorComponent} from './views/spectator/spectator.component';
import {GladiatorTypeCardComponent} from './components/gladiator-type-card/gladiator-type-card.component';
import {EmperorFightCreationComponent} from './views/emperor-fight-creation/emperor-fight-creation.component';


@NgModule({
  // all components
  declarations: [
    AppComponent,
    LudiComponent,
    NoPageFoundComponent,
    EmperorComponent,
    SpectatorComponent,
    GladiatorTypeCardComponent,
    EmperorFightCreationComponent
  ],
  //routes and modules
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GladiatorTypeService,
    PropositionService
  ],
  //component loaded when the app start
  bootstrap: [AppComponent]
})
export class AppModule {
}
