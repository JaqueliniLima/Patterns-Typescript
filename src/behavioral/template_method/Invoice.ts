import Item from "./Item";

export default class Invoice{
    items : Item[]

    constructor(){
        this.items = [];
    }

    addItem (item: Item){
        this.items.push(item);
    }

    getTaxes () {
        return this.items.reduce(function (total, item){
             total += item.calculateTax();
            return total;
        }, 0);
    }
}