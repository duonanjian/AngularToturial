import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { Monitor } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: 'monitor', component: Monitor },
      { path: 'workplace', component: WorkplaceComponent },
      { path: 'form', component: FormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
