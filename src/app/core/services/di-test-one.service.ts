import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DiTestOneService {

  public title$: Observable<string>;

  private titleSbj$ = new BehaviorSubject<string>('DiTestOneService');

  constructor() {
    this.title$ = this.titleSbj$.asObservable();
  }

  public changeTitle(title: string): void {
    this.titleSbj$.next(title);
  }
}
