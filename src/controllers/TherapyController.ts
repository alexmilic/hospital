import Therapy from '../models/Therapy';
import therapyService from '../services/TherapyService';

class TherapyController {
    
    create (req: any, res: any) {
        const therapy: Therapy = req.body.therapy;

        therapyService.create(therapy);
    }
    
    getAll (req: any, res: any) {
        return therapyService.getAll();
    }

    getById (req: any, res: any) {
        const id: string = req.params.id;

        therapyService.getById(id);
    }

    update (req: any, res: any) {
        const vehice: Therapy = req.body.vehice;

        therapyService.update(vehice);
    }

    delete (req: any, res: any) {
        const id: string = req.params.id;

        therapyService.delete(id);
    }

}

export default new TherapyController();