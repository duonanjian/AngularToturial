import { Guid } from 'guid-typescript';

let globalVariable: any = null;
let initTreePromiseValue: any = null;

class tree {
    constructor() {}
    name = 'tree';
    treeId = Guid.raw();
    promiseFunction = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 5000);
    });
    value: any = 0;
    async initTree() {
        this.value = await this.promiseFunction;
    }
}

export function getGlobalVariable() {
    if (!initTreePromiseValue) {
        initTreePromiseValue = initTreePromise();
        console.log(initTreePromiseValue);
    }
    return initTreePromiseValue;
}

// 把初始化树的行为做成一个promise

async function initTreePromise() {
    if (!globalVariable) {
        globalVariable = new tree();
        await globalVariable.initTree();
    }
    return globalVariable;
}
