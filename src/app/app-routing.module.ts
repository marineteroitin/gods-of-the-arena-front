import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {LudiComponent} from "./views/ludi/ludi.component";
import {EmperorComponent} from "./views/emperor/emperor.component";
import {SpectatorComponent} from "./views/spectator/spectator.component";
import {NoPageFoundComponent} from "./views/no-page-found/no-page-found.component";
import {EmperorFightCreationComponent} from "./views/emperor-fight-creation/emperor-fight-creation.component";

const appRoutes: Routes = [
  { path:'', redirectTo: '/ludi', pathMatch:'full'},
  { path:'ludi', component: LudiComponent},
  { path:'emperor', component: EmperorComponent},
  { path:'fight/creation', component: EmperorFightCreationComponent},
  { path:'spectator', component: SpectatorComponent},

  { path: '**', component: NoPageFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
