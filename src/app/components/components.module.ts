/**
 * 公共组件统一模块出口
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  imports: [CommonModule,NgZorroAntdModule],
  declarations: [ButtonComponent,ModalComponent],
  exports:[ButtonComponent,ModalComponent]
})
export class ComponentsModule {}