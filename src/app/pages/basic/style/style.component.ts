import { Component, OnInit, OnDestroy } from '@angular/core';
import moment from 'moment';
import { InjectionToken_Service,InjectionTokenService } from 'src/service/token/tokenService';
import { Inject ,Injector} from '@angular/core';

@Component({
    selector: 'app-style',
    templateUrl: './style.component.html',
    styleUrls: ['./style.component.less']
})
export class StyleComponent implements OnInit, OnDestroy {
    title: any = 'overviewtitle';
    styleset: any = 'color:green';
    styleset2: any = 'font-size:40px';
    timeID: any;
    secondclass: string = 'secondclass';
    thirdclass: string = 'thirdclass';
    myStyle: any;
    list = [1, 2, 3, 4];
    constructor(@Inject(InjectionToken_Service) private myService: InjectionTokenService,private injector: Injector) {}

    ngOnInit() {
      console.log(this.myService,this.injector.get(InjectionToken_Service))

        this.myStyle = {
            backgroundColor: 'red'
        };
        const data = Array(4).fill('4').map(()=> 1)
        this.list.push(...[1,67])
        console.log(this.list,data);

    }
    ngAfterViewInit() {
        this.timeID = setInterval(() => {
            this.title = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        }, 1000);
    }
    ngOnDestroy(): void {
        if (this.timeID) clearInterval(this.timeID);
    }
    ngClassshow(type: number): any {
        switch (type) {
            case 1:
                return 'ng-fisrt ng-second';
                break;
            case 2:
                return ['ng-first', 'ng-second'];
                break;
            case 3:
                return { 'ng-first': true, 'ng-second': false };
                break;
        }
    }
}
