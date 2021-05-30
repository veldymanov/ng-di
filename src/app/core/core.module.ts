import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule
  ) {
    if (parent) {
      throw new Error('This module maybe included only in AppModule');
    }
 }
}