import express from 'express';
import employeeController from './controllers/EmployeeController';
import diagnisisController from './controllers/DiagnosisController';
import hospitalController from './controllers/HospitalController';
import patientController from './controllers/PatientController';
import therphyController from './controllers/TherapyController';
import vehicleController from './controllers/VehicleController';

const app = express();

// *** Employee ***
    // create
    app.post('/employees', employeeController.create);

    // read
    app.get('/employees', employeeController.getAll);
    app.get('/employees/:id', employeeController.getById);

    // update
    app.put('/employees', employeeController.update);

    // delete
    app.delete('/employees', employeeController.delete);

// *** Diagnosis ***
    // create
    app.post('/diagnosis', diagnisisController.create);

    // read
    app.get('/diagnosis', diagnisisController.getAll);
    app.get('/diagnosis/:id', diagnisisController.getById);

    // update
    app.put('/diagnosis', diagnisisController.update);

    // delete
    app.delete('/diagnosis', diagnisisController.delete);

// *** Hospital ***
    // create
    app.post('/hospita;', hospitalController.create);

    // read
    app.get('/hospita;', hospitalController.getAll);
    app.get('/hospita;/:id', hospitalController.getById);

    // update
    app.put('/hospita;', hospitalController.update);

    // delete
    app.delete('/hospita;', hospitalController.delete);

// *** Patient ***
    // create
    app.post('/patient', patientController.create);

    // read
    app.get('/patient', patientController.getAll);
    app.get('/patient/:id', patientController.getById);

    // update
    app.put('/patient', patientController.update);

    // delete
    app.delete('/patient', patientController.delete);

// *** Theraphy ***
    // create
    app.post('/theraphy', therphyController.create);

    // read
    app.get('/theraphy', therphyController.getAll);
    app.get('/theraphy/:id', therphyController.getById);

    // update
    app.put('/theraphy', therphyController.update);

    // delete
    app.delete('/theraphy', therphyController.delete);

// *** Vehicle ***
    // create
    app.post('/vehicle', vehicleController.create);

    // read
    app.get('/vehicle', vehicleController.getAll);
    app.get('/vehicle/:id', vehicleController.getById);

    // update
    app.put('/vehicle', vehicleController.update);

    // delete
    app.delete('/vehicle', vehicleController.delete);

    
app.listen(3000, () => {
    console.log(`App listening on http://localhost:3000`)
});