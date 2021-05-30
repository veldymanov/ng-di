import { NgModule } from '@angular/core';

import { LazyFeatureTwoRoutingModule } from './lazy-feature-two-routing.module';
import { SharedModule } from '@shared/shared.module';

import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { LazyFeatureTwoComponent } from './lazy-feature-two.component';


@NgModule({
  declarations: [
    LazyFeatureTwoComponent,
    ComponentTwoComponent,
    ComponentOneComponent
  ],
  imports: [
    SharedModule,
    LazyFeatureTwoRoutingModule
  ]
})
export class LazyFeatureTwoModule { }
