import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/ant-design-source/icons-provider.module';
import { NgZorroAntdModule } from 'src/ant-design-source/ng-zorro-antd.module';
registerLocaleData(zh);
import { WelcomeModule } from './pages/welcome.module';
import { AuthGuard } from './guards/login-auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/service/api/api.service';
import { dataHttpService } from 'src/service/api/data-http';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    // welcome组件相关
    WelcomeModule,
  ],
  providers: [
    AuthGuard,
    CookieService,
    ApiService,
    dataHttpService,
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
