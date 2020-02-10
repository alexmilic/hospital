import Patient from "../models/Patient"; 
import patientRepository from "../repositories/PatientRepository";

class PatientService {
    create (patient: Patient) {
        patientRepository.create(patient);
    }

    getAll () {
        return patientRepository.getAll();
    }

    getById (id: string) {
        patientRepository.getById(id);
    }

    update (patient: Patient) {
        patientRepository.update(patient);
    }

    delete (id: string) {
        patientRepository.delete(id);
    }
};

export default new PatientService();