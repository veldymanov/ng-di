import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { NotFoundComponent } from './components/not-found/not-found.component';


const SHARED_MODULES = [
  CommonModule
];

const ANGULAR_MATERIAL_MODULES = [
  MatIconModule,
  MatDividerModule,
  MatTabsModule
];
const SHARED_COMPONENTS = [
  NotFoundComponent
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
