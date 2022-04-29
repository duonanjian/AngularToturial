import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import{NgZorroAntdModule}from '../ng-zorro-antd.module'
import { WelcomeComponent } from './welcome.component';
import { Home } from '../home/home';


@NgModule({
  imports: [NgZorroAntdModule,WelcomeRoutingModule],
  declarations: [WelcomeComponent,Home],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
