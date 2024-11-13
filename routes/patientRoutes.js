import express from 'express';
import { 
  addPatient, 
  getAllPatients, 
  getPatientById, 
  addTestForPatient, 
  getTestsForPatient, 
  getPatientHistory, 
  getCriticalPatients 
} from '../Controller/patientController.js';

const router = express.Router();

// Patient-related routes
router.post('/patients', addPatient);
router.get('/patients', getAllPatients);
router.get('/patients/critical', getCriticalPatients);
router.get('/patients/:id', getPatientById);
router.get('/patients/:id/tests', getTestsForPatient);

// Test-related routes

router.post('/patients/:id/tests', addTestForPatient);
router.get('/patients/:id/history', getPatientHistory);

export default router;