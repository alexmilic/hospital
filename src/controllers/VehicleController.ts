import Vehicle from '../models/Vehicle';
import vehicleService from '../services/VehicleService';

class VehicleController {
    
    create (req: any, res: any) {
        const vehicle: Vehicle = req.body.vehicle;

        vehicleService.create(vehicle);
    }
    
    getAll (req: any, res: any) {
        return vehicleService.getAll();
    }

    getById (req: any, res: any) {
        const id: string = req.params.id;

        vehicleService.getById(id);
    }

    update (req: any, res: any) {
        const vehice: Vehicle = req.body.vehice;

        vehicleService.update(vehice);
    }

    delete (req: any, res: any) {
        const id: string = req.params.id;

        vehicleService.delete(id);
    }

}

export default new VehicleController();