import { Component, OnInit } from '@angular/core';
import { dataHttpService } from 'src/service/api/data-http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
  descripe: string = '查看';
  modalisVisible: boolean = false;
  listOfData: any;

  constructor(private dataHttpService: dataHttpService) {}

  showModal(val: string) {
    this.modalisVisible = true;
    this.descripe = val;
  }
  fatherhandleCancel(val: boolean) {
    this.modalisVisible = false;
  }
  fatherhandleOk(val: boolean) {
    this.fatherhandleCancel(val);
  }
  confirmDelete() {
    this.ngOnInit();
  }
  ngOnInit() {
    this.dataHttpService.getDataService('table').subscribe({
      next: (val: any) => {
        this.listOfData = val.data;
        console.log(val);
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }
}
