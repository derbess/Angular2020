import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterpieceComponent } from './update-masterpiece.component';

describe('UpdateMasterpieceComponent', () => {
  let component: UpdateMasterpieceComponent;
  let fixture: ComponentFixture<UpdateMasterpieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMasterpieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
