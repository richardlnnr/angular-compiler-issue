import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalStrategyComponent } from './normal-strategy/normal-strategy.component';

const routes: Routes = [
  { path: 'normal-strategy', component: NormalStrategyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
