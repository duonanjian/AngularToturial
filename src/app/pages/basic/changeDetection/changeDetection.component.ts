import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
// 我们可以在元件的@Component 中设定changeDetection 属性，这个属性包含两个设定，分别是
// Default：预设的变更侦测设定，会检查所有属性资料的变更，若资料是物件，物件内的属性变更也会检查，也就是「尽可能找到所有变更」，又称为「脏检查」(dirty check)
// OnPush：当设定为OnPush 时，只有在元件的@Input 变更，且真正有变更时，才会进行变更侦测

// 什么叫真正变更呢？假设有一个物件data = {num: 1}，则：
// data.num = data.num + 1;
// 上述程式对于data 物件本身而言，是没有变更的，因为物件在程式是个参考位置，变更里面的属性不会变更物件的参考位置。
// data = { num: data.num + 1 };
// 上述程式对于data 物件，才算是真正的变更，因为我们建立个一个新的物件，并指派给data 变数！

@Component({
    selector: 'counter-component',
    template: ` <span>Num: {{ data.num }}</span> `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
    @Input() data: any;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        // 当我们设定了OnPush 策略时，只有在@Input 真正被变更时才会进行变更侦测处理，但现实中的情境总是不一定那么简单，如果在设定OnPush 策略的元件内想要主动触发变更侦测时，该怎么办呢？这时候我们可以使用ChangeDetectorRef 提供的markForCheck 方法，主动通知Angular 进行变更侦测！
        setInterval(() => {
            this.changeDetectorRef.markForCheck();
        }, 5000);
    }
}

@Component({
    selector: 'trigger-component',
    template: ` <button (click)="detach()">Detach</button>
        <button (click)="trigger()">Trigger Change Detection</button>
        <button (click)="attach()">Attach</button>
        <button (click)="add()">Add</button>

        {{ i }}`
})
export class TriggerComponent {
    i = 0;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    detach() {
        this.changeDetectorRef.detach();
    }

    attach() {
        this.changeDetectorRef.reattach();
    }

    trigger() {
        this.changeDetectorRef.detectChanges();
    }

    add() {
        this.i++;
    }
}

@Component({
    selector: 'change-detection',
    template: `
        <trigger-component></trigger-component>
        <div>
            <counter-component [data]="data"></counter-component>
            <button (click)="plus()">+ 1</button>
        </div>
    `
})
export class ChangeDetectionComponent {
    data = { num: 1 };

    plus() {
        ++this.data.num;
    }
}
