import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
import { ApiService } from 'src/service/api/api.service';
import { TableComponent } from './table.component';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule, ComponentsModule],
  declarations: [TableComponent],
})
export class TableModule implements OnInit {
  constructor(private apiservice: ApiService) {}
  ngOnInit(): void {

  }
}
