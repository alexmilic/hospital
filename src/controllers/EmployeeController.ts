import employeeService from '../services/EmployeeService';
import Employee from '../models/Employee';

class EmployeeController {
    create (req: any, res: any) {
        const employee: Employee = req.body.employee;

        employeeService.create(employee);
    }

    getAll (req: any, res: any) {
        return employeeService.getAll();
    }

    getById (req: any, res: any) {
        const id: string = req.params.id;

        return employeeService.getById(id);
    }

    update (req: any, res: any) {
        const employee: Employee = req.body.employee;

        employeeService.update(employee);
    }

    delete (req: any, res: any) {
        const id: string = req.params.id;

        employeeService.delete(id);
    }
};

export default new EmployeeController();