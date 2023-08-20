import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovedetailsComponent } from './movedetails.component';

describe('MovedetailsComponent', () => {
  let component: MovedetailsComponent;
  let fixture: ComponentFixture<MovedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovedetailsComponent]
    });
    fixture = TestBed.createComponent(MovedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
