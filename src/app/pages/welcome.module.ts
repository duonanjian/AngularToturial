import { NgModule } from '@angular/core';
// 只能有一个根module,CommonModule 特性模块
import { CommonModule } from '@angular/common';
// 路由模块
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ant design angular 组件库
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
// welcome根组件
import { WelcomeComponent } from './welcome.component';

import { CanvasComponent } from './canvas/canvas.component';
import { ComponentsModule } from '../components/components.module';
// import { HighlightDirective } from 'src/directive/highLightDirective';
import { AuthGuard } from '../guards/login-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: '', redirectTo: 'canvas', pathMatch: 'full' },
      {
        path: 'basic',
        data: { preload: false, breadcrumb: 'Display Name' },
        loadChildren: () =>
          import('./basic/basic.module').then((m) => m.BasicModule),
      },
      { path: 'canvas', component: CanvasComponent,data: {
        breadcrumb: 'Display Name'
      } },
    ],
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ComponentsModule,
  ],
  declarations: [WelcomeComponent, CanvasComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {
  
}
