import { Routes, RouterModule } from '@angular/router';
import { Monitor } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { BasicComponent } from './basic.component';
import { StyleComponent } from './style/style.component';
import { ChangeDetectionComponent } from './changeDetection/changeDetection.component';

const routes: Routes = [
    {
        path: '',
        component: BasicComponent,
        children: [
            {
                path: '',
                redirectTo: 'monitor',
                pathMatch: 'full'
            },
            {
                path: 'monitor',
                component: Monitor,
                data: {
                    breadcrumb: 'monitor'
                }
            },
            {
                path: 'workplace',
                component: WorkplaceComponent,
                data: {
                    breadcrumb: 'workplace'
                }
            },
            {
                path: 'style',
                component: StyleComponent,
                data: {
                    breadcrumb: 'style'
                }
            },
            { path: 'form', component: FormComponent },
            { path: 'table', component: TableComponent },
            { path: 'changedetection', component: ChangeDetectionComponent }
        ]
    }
];
export const BasicRoutes = RouterModule.forChild(routes);
