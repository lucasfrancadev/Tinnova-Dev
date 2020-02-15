const { Router } = require('express');
const CalculaVotos = require('../../../atividades/Exercise_1/src/controllers/CalculaVotos');

const routes = Router();

routes.post('/Exercise1', CalculaVotos.percentualVotos);

module.exports = routes;