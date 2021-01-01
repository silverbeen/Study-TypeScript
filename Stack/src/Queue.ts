class Queue {
    protected data : any = [];

    constructor(){}

    push(item: any) :void{
        this.data.push(item);
    }

    pop():void {
        return this.data.shift();
    }
}

const queue = new Queue();

queue.push(0);
queue.push('1')