import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../../ant-design-source/ng-zorro-antd.module';
import { Monitor } from './monitor.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
    imports: [CommonModule, NgZorroAntdModule,DragDropModule],
    declarations: [Monitor],
    exports: [Monitor],
})
export class MonitorModule {}
