import { NgModule } from '@angular/core';
// 只能有一个根module
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../ant-design-source/ng-zorro-antd.module';

import { Monitor } from '../monitor/monitor.component';

// import { ModalComponent } from '../../components/modal/modal.component';
@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [Monitor],
  exports: [Monitor],
})
export class MonitorModule {}
