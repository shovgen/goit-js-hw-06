class StringBuilder{
    constructor(initialItem) {
        this.items = initialItem;
    }
    getValue() {
        return this.items;
    }
    
    padEnd(str) {
        this.items += str; 
    }

    padStart(str) {
        this.items = str + this.items;
    }
    padBoth(str) {
        this.items = str + this.items + str;
    }

}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
