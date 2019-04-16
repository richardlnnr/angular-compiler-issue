import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalStrategyComponent } from './normal-strategy.component';

describe('NormalStrategyComponent', () => {
  let component: NormalStrategyComponent;
  let fixture: ComponentFixture<NormalStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
