const { Router } = require('express');
const router = Router();

const employessCtrl = require('../controllers/employees,controller')
// CRUD
// CREATE - READ - UPDATE -DELETE
router.get('/', employessCtrl.getEmployees);
router.post('/', employessCtrl.createEmployee);
router.get('/:id', employessCtrl.getEmployee);
router.put('/:id', employessCtrl.editEmployee);
router.delete('/:id', employessCtrl.deleteEmployee);

module.exports = router;