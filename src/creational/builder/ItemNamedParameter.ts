
export default class ItemNamedParameter {
    idItem: number;
    category: string;
    description: string;
    price: number;
    width: number;
    height: number;
    length: number;
    weight: number;
    
    constructor ({ idItem, category, description, price, width, height, length, weight} : {readonly idItem: number, readonly category: string, readonly description: string, readonly price: number, readonly width: number, readonly height: number, readonly length: number, readonly weight: number}){
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.price = price;
        this.width = width;
        this.height = height;
        this.length = length;
        this.weight = weight;
    }
    
    getVolume() {
        return this.width/100 * this.height/100 * this.length/100;
    }

}