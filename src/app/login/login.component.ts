import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/service/api.service';
import { StoreService } from 'src/service/store.service';
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
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private cookie: CookieService,
    private loginService: ApiService,
    private storeService: StoreService
  ) {}
  // 初始化赋值
  ngOnInit(): void {
    this.loginService.get(this.loginURL).subscribe((res) => console.log(res));
    // 初始化设置初始值，初始要求
    this.validateForm = this.fb.group({
      userName: [this.cookie.get('userName'), [Validators.required]],
      password: [this.cookie.get('password'), [Validators.required]],
      remember: [this.cookie.get('remember')],
    });
  }
  // 提交表单
  submitForm(): void {
    let whiteList = [true, 'true'];
    if (this.validateForm.valid) {
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
          this.storeService.setToken(res.token);
          this.cookie.set('token', res.token);
          this.createMessage('success', '登录成功！');
          this.router.navigate(['/welcome']);
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
