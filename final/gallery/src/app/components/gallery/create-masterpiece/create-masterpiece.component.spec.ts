import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMasterpieceComponent } from './create-masterpiece.component';

describe('CreateMasterpieceComponent', () => {
  let component: CreateMasterpieceComponent;
  let fixture: ComponentFixture<CreateMasterpieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMasterpieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMasterpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
