import Item from "./Item";
import TaxItem from "./TaxItem";

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
            if(item instanceof TaxItem){
                total += item.calculateTax();
            }
            return total;
        }, 0);
    }
}