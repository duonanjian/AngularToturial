import { Router, RouteConfigLoadStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/service/api/api.service';
import { StoreService } from 'src/service/store/store.service';
import { dataHttpService } from 'src/service/api/data-http';
import { Login } from 'src/store/action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  private loginURL =
    'https://mock.mengxuegu.com/mock/6188fda74c5d9932f7e75822/duonanjian/login';
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    // private RouteConfigLoadStart: RouteConfigLoadStart,
    private message: NzMessageService,
    private cookie: CookieService,
    private loginService: ApiService,
    private storeService: StoreService,
    private dataHttpService: dataHttpService
  ) {}
  // 初始化赋值
  ngOnInit(): void {
    console.log(this.router.events);
    // fetch请求本地json
    fetch('assets/mock/login.json')
      .then((res) => res.json())
      .then((res) => console.log(res));
    this.loginService.get(this.loginURL).subscribe((res) => console.log(res));
    // 初始化设置初始值，初始要求
    this.validateForm = this.fb.group({
      userName: [this.cookie.get('userName') || 'admin', [Validators.required]],
      password: [this.cookie.get('password') || 123456, [Validators.required]],
      remember: [this.cookie.get('remember') ? true : false],
    });
  }
  // 提交表单
  submitForm(): void {
    let whiteList = [true, 'true'];
    if (this.validateForm.valid) {
      this.store.dispatch(Login({ username: 'admin', password: 123456 }));
      // dataHttpService封装
      this.dataHttpService
        .getDataService('login', this.validateForm.value)
        .subscribe({
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => console.info('complete'),
        });
      // 不封装
      this.loginService
        .get(this.loginURL, this.validateForm.value)
        .subscribe((res) => {
          if (whiteList.includes(this.validateForm.value.remember)) {
            for (let key in this.validateForm.value) {
              this.cookie.set(key, this.validateForm.value[key]);
            }
          } else {
            this.cookie.set('remember', 'false');
            this.cookie.delete('userName');
            this.cookie.delete('password');
          }
          console.log(res);
          this.router.navigate(['welcome/basic/monitor']);

          this.storeService.Token = res.data.token;
          this.cookie.set('token', res.data.token);
          this.createMessage('success', '登录成功！');
        });
    } else {
      this.openDirtyControl(this.validateForm);
    }
  }
  // 提示框函数
  createMessage(type: string, msg: string): void {
    this.message.create(type, msg);
  }
  // 打开脏检验
  openDirtyControl(data: any) {
    for (const i in data.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  // 关闭脏校验
  closeDirtyControl(data: any) {
    for (const i in data.controls) {
      this.validateForm.controls[i].clearValidators();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
