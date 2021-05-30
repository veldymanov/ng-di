import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-one',
  template: `
    <div>Lazy One Module</div>
    <router-outlet></router-outlet>
  `
})
export class LazyFeatureOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
