import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less'],
})
export class WorkplaceComponent implements OnInit, AfterViewInit {
  descripe: string = '查看';
  modalisVisible: boolean = false;
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @ViewChild(ButtonComponent, { read: ElementRef, static: true }) chakan!: ElementRef
  // @ViewChild('chakan', { static: true }) chakan:any;
  constructor(private router: Router,
    private route: ActivatedRoute,) { }
  showModal(val: string) {

    this.modalisVisible = true;
    this.descripe = val;
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
    console.log(this.chakan);
     // polygon折线转换
 const points = [20, 20, 40, 25, 60, 40, 80, 120, 120, 140, 200, 180];
 function polyline2path(points:any) {
    var path = 'M' + points.slice(0, 2).join(' ') +
      'L' + points.slice(2).join(' ');
    return path;
  }
  console.log(polyline2path(points)
  );
  
  }
  ngAfterViewInit(): void {
    console.log(this.chakan.nativeElement);
  }


 
}
