import { Component, OnInit } from '@angular/core';
import { RowEvent } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { deleteRecord, updateList } from '../../state/lisit.action';
import { CustomDialogService } from '../../services/custom-dialog.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss'],
})
export class ListDataComponent implements OnInit {
  tableListData: IListData[] = [];
  defaultListData = [];
  sortedData: IListData[] = [];
  gridRef: any;
  private count$: Observable<IListData[]> = of([]);
  protected columnDefs = [
    { field: 'name' },
    { field: 'description' },
    { field: 'location' },
    {
      field: 'Action',
      cellRenderer: (rowData: RowEvent) => {
        console.log(rowData)
        const buttons: IButtonData[] = [
          {
            buttonName: 'Edit',
            function: () => {
              this.customDialogService.openDialog(rowData.data).subscribe((data) => {
                this.store.dispatch(updateList({ listData: data, index: rowData.rowIndex }));
              });
            },
            btnColor: 'blue',
          },
          {
            buttonName: 'Delete',
            function: () => {
              const index = this.tableListData.findIndex(
                (ele) => ele.name === rowData.data.name
              );
              const listData = structuredClone(this.tableListData);
              if (index !== -1) {
                console.log(structuredClone(this.tableListData), index);
                const deletedRec = listData.splice(index, 1);
                this.store.dispatch(deleteRecord({listData:deletedRec[0]}));
              }
              this.tableListData = listData;

              this.gridRef.setRowData(this.tableListData)
            },
            btnColor: 'red',
          },
        ];
        return this.generateButtons(buttons);
      },
    },
  ];

  // DefaultColDef sets props common to all Columns
  protected defaultColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };
  constructor(private customDialogService: CustomDialogService, private store: Store<{ listData: IListData[] }>) {
    this.count$ = store.select('listData');
  }
  ngOnInit(): void {
    this.count$.subscribe(data => {
      this.tableListData = data;
      if (data && this.gridRef) {
        this.gridRef.setRowData(data);
      }
    })
  }
  onGridReady(param: any) {
    this.gridRef = param.api;
  }
  searchForData(target: any) {
    const sortingKey = target.value;
    this.sortedData = [];
    this.tableListData.forEach((ele) => {
      if (
        ele.name.includes(sortingKey) ||
        ele.description.includes(sortingKey) ||
        ele.location.includes(sortingKey)
      ) {
        this.sortedData.push(ele);
      }
    });
    this.gridRef.setQuickFilter(sortingKey)
  }
  generateButtons(buttons: IButtonData[]) {
    const divEle = document.createElement('div');
    divEle.style.display = 'flex';
    buttons.forEach((btn: IButtonData) => {
      const btnEle = document.createElement('div');
      btnEle.innerHTML = btn.buttonName;
      btnEle.style.color = btn.btnColor;
      btnEle.style.margin = '0 10px';
      btnEle.style.cursor = 'pointer';
      btnEle.addEventListener('click', () => {
        btn.function();
      });
      divEle.appendChild(btnEle);
    });
    return divEle;
  }
}
export interface IListData {
  name: string;
  description: string;
  location: string;
}
export interface IButtonData {
  buttonName: string;
  function: () => void;
  btnColor: string;
}

