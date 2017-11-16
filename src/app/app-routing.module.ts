import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {SeattleComponent} from './seattle/seattle.component';
import {SanjoseComponent} from './sanjose/sanjose.component';
import {BurbankComponent} from './burbank/burbank.component';
import {DallasComponent} from './dallas/dallas.component';
import {WashingtonComponent} from './washington/washington.component';
import {ChicagoComponent} from './chicago/chicago.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo:"/sanjose"},
  {path: "seattle", pathMatch: 'full', component:SeattleComponent},
  {path: "sanjose", pathMatch: 'full', component: SanjoseComponent},
  {path: "burbank", pathMatch: 'full', component: BurbankComponent},
  {path: "dallas", pathMatch: 'full', component: DallasComponent},
  {path: "dc", pathMatch: 'full', component: WashingtonComponent},
  {path: "chicago", pathMatch: 'full', component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
