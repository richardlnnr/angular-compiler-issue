import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadStrategyComponent } from './lazy-load-strategy.component';
import { LazyLoadStrategyRoutingModule } from './lazy-load-strategy-routing.module';

@NgModule({
  declarations: [LazyLoadStrategyComponent],
  imports: [
    CommonModule,
    LazyLoadStrategyRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LazyLoadStrategyModule { }
