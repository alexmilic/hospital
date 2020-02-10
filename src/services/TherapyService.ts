import Therapy from "../models/Therapy"; 
import therapyRepository from "../repositories/TherapyRepository";

class TherapyService {
    create (therapy: Therapy) {
        therapyRepository.create(therapy);
    }

    getAll () {
        return therapyRepository.getAll();
    }

    getById (id: string) {
        therapyRepository.getById(id);
    }

    update (therapy: Therapy) {
        therapyRepository.update(therapy);
    }

    delete (id: string) {
        therapyRepository.delete(id);
    }
};

export default new TherapyService();