import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { GetIDService } from 'src/service/getID/getID.service';
import { NzPopoverDirective } from 'src/app/components/custom-popover/custom-popover.component';
@Component({
    selector: 'app-workplace',
    templateUrl: './workplace.component.html',
    styleUrls: ['./workplace.component.less']
})
export class WorkplaceComponent implements OnInit, AfterViewInit {
    descripe: string = '查看';
    modalisVisible: boolean = false;
    getsetcontent!: string;
    currentNumber: number = 0;
    nzPopoverVisible: boolean = true;
    name = 'Mike';
    @ViewChild(ButtonComponent, { read: ElementRef, static: true }) chakan!: ElementRef;

    @ViewChild('popover', { static: false })
    myDirectiveInstance!: NzPopoverDirective;
    // @ViewChild('chakan', { static: true }) chakan:any;
    constructor(private router: Router, private route: ActivatedRoute, private getIDService: GetIDService) {}
    showModal(val: string) {
        this.modalisVisible = true;
        this.descripe = val;
        this.getsetcontent = String(this.currentNumber++);
    }
    jump() {
        // return false
        this.router.navigate(['../monitor'], { relativeTo: this.route });
    }
    fatherhandleCancel(val: boolean) {
        console.log(val);
        this.modalisVisible = false;
    }
    fatherhandleOk(val: boolean) {
        // this.modalisVisible = val;

        this.fatherhandleCancel(val);
    }
    ngOnInit(): void {
        console.log(this.getIDService.servID);
    }
    ngAfterViewInit(): void {
        console.log(this.chakan.nativeElement);
        console.log(this.myDirectiveInstance);
    }
    change() {
        console.log(444);
        this.nzPopoverVisible = false;
    }


}
