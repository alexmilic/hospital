import Hospital from '../models/Hospital';
import hospitalService from '../services/HospitalService';

class HospitalController {

    create (req: any, res: any) {
        const hospital: Hospital = req.body.hospital;

        hospitalService.create(hospital);
    }

    getAll (req: any, res: any) {
        return hospitalService.getAll();
    }

    getById (req: any, res: any) {
        const id: string = req.params.id;

        return hospitalService.getById(id);
    }

    update (req: any, res: any) {
        const hospital: Hospital = req.body.hospital;

        hospitalService.update(hospital);
    }

    delete (req: any, res: any) {
        const id: string = req.params.id;

        hospitalService.delete(id);
    }

}

export default new HospitalController();