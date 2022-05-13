import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { Monitor } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CanvasComponent } from './canvas/canvas.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: 'monitor', component: Monitor },
      { path: 'workplace', component: WorkplaceComponent },
      { path: 'form', component: FormComponent },
      { path: 'table', component: TableComponent },
      { path: 'canvas', component: CanvasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
