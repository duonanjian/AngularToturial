import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Menulist, UserInfo } from '../datamodule/UserInfo';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit, OnChanges {
  menulist: Menulist[];
  isCollapsed = false;
  visible = false;
  userinfo: UserInfo;
  constructor(private router: Router) {
    // path 不加 ‘.’ http://localhost:51645/form
    // path 加 ‘.’ http://localhost:51645/weicome/form
    this.menulist = [
      { name: '监视', path: '/monitor' },
      { name: '工作区', path: '/workplace' },
      { name: '表单', path: '/form' },
    ];
    this.userinfo = {
      username: 'admin',
      password: 12345,
      url: '../../assets/img/tou.jpg',
    };
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  change(value: boolean): void {
    console.log(value);
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
