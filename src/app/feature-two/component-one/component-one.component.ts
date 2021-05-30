import { Component, OnInit } from '@angular/core';
import { DiTestOneService } from '@core/services/di-test-one.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  providers: [
    DiTestOneService
  ]
})
export class ComponentOneComponent implements OnInit {

  constructor(
    public diTestOneService: DiTestOneService
  ) { }

  ngOnInit(): void {
    this.diTestOneService.changeTitle('FeatureTwo ComponentOne');
  }

}
