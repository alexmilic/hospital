import Hospital from "../models/Hospital"; 
import hospitalRepository from "../repositories/HospitalRepository";

class HospitalService {
    create (hospital: Hospital) {
        hospitalRepository.create(hospital);
    }

    getAll () {
        return hospitalRepository.getAll();
    }

    getById (id: string) {
        hospitalRepository.getById(id);
    }

    update (hospital: Hospital) {
        hospitalRepository.update(hospital);
    }

    delete (id: string) {
        hospitalRepository.delete(id);
    }
};

export default new HospitalService();