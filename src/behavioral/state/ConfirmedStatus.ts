import CancelledStatus from "./CancelledStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";
import { StatusOrderEnum } from "./StatusOrderEnum";

export default class ConfirmedStatus extends OrderStatus{
    value: StatusOrderEnum;

    constructor (order: Order){
        super(order);
        this.value = StatusOrderEnum.CONFIRMED;
    }

    confirm(): void {
        throw new Error("O pedido já está confirmado")
    }
    cancel(): void {
        this.order.status = new CancelledStatus(this.order);
    }

}