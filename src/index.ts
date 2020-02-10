import express from 'express';
import employeeController from './controllers/EmployeeController';

const app = express();

app.get("/", (req, res) => res.send('aaa'));

app.listen(3000, () => {
    console.log(`App listening on http://localhost:3000`)
});