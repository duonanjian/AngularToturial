import { NgModule } from '@angular/core';
// 只能有一个根module
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { WorkplaceComponent } from './workplace.component';
import { ModalComponent } from '../../components/modal/modal.component';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [WorkplaceComponent, ModalComponent],
  exports: [WorkplaceComponent],
})
export class WorkplaceModule {}
