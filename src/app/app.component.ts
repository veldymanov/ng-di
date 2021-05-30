import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    :host {
    }
  `],
  template: `
    <nav mat-tab-nav-bar class="nav-panel">
      <a
        mat-tab-link
        [routerLink]="['feature-one']"
        routerLinkActive #rlaFA="routerLinkActive"
        [active]="rlaFA.isActive"
      >
        Feature One
      </a>
      <a
        mat-tab-link
        [routerLink]="['feature-two']"
        routerLinkActive #rlaFT="routerLinkActive"
        [active]="rlaFT.isActive"
      >
        Feature Two
      </a>
      <a
        mat-tab-link
        [routerLink]="['lazy-feature-one']"
        routerLinkActive #rlaLO="routerLinkActive"
        [active]="rlaLO.isActive"
      >
        Lazy Module
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'ng-di';
}
