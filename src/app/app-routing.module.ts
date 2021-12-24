import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {LudiComponent} from "./views/ludi/ludi.component";
import {NoPageFoundComponent} from "./views/no-page-found/no-page-found.component";

const appRoutes: Routes = [
  { path:'', redirectTo: '/ludi', pathMatch:'full'},
  { path:'ludi', component: LudiComponent, data: { title: "Ludi" }},

  { path: '**', component: NoPageFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
