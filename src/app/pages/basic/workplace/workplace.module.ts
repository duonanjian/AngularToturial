import { NgModule, OnInit } from '@angular/core';
// 只能有一个根module
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../../ant-design-source/ng-zorro-antd.module';
import { WorkplaceComponent } from './workplace.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { GetIDService } from 'src/service/getID/getID.service';
import { NzPopoverModule } from 'src/app/components/custom-popover/custom-popover.module';
@NgModule({
    imports: [CommonModule, NgZorroAntdModule, ComponentsModule, NzPopoverModule],
    declarations: [WorkplaceComponent],
    exports: [WorkplaceComponent],
    providers: [GetIDService]
})
export class WorkplaceModule {}
