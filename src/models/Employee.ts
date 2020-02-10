class Employee {

    private id: number;
    private name: string;
    private position: string;
    private qualification: string

    constructor (id: number, name: string, position: string, qualification: string) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.qualification = qualification;
    }
}

export default Employee;