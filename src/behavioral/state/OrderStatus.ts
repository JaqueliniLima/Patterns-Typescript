import Order from "./Order";
import { StatusOrderEnum } from "./StatusOrderEnum";

export default abstract class OrderStatus{
    order: Order
    abstract value: StatusOrderEnum

    constructor (order: Order){
        this.order = order;
    }

    abstract confirm (): void;
    abstract cancel (): void;
}