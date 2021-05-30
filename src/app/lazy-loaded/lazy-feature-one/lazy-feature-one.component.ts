import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-feature-one',
  template: `
    <p>lazy-feature-one works</p>
    <router-outlet></router-outlet>
  `
})
export class LazyFeatureOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
