import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FeatureOneComponent } from './feature-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { DiTestOneService } from '@core/services/di-test-one.service';


@NgModule({
  declarations: [
    FeatureOneComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    SharedModule,
    FeatureOneRoutingModule
  ],
  providers: [
    DiTestOneService
  ]
})
export class FeatureOneModule { }
