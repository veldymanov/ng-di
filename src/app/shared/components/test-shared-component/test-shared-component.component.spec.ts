import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSharedComponentComponent } from './test-shared-component.component';

describe('TestSharedComponentComponent', () => {
  let component: TestSharedComponentComponent;
  let fixture: ComponentFixture<TestSharedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSharedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
