class Patient {
    private id: string;
    private name: string;
    private year: number;
    private department: string;

    constructor (id: string, name: string, year: number, department: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.department = department;
    }
}

export default Patient;