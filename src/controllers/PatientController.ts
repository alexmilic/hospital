import Patient from '../models/Patient';
import patientService from '../services/PatientService';

class PatientController {

    create (req: any, res: any) {
        const patient: Patient = req.body.patient;

        patientService.create(patient);
    }

    getAll (req: any, res: any) {
        return patientService.getAll();
    }

    getById (req: any, res: any) {
        const id: string = req.params.id;

        return patientService.getById(id);
    }

    update (req: any, res: any) {
        const patient: Patient = req.body.patient;

        patientService.update(patient);
    }

    delete (req: any, res: any) {
        const id: string = req.params.id;

        patientService.delete(id);
    }

}

export default new PatientController();