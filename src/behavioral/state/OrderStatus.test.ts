import Order from "./Order"
import { StatusOrderEnum } from "./StatusOrderEnum";

test("Deve criar um pedido com status pendente", function(){
    const order = new Order();
    expect(order.status.value).toBe(StatusOrderEnum.PENDING);
});

test("Deve mudar o status do pedido para confirmado", function(){
    const order = new Order();
    order.confirm();
    expect(order.status.value).toBe(StatusOrderEnum.CONFIRMED);
});

test("Deve mudar o status do pedido para cancelado", function(){
    const order = new Order();
    order.cancel();
    expect(order.status.value).toBe(StatusOrderEnum.CANCELLED);
});

test("Não deve mudar o status do pedido para confirmado de um pedido cancelado", function(){
    const order = new Order();
    order.cancel();
    expect(() => order.confirm()).toThrow(new Error("O pedido já está cancelado"));
});