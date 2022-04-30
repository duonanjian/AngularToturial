import { Component } from '@angular/core';
import { UserInfo } from '../datamodule/UserInfo';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  userinfo: UserInfo = {
    username: 'admin',
    password: 123456,
  };

  getmyclass(): string {
    return 'myclass2';
  }
  onSave(usename: any, password: any): void {
    console.log(usename, password, this.userinfo);
  }
}
