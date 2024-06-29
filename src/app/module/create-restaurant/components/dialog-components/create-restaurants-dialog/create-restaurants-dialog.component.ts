import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IRestaurantForm } from '../../../models/restaurant-form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IListData } from '../../list-data/list-data.component';

@Component({
  selector: 'app-create-restaurants-dialog',
  templateUrl: './create-restaurants-dialog.component.html',
  styleUrls: ['./create-restaurants-dialog.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class CreateRestaurantsDialogComponent implements OnInit{
  protected formGroup: FormGroup = new FormGroup({});
  constructor(private dialogRef: MatDialogRef<null>, @Inject(MAT_DIALOG_DATA) private dialogData: IListData) {}
  ngOnInit(): void {
    console.log(this.dialogData,"dialog config")
    this.setUpForm();
  }
  setUpForm() {
    this.formGroup = new FormGroup<IRestaurantForm>({
      name: new FormControl(this.dialogData?.name??'', Validators.required),
      description: new FormControl(this.dialogData?.description??'', Validators.required),
      location: new FormControl(this.dialogData?.location??'', Validators.required),
      });
  }
  createRecord() {
    console.log(this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      this.formGroup.updateValueAndValidity();
      return;
    }
    this.dialogRef.close(this.formGroup.value)
  }
  closeModal() {
    this.dialogRef.close();
  }
}
