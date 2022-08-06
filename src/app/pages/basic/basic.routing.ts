import { Routes, RouterModule } from '@angular/router';
import { Monitor } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { BasicComponent } from './basic.component';
const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'monitor',
      //   pathMatch: 'full',
      // },
      {
        path: 'monitor',
        component: Monitor,
        data: {
          breadcrumb: 'monitor',
        },
      },
      { path: 'workplace', component: WorkplaceComponent , data: {
        breadcrumb: 'workplace',
      },},
      { path: 'form', component: FormComponent },
      { path: 'table', component: TableComponent },
    ],
  },
];
export const BasicRoutes = RouterModule.forChild(routes);
