import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAreaComponent } from './contact-area.component';

describe('ContactAreaComponent', () => {
  let component: ContactAreaComponent;
  let fixture: ComponentFixture<ContactAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactAreaComponent]
    });
    fixture = TestBed.createComponent(ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
