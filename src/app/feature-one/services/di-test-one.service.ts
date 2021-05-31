import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DiTestOneService {

  public title1$: Observable<string>;

  private titleSbj1$ = new BehaviorSubject<string>('DiTestOneService');

  constructor() {
    this.title1$ = this.titleSbj1$.asObservable();
  }

  public changeTitle1(title: string): void {
    this.titleSbj1$.next(title);
  }
}
