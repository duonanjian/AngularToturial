import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/login-auth.guard';
import { MyPreloadingStrategy } from './common/preload';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'welcome',
    data: { preload: false },
    loadChildren: () =>
      import('./pages/welcome.module').then((m) => m.WelcomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: MyPreloadingStrategy }),
  ],
  exports: [RouterModule],
  providers: [MyPreloadingStrategy],
})
export class AppRoutingModule {}
