import { Component, OnInit } from '@angular/core';
import { dataHttpService } from 'src/service/api/data-http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;
  descripe: string = '查看';
  modalisVisible: boolean = false;
  listOfData: any;

  constructor(
    private dataHttpService: dataHttpService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    console.log(this.dataHttpService)
    this.validateForm = this.fb.group({
      age: '',
      address: '',
      name: '',
    });
    this.dataHttpService.getDataService('table').subscribe({
      next: (val: any) => {
        this.listOfData = val.data;
        console.log(val);
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }
  showModal(val: string, data?: any) {
    this.modalisVisible = true;
    this.descripe = val;
    console.log(data);
    this.validateForm = this.fb.group({
      age: data.age,
      address: data.address,
      name: data.name,
    });
  }
  fatherhandleCancel(val: boolean) {
    this.modalisVisible = false;
    this.resetForm();
  }
  fatherhandleOk(val: boolean) {
    this.fatherhandleCancel(val);
  }
  confirmDelete() {
    this.ngOnInit();
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }
  submitForm(): void {}
  resetForm(): void {
    this.validateForm.reset();
  }
}
