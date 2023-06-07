import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAreaComponent } from './links-area.component';

describe('LinksAreaComponent', () => {
  let component: LinksAreaComponent;
  let fixture: ComponentFixture<LinksAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksAreaComponent]
    });
    fixture = TestBed.createComponent(LinksAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
