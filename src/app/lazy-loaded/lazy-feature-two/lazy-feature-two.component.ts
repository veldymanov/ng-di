import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-feature-one',
  template: `
    <p>lazy-feature-two works</p>
    <router-outlet></router-outlet>
  `
})
export class LazyFeatureTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
