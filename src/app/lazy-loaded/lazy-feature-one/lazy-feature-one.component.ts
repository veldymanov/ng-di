import { Component, OnDestroy, OnInit } from '@angular/core';
import { DiTestOneService } from '@core/services/di-test-one.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-feature-one',
  template: `
    <div>
      <div>FeatureOneModule FeatureOneComponent:</div>
      <div>dieTestOneService.title$ | async : {{diTestOneService.title$ | async}}</div>
    </div>
    <router-outlet></router-outlet>
  `
})
export class LazyFeatureOneComponent implements OnInit, OnDestroy {
  private title = '';

  private destroy$ = new Subject<void>();

  constructor(
    public diTestOneService: DiTestOneService
  ) { }

  ngOnInit(): void {
    this.diTestOneService.changeTitle('LazyFeatureOneComponent');

    this.diTestOneService.title$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(title => {
        this.title = title;
        console.log('this.title: ', this.title);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
