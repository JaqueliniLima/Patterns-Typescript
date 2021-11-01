import ItemBuilder from "./ItemBuilder";
import ItemNamedParameter from "./ItemNamedParameter";

test("Deve criar um Item usando parametros nomeados", function(){
    const item = new ItemNamedParameter({
        idItem: 1, 
        category: "Instrumentos Musicais", 
        description: "Guitarra", 
        price: 1000, 
        width: 100, 
        height: 50, 
        length: 30, 
        weight: 8
    });
    const volume = item.getVolume();
    expect(volume).toBe(0.15);
});

test("Deve criar um Item usando builder", function(){
    const item = new ItemBuilder( 1, "Instrumentos Musicais", "Guitarra",  1000)
                                .withWidth(100)
                                .withHeight(50)
                                .withLength(30)
                                .withWeight(8)
                                .build();
    const volume = item.getVolume();
    expect(volume).toBe(0.15);
});