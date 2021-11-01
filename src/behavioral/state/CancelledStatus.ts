import Order from "./Order";
import OrderStatus from "./OrderStatus";
import { StatusOrderEnum } from "./StatusOrderEnum";

export default class CancelledStatus extends OrderStatus{
    value: StatusOrderEnum;

    constructor (order: Order){
        super(order);
        this.value = StatusOrderEnum.CANCELLED;
    }

    confirm(): void {
        throw new Error("O pedido já está cancelado")
    }
    cancel(): void {
        throw new Error("O pedido já está cancelado")
    }

}