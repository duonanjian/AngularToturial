import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component'
import { Home } from '../home/home';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'monitor', component: Home },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
