import { Component, OnInit } from '@angular/core';
import { dataHttpService } from 'src/service/api/data-http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
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
  lookonly: boolean = false;
  datarange: any;
  newDate:any
  constructor(
    private dataHttpService: dataHttpService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
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
    if (val === '查看') {
      this.lookonly = true;
    } else {
      this.lookonly = false;
    }
    this.modalisVisible = true;
    this.descripe = val;
    this.validateForm = this.fb.group({
      age: [{ value: data.age, disabled: this.lookonly }],
      address: [{ value: data.address, disabled: this.lookonly }],
      name: [{ value: data.name, disabled: this.lookonly }],
    });
  }
  fatherhandleCancel(val: boolean) {
    this.modalisVisible = false;
    this.resetForm();
  }
  fatherhandleOk(val: boolean) {
    console.log('表单提交值！', this.validateForm.value);
    this.submitForm();
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
  submitForm(): void {
    this.dataHttpService.getDataService('table').subscribe({
      next: (val: any) => {
        this.listOfData = val.data;
        console.log(val);
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }
  resetForm(): void {
    this.validateForm.reset();
  }
  onChange(val: any) {
    const diff = moment(val[1]).diff(val[0]);
    const first = new Date(val[0]).getTime() - diff;
    this.newDate = [new Date(first), val[0]];
    console.log(moment(new Date(first)).format('YYYY-MM-DD HH:mm:ss'));
  }
  changedata(){
    this.datarange = this.newDate
  }
}
