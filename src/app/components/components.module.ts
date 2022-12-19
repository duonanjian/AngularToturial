/**
 * 公共组件统一模块出口
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { TemplateComponent } from './template/template.component';
import { GetIDService } from 'src/service/getID/getID.service';
import { BaseService } from 'src/service/testService/baseService';
import { UserService } from 'src/service/testService/userService';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [ButtonComponent, ModalComponent, TemplateComponent],
  exports: [ButtonComponent, ModalComponent, TemplateComponent],
  providers: [GetIDService, { provide: BaseService, useClass: UserService }],
})
export class ComponentsModule { }
