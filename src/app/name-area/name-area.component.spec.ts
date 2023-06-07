import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAreaComponent } from './name-area.component';

describe('NameAreaComponent', () => {
  let component: NameAreaComponent;
  let fixture: ComponentFixture<NameAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameAreaComponent]
    });
    fixture = TestBed.createComponent(NameAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
