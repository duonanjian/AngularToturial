import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  title: string;
  constructor() {
    this.title = '123456';
  }
  async ngOnInit() {
  }
  buttonshow(val: any) {
    alert(val);
  }
}
