import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

import { LazyFeatureOneComponent } from './lazy-feature-one.component';

const routes: Routes = [
  {
    path: '',
    component: LazyFeatureOneComponent,
    children: [
      { path: '', component: ComponentOneComponent},
      { path: 'component-two', component: ComponentTwoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureOneRoutingModule { }
