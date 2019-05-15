import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleNumberComponent } from './card-simple-number.component';

describe('CardSimpleNumberComponent', () => {
  let component: CardSimpleNumberComponent;
  let fixture: ComponentFixture<CardSimpleNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSimpleNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSimpleNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
