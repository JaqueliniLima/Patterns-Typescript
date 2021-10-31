import Item from "./Item";

export default class Whisky extends Item{

    constructor(readonly description: string, readonly price: number){
        super("Whisky", description, price);
    }

    getTaxRate () {
        return 20;
    }
}