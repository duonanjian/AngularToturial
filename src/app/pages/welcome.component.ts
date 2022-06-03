import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Menulist, UserInfo } from '../dataInterface/Login';
import { StoreService } from 'src/service/store/store.service';

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
  constructor(private router: Router, private storeService: StoreService) {
    // path 不加 ‘.’ http://localhost:51645/form
    // path 加 ‘.’ http://localhost:51645/weicome/form
    this.menulist = [
      { name: '监视', path: '/basic/monitor' },
      { name: '工作区', path: '/basic/workplace' },
      { name: '表单', path: '/basic/form' },
      { name: '表格', path: '/basic/table' },
    ];
    this.userinfo = {
      username: 'admin',
      password: 12345,
      url: '../../assets/img/tou.jpg',
    };
    this.changeMenu();
  }

  logout(): void {
    this.storeService.removeToken();
    this.router.navigate(['/login']);
  }

  change(value: boolean): void {
    console.log(value);
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}

  changeMenu() {
    window.addEventListener('popstate', function (event) {
      console.log('location: ' + document.location);
      console.log('state: ' + JSON.stringify(event.state));
    });
  }
}
