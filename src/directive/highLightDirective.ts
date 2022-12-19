import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log("init");

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostBinding('style.color') color!: string;

  ngOnInit() {
    console.log("自定义指令");

  }
  highlight(color: string) {
    // 两种方法改变dom上的元素
    // this.el.nativeElement.style.backgroundColor = color;
    this.color = color;
  }
}
