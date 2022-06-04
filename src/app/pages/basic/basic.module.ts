import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { Routes, RouterModule } from '@angular/router';
import { Monitor } from './monitor/monitor.component';
import { MonitorModule } from './monitor/monitor.module';
import { WorkplaceComponent } from './workplace/workplace.component';
import { WorkplaceModule } from './workplace/workplace.module';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { TableModule } from './table/table.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
// import { HighlightDirective } from 'src/directive/highLightDirective';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      { path: '', redirectTo: 'monitor', pathMatch: 'full' },
      { path: 'monitor', component: Monitor, },
      { path: 'workplace', component: WorkplaceComponent },
      { path: 'form', component: FormComponent },
      { path: 'table', component: TableComponent },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgZorroAntdModule,
    ComponentsModule,
    MonitorModule,
    WorkplaceModule,
    TableModule,
  ],
  declarations: [BasicComponent],
})
export class BasicModule {}
