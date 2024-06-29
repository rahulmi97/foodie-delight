import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurantsDialogComponent } from './create-restaurants-dialog.component';

describe('CreateRestaurantsDialogComponent', () => {
  let component: CreateRestaurantsDialogComponent;
  let fixture: ComponentFixture<CreateRestaurantsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRestaurantsDialogComponent]
    });
    fixture = TestBed.createComponent(CreateRestaurantsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
