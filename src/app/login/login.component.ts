import { Component } from '@angular/core';
import { Hero } from '../datamodule/hero';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  hero: Hero = {
    id: 1,
    name: 'eee',
  };
  
  getmyclass(): string {
    return 'myclass2';
  }
}
