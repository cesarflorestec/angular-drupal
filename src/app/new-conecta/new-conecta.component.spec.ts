import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConectaComponent } from './new-conecta.component';

describe('NewConectaComponent', () => {
  let component: NewConectaComponent;
  let fixture: ComponentFixture<NewConectaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewConectaComponent]
    });
    fixture = TestBed.createComponent(NewConectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
