import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { Monitor } from './monitor/monitor.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [{ path: 'monitor', component: Monitor }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
