import UseCase from "./UseCase";

export default class PerformanceUseCaseDecorator implements UseCase{

    constructor(readonly usecase: UseCase){
    }

    execute(input: any){
        console.time("performance");
        this.usecase.execute(input);
        console.timeEnd("performance");
    }
}