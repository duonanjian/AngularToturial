/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Directionality } from '@angular/cdk/bidi';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    EventEmitter,
    Host,
    Input,
    OnChanges,
    Optional,
    Output,
    Renderer2,
    SimpleChanges,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';

import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigKey, NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isTooltipEmpty, NzTooltipBaseDirective, NzToolTipComponent, NzTooltipTrigger, PropertyMapping } from '../tooltip';

const NZ_CONFIG_MODULE_NAME: NzConfigKey = 'popover';

@Directive({
    selector: '[nz-popover]',
    exportAs: 'nzPopover',
    host: {
        '[class.ant-popover-open]': 'visible'
    }
})
export class NzPopoverDirective extends NzTooltipBaseDirective implements OnChanges {
    static ngAcceptInputType_nzPopoverArrowPointAtCenter: BooleanInput;

    readonly _nzModuleName: NzConfigKey = NZ_CONFIG_MODULE_NAME;

    @Input('nzPopoverArrowPointAtCenter') @InputBoolean() override arrowPointAtCenter?: boolean;
    @Input('nzPopoverTitle') override title?: NzTSType;
    @Input('nzPopoverContent') override content?: NzTSType;
    @Input('nz-popover') override directiveTitle?: NzTSType | null;
    @Input('nzPopoverTrigger') override trigger?: NzTooltipTrigger = 'hover';
    @Input('nzPopoverPlacement') override placement?: string | string[] = 'top';
    @Input('nzPopoverOrigin') override origin?: ElementRef<HTMLElement>;
    @Input('nzPopoverVisible') override visible?: boolean;
    @Input('nzPopoverMouseEnterDelay') override mouseEnterDelay?: number;
    @Input('nzPopoverMouseLeaveDelay') override mouseLeaveDelay?: number;
    @Input('nzPopoverOverlayClassName') override overlayClassName?: string;
    @Input('nzPopoverOverlayStyle') override overlayStyle?: NgStyleInterface;

    @Input() @WithConfig() nzPopoverBackdrop?: boolean = false;

    // eslint-disable-next-line @angular-eslint/no-output-rename
    @Output('nzPopoverVisibleChange') override readonly visibleChange = new EventEmitter<boolean>();

    override componentRef: ComponentRef<NzPopoverComponent> = this.hostView.createComponent(NzPopoverComponent);

    protected override getProxyPropertyMap(): PropertyMapping {
        return {
            nzPopoverBackdrop: ['nzBackdrop', () => this.nzPopoverBackdrop],
            ...super.getProxyPropertyMap()
        };
    }

    constructor(
        elementRef: ElementRef,
        hostView: ViewContainerRef,
        resolver: ComponentFactoryResolver,
        renderer: Renderer2,
        @Host() @Optional() noAnimation?: NzNoAnimationDirective,
        nzConfigService?: NzConfigService
    ) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
    }

    // @ts-ignore
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['visible']) {
            this.hide();
        }
        console.log(changes);
    }

    closePopover() {
        this.hide();
    }
}

@Component({
    selector: 'nz-popover',
    exportAs: 'nzPopoverComponent',
    animations: [zoomBigMotion],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    template: `
        <ng-template
            #overlay="cdkConnectedOverlay"
            cdkConnectedOverlay
            nzConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin"
            [cdkConnectedOverlayPositions]="_positions"
            [cdkConnectedOverlayOpen]="_visible"
            [cdkConnectedOverlayPush]="true"
            [nzArrowPointAtCenter]="nzArrowPointAtCenter"
            (overlayOutsideClick)="onClickOutside($event)"
            (positionChange)="onPositionChange($event)"
        >
            <div
                class="ant-popover"
                [class.ant-popover-rtl]="dir === 'rtl'"
                [ngClass]="_classMap"
                [ngStyle]="nzOverlayStyle"
                [@.disabled]="!!noAnimation?.nzNoAnimation"
                [nzNoAnimation]="noAnimation?.nzNoAnimation"
                [@zoomBigMotion]="'active'"
            >
                <div class="ant-popover-content">
                    <div class="ant-popover-arrow">
                        <span class="ant-popover-arrow-content"></span>
                    </div>
                    <div class="ant-popover-inner" role="tooltip">
                        <div>
                            <div class="ant-popover-title" *ngIf="nzTitle">
                                <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
                            </div>
                            <div class="ant-popover-inner-content">
                                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    `
})
export class NzPopoverComponent extends NzToolTipComponent implements OnChanges {
    override _prefix = 'ant-popover';

    constructor(cdr: ChangeDetectorRef, @Optional() directionality: Directionality, @Host() @Optional() noAnimation?: NzNoAnimationDirective) {
        super(cdr, directionality, noAnimation);
    }

    get hasBackdrop(): boolean {
        return this.nzTrigger === 'click' ? this.nzBackdrop : false;
    }

    // @ts-ignore
    override ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    closePopover() {
        this.hide();
    }
    protected override isEmpty(): boolean {
        return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
    }
}