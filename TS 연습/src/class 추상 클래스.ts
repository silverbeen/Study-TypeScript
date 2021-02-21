abstract class Ex{
    abstract name : string;
    abstract getName() : string;
}

class mouse extends Ex {
    constructor(public name : string) {
        super();
    }
    getName() {
        return this.name;
    }
}