import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menulist, UserInfo } from '../definition';
import { StoreService } from 'src/service/store/store.service';
import { DataService } from 'src/service/interraction/button';
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
  class! :true
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
    private DataService: DataService
  ) {
    // path 不加 ‘.’ http://localhost:51645/form
    // path 加 ‘.’ http://localhost:51645/weicome/form
    this.menulist = [
      { name: '监视', path: './basic/monitor' },
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
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      const nodelist = document.querySelectorAll('.ant-breadcrumb-link > a');
      nodelist.forEach((item) => {
        (item as HTMLElement).onclick = (a: any) => {
          console.log(a);
          return false;
        };
      });
      console.log(nodelist);
    }, 1000);
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      const nodelist = document.querySelectorAll('.ant-breadcrumb-link > a');
      nodelist.forEach((item) => {
        (item as HTMLElement).style.pointerEvents = 'none';
      });
      console.log(nodelist);
    });
  }
  breadcrumbclick() {
    return false;
  }

  changeMenu() {
    window.addEventListener('popstate', function (event) {
      console.log('location: ' + document.location);
      console.log('state: ' + JSON.stringify(event.state));
    });
  }

  showcanvas() {
    // this.router.navigate(['/welcome/basic'], {
    //   relativeTo: 'monitor',
    //   skipLocationChange: true,
    // });
    console.log(this.route);
    this.router.navigate(['../monitor'], { relativeTo: this.route });
    this.DataService.changeMessage('这里是canvas页面的菜单按钮');
  }
}
