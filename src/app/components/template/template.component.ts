import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    ngOnInit() {}
}
