import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSquareComponent } from './component-square.component';

describe('ComponentSquareComponent', () => {
  let component: ComponentSquareComponent;
  let fixture: ComponentFixture<ComponentSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
