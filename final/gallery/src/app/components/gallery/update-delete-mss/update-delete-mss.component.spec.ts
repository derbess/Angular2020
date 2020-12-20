import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteMssComponent } from './update-delete-mss.component';

describe('UpdateDeleteMssComponent', () => {
  let component: UpdateDeleteMssComponent;
  let fixture: ComponentFixture<UpdateDeleteMssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteMssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteMssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
