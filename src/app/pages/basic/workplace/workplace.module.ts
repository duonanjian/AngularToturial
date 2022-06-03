import { NgModule, OnInit } from '@angular/core';
// 只能有一个根module
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../../ant-design-source/ng-zorro-antd.module';
import { WorkplaceComponent } from './workplace.component';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule, ComponentsModule],
  declarations: [WorkplaceComponent],
  exports: [WorkplaceComponent],
})
export class WorkplaceModule {}
