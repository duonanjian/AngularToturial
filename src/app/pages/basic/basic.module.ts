import { StyleModule } from './style/style.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { MonitorModule } from './monitor/monitor.module';
import { WorkplaceModule } from './workplace/workplace.module';
import { FormComponent } from './form/form.component';
import { TableModule } from './table/table.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
import { HighlightDirective } from 'src/directive/highLightDirective';
import { BasicRoutes } from './basic.routing';
import { CounterComponent,TriggerComponent, ChangeDetectionComponent } from './changeDetection/changeDetection.component';
@NgModule({
    imports: [BasicRoutes, CommonModule, NgZorroAntdModule, ComponentsModule, MonitorModule, WorkplaceModule, TableModule, StyleModule],
    declarations: [BasicComponent, FormComponent, HighlightDirective, CounterComponent,TriggerComponent, ChangeDetectionComponent]
})
export class BasicModule {}
