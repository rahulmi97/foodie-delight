import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./list.state";
import { IListData } from "../components/list-data/list-data.component";
import { createList, defaultList, deleteRecord, updateList } from "./lisit.action";

export const _counterReducer = createReducer(
  initialState,
  on(defaultList, state => {
    return [...state];
  }),
  on(updateList, (state, { listData, index }) => {
    const data = [...state];
    if (index!==undefined) {
      data.splice(index ? index : 0, 1, listData);
    }
    return [...data];
  }),
  on(createList, (state, { listData }) => {
    return [...state, listData];
  }),
  on(deleteRecord, (state, { listData }) => {
    const totalRec = state.filter((rec) => rec.name !== listData.name);
    return [...totalRec];
  })
);

export function counterReducer(state: IListData[] | undefined, action: Action) {
  return _counterReducer(state, action);
}
