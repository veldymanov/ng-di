import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FeatureOneComponent } from './feature-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';


@NgModule({
  declarations: [
    FeatureOneComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    SharedModule,
    FeatureOneRoutingModule
  ]
})
export class FeatureOneModule { }
