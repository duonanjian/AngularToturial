import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { WelcomeComponent } from './welcome.component';
import { Monitor } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';

@NgModule({
  imports: [NgZorroAntdModule, WelcomeRoutingModule],
  declarations: [WelcomeComponent, Monitor, WorkplaceComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
