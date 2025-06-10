const express = require('express'); //Importa o módulo 'express', que é o framework web utilizado
const router = express.Router(); //Cria um novo objeto de roteador do Express, que será usado para definir rotas da aplicação
const agendamentoController = require('../controllers/agendamentoControllers'); // Importa o controlador de agendamentos, que contém as funções para lidar com as requisições

// Define a rota principal ("/") que responde a requisições GET
// Essa rota chama a função getIndexView do controlador
router.get('/', agendamentoController.getIndexView);

// Define a rota "/agendamentos" que responde a requisições GET
// Essa rota chama a função getAgendamentosView do controlador
router.get('/agendamentos', agendamentoController.getAgendamentosView);

// Define a rota "/agendar_consulta" que responde a requisições POST
// Essa rota chama a função postAgendarConsulta do controlador
router.post('/agendar_consulta', agendamentoController.postAgendarConsulta);

module.exports = router;