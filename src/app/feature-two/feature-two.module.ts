import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { FeatureTwoRoutingModule } from './feature-two-routing.module';

import { FeatureTwoComponent } from './feature-two.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { DiTestOneService } from '@core/services/di-test-one.service';


@NgModule({
  declarations: [
    FeatureTwoComponent,
    ComponentTwoComponent,
    ComponentOneComponent
  ],
  imports: [
    SharedModule,
    FeatureTwoRoutingModule
  ],
  providers: [DiTestOneService],
})
export class FeatureTwoModule { }
