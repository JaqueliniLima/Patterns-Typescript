import Item from "./Item";

export default class Beer extends Item{

    constructor(readonly description: string, readonly price: number){
        super("Beer", description, price);
    }

    getTaxRate () {
        return 10;
    }
}