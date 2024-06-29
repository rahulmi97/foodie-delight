import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateRestaurantComponent } from '../../components/create-restaurant/create-restaurant.component';
import { ListDataComponent } from '../../components/list-data/list-data.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../../state/list.reducer';

@NgModule({
  declarations: [
    CreateRestaurantComponent,
    ListDataComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    AgGridModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [CreateRestaurantComponent]
})
export class RestaurantModule { }
