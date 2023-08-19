import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
    selector: 'app-floating-window',
    templateUrl: './floating-window.component.html',
    styleUrls: ['./floating-window.component.less']
})
export class FloatingWindowComponent  {
    @Input() title: string = '';
    private isDragging: boolean = false;
    private initialX: number = 0;
    private initialY: number = 0;
    private offsetX: number = 0;
    private offsetY: number = 0;

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        if (this.isDragging) {
            const x = event.clientX - this.initialX + this.offsetX;
            const y = event.clientY - this.initialY + this.offsetY;

            this.setPosition(x, y);
        }
    }

    @HostListener('document:mouseup')
    onMouseUp(): void {
        this.isDragging = false;
    }

    onDragStart(event: MouseEvent): void {
        this.isDragging = true;
        this.initialX = event.clientX;
        this.initialY = event.clientY;
        this.offsetX = this.getPositionX();
        this.offsetY = this.getPositionY();
    }

    setPosition(x: number, y: number): void {
        const windowElement = document.querySelector('.floating-window') as HTMLElement;
        windowElement.style.left = x + 'px';
        windowElement.style.top = y + 'px';
    }

    getPositionX(): number {
        const windowElement = document.querySelector('.floating-window') as HTMLElement;
        return parseFloat(windowElement.style.left) || 0;
    }

    getPositionY(): number {
        const windowElement = document.querySelector('.floating-window') as HTMLElement;
        return parseFloat(windowElement.style.top) || 0;
    }

    close(): void {
        // 在这里执行关闭悬浮窗的逻辑
    }
}
