import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getGlobalVariable } from 'src/utils/same-time-promise';
@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.less']
})
export class TemplateComponent implements OnInit {
    namecopy = '';
    @Input() set name(val: string) {
        this.namecopy = val;
    }
    @Output() nameChange = new EventEmitter();

    constructor() {}

    ngOnInit() {
        this.getVariable()
    }

    async getVariable() {
    console.log('templete');

        const data = await getGlobalVariable();
        console.log(data,'templete');
    }
}
