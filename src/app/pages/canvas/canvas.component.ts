import { Component, OnDestroy, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Subscription } from 'rxjs';
import { DataService } from 'src/service/interraction/button';
import tou from '../../../assets/img/tou.jpg'
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less'],
})
export class CanvasComponent implements OnInit, OnDestroy {
  private canvas: any;
  public status: boolean = false;
  public subscription!: Subscription;
  constructor(private DataService: DataService) {}
  setDimensions(canvas = this.canvas, width: number, height: number) {
    this.status = !this.status;
    if (this.status) {
      canvas.setDimensions({
        width: width,
        height: height,
      });
    } else {
      canvas.setDimensions({
        width: 300,
        height: 300,
      });
    }
  }
  ngOnInit() {
    
    
   
    this.subscription = this.DataService.messagSource.subscribe((val) =>
      console.log(val)
    );

    this.canvas = new fabric.Canvas('canvas', { width: 300, height: 300 }); //可以通过鼠标方法缩小,旋转
    fabric.Image.fromURL('../../../assets/img/tou.jpg', (img:any) => {
      this.canvas.setBackgroundImage(img)
      this.canvas.renderAll()
    })
    let rect = new fabric.Rect({
      left: 200, //距离左边的距离
      top: 200, //距离上边的距离
      fill: 'purple', //填充的颜色
      width: 200, //矩形宽度
      height: 200, //矩形高度
    });
    // canvas.selection = false;
    // 将矩形添加到canvas画布上
    this.canvas.add(rect);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
