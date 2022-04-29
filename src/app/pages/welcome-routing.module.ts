import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { Home } from '../home/home';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [{ path: 'monitor', component: Home }],
  },
  // { path: 'monitor', component: Home }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
