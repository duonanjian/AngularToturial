import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less'],
})
export class WorkplaceComponent implements OnInit, AfterViewInit {
  descripe: string = '查看';
  modalisVisible: boolean = false;

  @ViewChild(ButtonComponent, { read: ElementRef, static: true }) chakan!:ElementRef
  // @ViewChild('chakan', { static: true }) chakan:any;
  constructor(private router: Router,
    private route: ActivatedRoute,) {}
  showModal(val: string) {

    this.modalisVisible = true;
    this.descripe = val;
  }
  jump(){
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
    console.log(this.chakan);
  }
  ngAfterViewInit(): void {
    console.log(this.chakan.nativeElement);
  }
}
