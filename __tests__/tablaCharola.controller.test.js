// RF11 Descargar datos:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF11

const  tablaCharolaController  = require('../controllers/tablaCharola.controller.js');
const tablaCharolaModel = require('../models/tablaCharola.model.js');
const excelUtils = require('../utils/excelGenerador.js');


jest.mock('../models/tablaCharola.model');
jest.mock('../utils/excelGenerador.js');

/**
 * Pruebas unitarias para el controlador tablaCharola.
 * @group Tests - Controlador Charola
 */
describe('Controlador tablaCharola', () => {
    let req, res;
    beforeEach(() => {
        // Simulaciones básicas de req y res para probar controladores
        req = {
            body: {},
            params: {},
            query: {},
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            setHeader: jest.fn(),
            send: jest.fn()
        };
    });
    
    test('[GET] Debe responder con código 200 y status ok cuando hay información de charolas', async () => {
        const mockResultado = [{ nombreCharola: 'A', fechaCreacion: '2024-01-01', fechaActualizacion: '2024-01-02', pesoCharola: 100, comidaCiclo: 50, hidratacionCiclo: 20, estado: 'activo', densidadLarva: 10 }];
        tablaCharolaModel.tablaCharolas.mockResolvedValue(mockResultado);

        await tablaCharolaController.getTablasCharolas(req,res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({code: "Ok", resultado: mockResultado });
    });

    test('[GET] Debe responder con código 201 y status ok cuando NO hay información de charolas', async () => {
        const mockResultado = [];
        tablaCharolaModel.tablaCharolas.mockResolvedValue(mockResultado);

        await tablaCharolaController.getTablasCharolas(req,res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({code: "Ok", resultado: mockResultado });
    });

    test('[GET] Debe responder con código 500 y error cuando ocurre algun tipo de error en el flujo', async () => {
        tablaCharolaModel.tablaCharolas.mockRejectedValue(new Error('DB error'));

        await tablaCharolaController.getTablasCharolas(req,res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({error: expect.any(String)});
    });

    test('[POST] Debe responder 200 y enviar un archivo Excel cuando hay datos', async () => {
        const datosMock = [
            { nombreCharola: 'A', fechaCreacion: '2024-01-01', fechaActualizacion: '2024-01-02', pesoCharola: 100, comidaCiclo: 50, hidratacionCiclo: 20, estado: 'activo', densidadLarva: 10 }
        ];

        const bufferMock = Buffer.from('excel data');

        tablaCharolaModel.tablaCharolas.mockResolvedValue(datosMock);
        excelUtils.generarExcelDesdeDatos.mockResolvedValue(bufferMock);

        await tablaCharolaController.postDescargarExcel(req, res);

        expect(res.setHeader).toHaveBeenCalledWith(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        expect(res.setHeader).toHaveBeenCalledWith(
            'Content-Disposition',
            'attachment; filename=charolas.xlsx'
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(expect.any(Buffer));
    });

    test('[Post] Debe responder 201 y con error si no hay datos', async () => {
        tablaCharolaModel.tablaCharolas.mockResolvedValue([]);

        await tablaCharolaController.postDescargarExcel(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ error: 'No hay datos de charolas' });
        });

        test('[Post] Debe responder 500 y manejar errores del servidor', async () => {
        tablaCharolaModel.tablaCharolas.mockRejectedValue(new Error('DB error'));

        await tablaCharolaController.postDescargarExcel(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ Error: 'Ocurrio un error en el servidor' });
    });
})

