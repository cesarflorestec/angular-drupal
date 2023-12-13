import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyConectaComponent } from './body-conecta.component';

describe('BodyConectaComponent', () => {
  let component: BodyConectaComponent;
  let fixture: ComponentFixture<BodyConectaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyConectaComponent]
    });
    fixture = TestBed.createComponent(BodyConectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
