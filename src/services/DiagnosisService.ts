import Diagnosis from "../models/Diagnosis"; 
import diagnosisRepository from "../repositories/DiagnosisRepository";

class DiagnosisService {
    create (diagnosis: Diagnosis) {
        diagnosisRepository.create(diagnosis);
    }

    getAll () {
        return diagnosisRepository.getAll();
    }

    getById (id: string) {
        diagnosisRepository.getById(id);
    }

    update (diagnosis: Diagnosis) {
        diagnosisRepository.update(diagnosis);
    }

    delete (id: string) {
        diagnosisRepository.delete(id);
    }
};

export default new DiagnosisService();