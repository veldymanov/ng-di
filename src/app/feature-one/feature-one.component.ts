import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DiTestOneService } from './services/di-test-one.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-feature-one',
  providers: [DiTestOneService],
  styles: [``],
  template: `
    <div>
      <div>FeatureOneModule FeatureOneComponent:</div>
      <div>dieTestOneService.title$ | async : {{diTestOneService.title1$ | async}}</div>
    </div>

    <br/>

    <router-outlet></router-outlet>
  `
})
export class FeatureOneComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  private title = '';

  private destroy$ = new Subject<void>();

  constructor(
    public diTestOneService: DiTestOneService,
    public appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.diTestOneService.changeTitle1('FeatureOneComponent');

    this.diTestOneService.title1$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(title => {
        this.title = title;
        console.log('this.title: ', this.title);
      });
  }

  ngDoCheck(): void {
    console.log('FeatureOneComponent DoCheck: ', this.title);
  }

  ngAfterViewInit(): void {
    console.log('FeatureOneComponent AfterViewInit: ', this.title);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
