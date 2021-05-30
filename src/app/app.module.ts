import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FeatureOneModule } from './feature-one/feature-one.module';
import { FeatureTwoModule } from './feature-two/feature-two.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { DiTestOneService } from '@core/services/di-test-one.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FeatureOneModule,
    FeatureTwoModule,
    AppRoutingModule
  ],
  providers: [DiTestOneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
