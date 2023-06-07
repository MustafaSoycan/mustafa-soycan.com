import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeAreaComponent } from './about-me-area.component';

describe('AboutMeAreaComponent', () => {
  let component: AboutMeAreaComponent;
  let fixture: ComponentFixture<AboutMeAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeAreaComponent]
    });
    fixture = TestBed.createComponent(AboutMeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
