import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRestaurantsDialogComponent } from '../components/dialog-components/create-restaurants-dialog/create-restaurants-dialog.component';
import { Observable } from 'rxjs';
import { IListData } from '../components/list-data/list-data.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(data?: IListData): Observable<any> {
    const dialogRef = this.dialog.open(CreateRestaurantsDialogComponent, {
      data,
      height: '450px',
      width: '450px'
    });
    return dialogRef.afterClosed();
  }
}
