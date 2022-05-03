import { NgModule } from '@angular/core';
// 只能有一个根module,CommonModule 特性模块
import { CommonModule } from '@angular/common';
// 路由模块
import { WelcomeRoutingModule } from './welcome-routing.module';
// ant design angular 组件库
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
// welcome根组件
import { WelcomeComponent } from './welcome.component';
// 不导入相应模块，也能工作，但是不能用angular的功能
// import { Monitor } from './monitor/monitor.component';
import { MonitorModule } from './monitor/monitor.module';
import { WorkplaceModule } from './workplace/workplace.module';
import { FormComponent } from './form/form.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    WelcomeRoutingModule,
    MonitorModule,
    WorkplaceModule,
  ],
  declarations: [WelcomeComponent, FormComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
