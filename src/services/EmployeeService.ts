import Employee from "../models/Employee"; 
import employeeRepository from "../repositories/EmployeeRepository";

class EmployeeService {
    create (employee: Employee) {
        employeeRepository.create(employee);
    }

    getAll () {
        return employeeRepository.getAll();
    }

    getById (id: string) {
        employeeRepository.getById(id);
    }

    update (employee: Employee) {
        employeeRepository.update(employee);
    }

    delete (id: string) {
        employeeRepository.delete(id);
    }
};

export default new EmployeeService();