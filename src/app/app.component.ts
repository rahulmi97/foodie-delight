import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IListData } from './module/create-restaurant/components/list-data/list-data.component';
import { defaultList } from './module/create-restaurant/state/lisit.action';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodie-delight';
  private count$: Observable<IListData[]> = of([]);
  constructor(private store: Store<{ listData: IListData[] }>) {}
  ngOnInit() {
    this.store.dispatch(defaultList());
  }
}
