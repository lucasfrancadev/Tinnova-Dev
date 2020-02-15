const { Router } = require('express');
const CalculaVotos = require('../../../atividades/Exercise_1/src/controllers/CalculaVotos');
const Fatorial = require('../../../atividades/Exercise_3/index');

const routes = Router();

routes.post('/Exercise1', CalculaVotos.percentualVotos);
routes.post('/Exercise3', Fatorial.getFatorial);

module.exports = routes;
