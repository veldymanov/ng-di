import { Component, OnInit } from '@angular/core';
import { DiTestOneService } from '@core/services/di-test-one.service';

@Component({
  selector: 'app-feature-two',
  styles: [``],
  template: `
    <div>
      <div>FeatureTwoModule FeatureOneComponent:</div>
      <div>dieTestOneService.title$ | async: {{diTestOneService.title$ | async}}</div>
    </div>

    <br/>

    <router-outlet></router-outlet>
  `
})
export class FeatureTwoComponent implements OnInit {

  constructor(
    public diTestOneService: DiTestOneService
  ) { }

  ngOnInit(): void {
  }

}
