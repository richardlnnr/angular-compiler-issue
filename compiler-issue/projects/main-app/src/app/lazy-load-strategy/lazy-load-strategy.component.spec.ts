import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadStrategyComponent } from './lazy-load-strategy.component';

describe('LazyLoadStrategyComponent', () => {
  let component: LazyLoadStrategyComponent;
  let fixture: ComponentFixture<LazyLoadStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
