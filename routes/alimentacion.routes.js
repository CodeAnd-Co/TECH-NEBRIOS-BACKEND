/* Dependencias */
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

//Incluir Controladores
const obtenerAlimentosController = require("../controllers/obtener-alimentacion.controller.js");
const eliminarAlimentoController = require("../controllers/eliminar-alimentacion.controller.js");
const registrarAlimentoController = require("../controllers/agregar-alimentacion.controller.js");


//Metodo GET
router.get('/', obtenerAlimentosController.obtenerAlimentos); 

//Metodo POST
router.post('/agregar', registrarAlimentoController.registrarAlimento);


// Metodo PUT


//Metodo DELETE
router.delete('/eliminar/:idAlimento', eliminarAlimentoController.eliminarAlimento);


module.exports = router;