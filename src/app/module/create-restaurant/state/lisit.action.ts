import { createAction, props } from '@ngrx/store';
import { IListData } from '../components/list-data/list-data.component';

export const defaultList = createAction('[default] list');
export const deleteRecord = createAction('[delete] record', props<{ listData: IListData }>());
export const updateList = createAction('[update] list', props<{ listData: IListData, index: number|null }>());
export const createList = createAction('[create] list', props<{ listData: IListData }>());
