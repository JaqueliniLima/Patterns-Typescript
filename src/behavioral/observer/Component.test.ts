import InputText from "./InputText";
import Label from "./Label";

test("Deve escrever no input e exibir os dados atualizados na label", function (){
    const inputText = new InputText("country");
    const label = new Label("País: {{country}}");
    inputText.subscribe(label);
    inputText.setValue("Brasil");
    expect(label.value).toBe("País: Brasil");
    inputText.setValue("França");
    expect(label.value).toBe("País: França");
})