import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpiecesComponent } from './masterpieces.component';

describe('MasterpiecesComponent', () => {
  let component: MasterpiecesComponent;
  let fixture: ComponentFixture<MasterpiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpiecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
