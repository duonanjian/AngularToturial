import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../../ant-design-source/ng-zorro-antd.module';
import { Monitor } from './monitor.component';
@NgModule({
    imports: [CommonModule, NgZorroAntdModule],
    declarations: [Monitor],
    exports: [Monitor]
})
export class MonitorModule {}
