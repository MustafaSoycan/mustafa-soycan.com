import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAreaComponent } from './portfolio-area.component';

describe('PortfolioAreaComponent', () => {
  let component: PortfolioAreaComponent;
  let fixture: ComponentFixture<PortfolioAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioAreaComponent]
    });
    fixture = TestBed.createComponent(PortfolioAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
