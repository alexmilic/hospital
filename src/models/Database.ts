import Employee from './Employee';
import Patient from './Patient';

class Database {

    private employees : Array<Employee>;
    private patients: Array<Patient>;

    constructor () {
        this.employees = [];
        this.patients = [];
    }

    getAllEmployees () {
        return this.employees;
    }
    
    getAllPatients () {
        return this.patients;
    }

}

export default new Database();
