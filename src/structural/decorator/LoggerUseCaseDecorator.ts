import UseCase from "./UseCase";

export default class LoggerUseCaseDecorator implements UseCase{

    constructor(readonly usecase: UseCase){
    }

    execute(input: any){
        console.log("Executando decorator de log");
        this.usecase.execute(input);
    }
}