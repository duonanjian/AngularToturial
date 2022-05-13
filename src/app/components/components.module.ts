/**
 * 公共组件统一模块出口
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { GetIDService } from 'src/service/getID/getID.service';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [ButtonComponent, ModalComponent],
  exports: [ButtonComponent, ModalComponent],
  providers: [GetIDService],
})
export class ComponentsModule {}
