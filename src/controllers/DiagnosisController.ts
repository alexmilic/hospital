import Diagnosis from '../models/Diagnosis';
import diagnosisService from '../services/DiagnosisService';

class DiagnosisController {

    create (req: any, res: any) {
        const diagnosis: Diagnosis = req.body.diagnosis;

        diagnosisService.create(diagnosis);
    }

    getAll (req: any, res: any) {
        return diagnosisService.getAll();
    }

    getById (req: any, res: any) {
        const id: string = req.params.id;

        return diagnosisService.getById(id);
    }

    update (req: any, res: any) {
        const diagnosis: Diagnosis = req.body.diagnosis;

        diagnosisService.update(diagnosis);
    }

    delete (req: any, res: any) {
        const id: string = req.params.id;

        diagnosisService.delete(id);
    }

}

export default new DiagnosisController();