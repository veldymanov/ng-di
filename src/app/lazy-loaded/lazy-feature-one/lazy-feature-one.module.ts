import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyFeatureOneRoutingModule } from './lazy-feature-one-routing.module';
import { LazyFeatureOneComponent } from './lazy-feature-one.component';


@NgModule({
  declarations: [
    LazyFeatureOneComponent
  ],
  imports: [
    CommonModule,
    LazyFeatureOneRoutingModule
  ]
})
export class LazyFeatureOneModule { }
