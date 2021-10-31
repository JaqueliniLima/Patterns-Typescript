import Beer from "./Beer";
import Invoice from "./Invoice";
import Water from "./Water";
import Whisky from "./Whisky";

test("Deve calcular os impostos de uma nota fiscal", function (){
    const invoice = new Invoice();
    invoice.addItem(new Beer("Heineken", 20));
    invoice.addItem(new Whisky("Jack Daniels", 100));
    invoice.addItem(new Water("Crystal", 5));
    const taxes = invoice.getTaxes();
    expect(taxes).toBe(22);
});