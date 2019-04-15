import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalStrategyComponent } from './normal-strategy/normal-strategy.component';

const routes: Routes = [
  { path: 'normal-strategy', component: NormalStrategyComponent},
  { path: 'lazy-load-strategy', loadChildren: './lazy-load-strategy/lazy-load-strategy.module#LazyLoadStrategyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
