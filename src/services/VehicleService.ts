import Vehicle from '../models/Vehicle';
import vehicleRepository from '../repositories/VehicleRepository';

class VehiceService {
    create (vehicle: Vehicle) {
        vehicleRepository.create(vehicle);
    }

    getAll () {
        return vehicleRepository.getAll();
    }

    getById (id: string) {
        return vehicleRepository.getById(id);
    }

    update (vehicle: Vehicle) {
        vehicleRepository.update(vehicle);
    }

    delete (id: string) {
        vehicleRepository.delete(id);
    }
}

export default new VehiceService();