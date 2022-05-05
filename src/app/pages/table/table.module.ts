import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { TableComponent } from './table.component';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule, ComponentsModule],
  declarations: [TableComponent],
})
export class TableModule {}
