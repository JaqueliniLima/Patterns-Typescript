import Person from "./Person";

export default class Employee extends Person{

    setAge (age: number){
        if (age < 18) throw new Error("Idade mínima: 18 anos");
        super.setAge(age);
    }
}