import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export class ObjectOfArray {
    public x: number[];
    public y: number[];
    public z: number[];

    constructor() {
        this.x = [];
        this.y = [];
        this.z = [];
    }
}

export function genObjectOfArray() {
    // @ts-ignore
    const ooa = window.ooa = new ObjectOfArray();
    for (let i = 0; i < 100000; i++) {
        ooa.x.push(Math.random());
        ooa.y.push(Math.random());
        ooa.z.push(Math.random());
    }
}

export class ArrayOfObject {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export function genArrayOfObject() {
    // @ts-ignore
    const arr = window.arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(new ArrayOfObject(Math.random(), Math.random(), Math.random()));
    }
}


@ccclass('Test')
export class Test extends Component {

    start() {
        genArrayOfObject();
        genObjectOfArray();
    }
}

