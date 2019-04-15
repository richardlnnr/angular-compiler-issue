import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadStrategyComponent } from './lazy-load-strategy.component';


const routes: Routes = [
  {
    path: '',
    component: LazyLoadStrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadStrategyRoutingModule { }
