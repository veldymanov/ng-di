import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { DiTestOneService } from '@core/services/di-test-one.service';

@Component({
  selector: 'app-root',
  styles: [`
    footer {
      padding: 20px 0;
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
        routerLinkActive #rlaLFO="routerLinkActive"
        [active]="rlaLFO.isActive"
      >
        Lazy Feature One
      </a>

      <a
        mat-tab-link
        [routerLink]="['lazy-feature-two']"
        routerLinkActive #rlaLFT="routerLinkActive"
        [active]="rlaLFT.isActive"
      >
        Lazy Feature Two
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <mat-divider></mat-divider>

    <footer>
      <div>AppComponent: </div>
      <div>dieTestOneService.title$ | async: {{diTestOneService.title$ | async}}</div>
    </footer>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit {
  public title = 'AppComponent';

  constructor(
    public diTestOneService: DiTestOneService
  ) { }

  ngOnInit(): void {
    this.diTestOneService.changeTitle(this.title);

    this.diTestOneService.title$.subscribe(title => {
      this.title = title;
    });
  }

  ngDoCheck() {
    console.log('AppComponent DoCheck: ', this.title);
  }

  ngAfterViewInit() {
    console.log('AppComponent AfterViewInit: ', this.title);
  }
}
