// RF18 Historial de actividad:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF18

const historialActividadController  = require('../controllers/historialCharola.controller.js');
const historialActividadModel = require('../models/historialCharola.model.js');

jest.mock('../models/historialCharola.model');

describe('Controlador historial de actividad', () => {
    let req, res;

    beforeEach(() => {
        req = {
            query: { charolaId: '2' }  // simula una charolaId
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        jest.clearAllMocks();
    });

    test('[GET] Debe responder con código 200 cuando hay información sobre alimentación e hidratación', async () => {
        const estadoMock = { estado: 'activa', fechaActualizacion: '10/05/2025' };
        const alimentacionMock = [{ nombre: 'Harina', cantidadOtorgada: '5', fechaOtorgada: '11/05/2025' }];
        const hidratacionMock = [{ nombre: 'Agua', cantidadOtorgada: '10', fechaOtorgada: '11/05/2025' }];

        historialActividadModel.historialAlimentacion.mockResolvedValue(alimentacionMock);
        historialActividadModel.historialHidratacion.mockResolvedValue(hidratacionMock);
        historialActividadModel.estadoCharola.mockResolvedValue(estadoMock);

        await historialActividadController.obtenerHistorialActividad(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            codigo: 'Ok',
            estado: estadoMock,
            alimentacion: alimentacionMock,
            hidratacion: hidratacionMock
        });
    });

    test('[GET] Debe responder con código 201 cuando NO hay información sobre alimentación ni hidratación', async () => {
        const estadoMock = { estado: 'inactiva', fechaActualizacion: '10/05/2025' };

        historialActividadModel.historialAlimentacion.mockResolvedValue([]);
        historialActividadModel.historialHidratacion.mockResolvedValue([]);
        historialActividadModel.estadoCharola.mockResolvedValue(estadoMock);

        await historialActividadController.obtenerHistorialActividad(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            codigo: 'Ok',
            estado: estadoMock
        });
    });

    test('[GET] Debe responder con código 500 cuando ocurre un error interno del servidor', async () => {
        historialActividadModel.historialAlimentacion.mockRejectedValue(new Error('Fallo inesperado'));

        await historialActividadController.obtenerHistorialActividad(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            error: 'Ocurrio un error en el servidor'
        });
    });
});
