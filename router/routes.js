const express = require('express');
const router = express.Router();

const homeController = require('../src/controllers/homeController');
const tarefaController = require("../src/controllers/tarefaController")

router.get('/', homeController.homeGet);
router.post('/', homeController.homePost);

router.get("/tarefas", tarefaController.tarefasGet)
router.post("/apagar", tarefaController.tarefaApagar)

module.exports = router;
