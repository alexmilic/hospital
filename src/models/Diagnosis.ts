class Diagnosis {
    private id: number;
    private name: string;
    private cause: string;
    private therapy: string;

    constructor (id: number, name: string, cause: string, therapy: string) {
        this.id = id;
        this.name = name;
        this.cause = cause;
        this.therapy = therapy;
    }
}

export default Diagnosis;