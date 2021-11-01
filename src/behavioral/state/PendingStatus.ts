import CancelledStatus from "./CancelledStatus";
import ConfirmedStatus from "./ConfirmedStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";
import { StatusOrderEnum } from "./StatusOrderEnum";

export default class PendingStatus extends OrderStatus{
    value: StatusOrderEnum;

    constructor (order: Order){
        super(order);
        this.value = StatusOrderEnum.PENDING;
    }

    confirm(): void {
        this.order.status = new ConfirmedStatus(this.order);
    }

    cancel(): void {
        this.order.status = new CancelledStatus(this.order);
    }

}