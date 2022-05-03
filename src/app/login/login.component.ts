import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../datamodule/UserInfo';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  // userinfo: UserInfo = {
  //   username: 'admin',
  //   password: 123456,
  // };
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    // 初始化设置初始值，初始要求
    this.validateForm = this.fb.group({
      userName: [this.cookie.get('userName'), [Validators.required]],
      password: [this.cookie.get('password'), [Validators.required]],
      remember: [this.cookie.get('remember')],
    });
  }
  // 提交表单
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value.remember);
      if (
        this.validateForm.value.remember === true ||
        this.validateForm.value.remember === 'true'
      ) {
        for (let key in this.validateForm.value) {
          this.cookie.set(key, this.validateForm.value[key]);
        }
      } else {
        this.cookie.set('remember', 'false');
        this.cookie.delete('userName');
        this.cookie.delete('password');
      }
      this.cookie.set('token', 'token1234567890');
      this.createMessage('success', '登录成功！');
      this.router.navigate(['/welcome']);

      // if (this.validateForm.value.password === 123456) {
      //   this.router.navigate(['/welcome']);
      // } else {
      //   this.createMessage('success', '密码不正确');
      // }
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
