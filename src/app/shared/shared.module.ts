import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSharedComponentComponent } from './components/test-shared-component/test-shared-component.component';


const SHARED_MODULES = [
  CommonModule
];

const ANGULAR_MATERIAL_MODULES = [];
const SHARED_COMPONENTS = [
  TestSharedComponentComponent
];
// const SHARED_DIRECTIVES = [];
// const SHARED_PIPES = [];



@NgModule({
  imports: [
    ANGULAR_MATERIAL_MODULES,
    SHARED_MODULES
  ],
  declarations: [
    SHARED_COMPONENTS,
    // SHARED_DIRECTIVES,
    // SHARED_PIPES
  ],
  exports: [
    ANGULAR_MATERIAL_MODULES,
    SHARED_MODULES,
    SHARED_COMPONENTS,
    // SHARED_DIRECTIVES,
    // SHARED_PIPES
  ]
})
export class SharedModule { }
