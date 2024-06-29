import { Component } from '@angular/core';
import { CustomDialogService } from '../../services/custom-dialog.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IListData } from '../list-data/list-data.component';
import { createList } from '../../state/lisit.action';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent {
  private count$: Observable<IListData[]> = of([]);
  constructor(private customDialogService: CustomDialogService,
    private store: Store<{ listData: IListData[] }>) {
    this.count$ = store.select('listData');
  }
  createList() {
    this.customDialogService.openDialog().subscribe((data) => {
      if (data) {
        this.store.dispatch(createList({listData:data}));
      }
    });
  }
}
