import { NgModule } from '@angular/core';

import { LazyFeatureOneRoutingModule } from './lazy-feature-one-routing.module';
import { SharedModule } from '@shared/shared.module';

import { LazyFeatureOneComponent } from './lazy-feature-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { DiTestOneService } from '@core/services/di-test-one.service';


@NgModule({
  declarations: [
    LazyFeatureOneComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    SharedModule,
    LazyFeatureOneRoutingModule
  ],
  providers: [
    DiTestOneService
  ]
})
export class LazyFeatureOneModule { }
