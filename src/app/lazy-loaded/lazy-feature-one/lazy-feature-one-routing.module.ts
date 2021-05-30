import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyFeatureOneComponent } from './lazy-feature-one.component';

const routes: Routes = [
  {
    path: '',
    component: LazyFeatureOneComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureOneRoutingModule { }
