// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


/**
 * Clase que representa el proceso de tamizado de charolas.
 * @class
 */
module.exports = class Tamizado {
    /**
   * Crea una instancia de Tamizado.
   * @param {string[]} charolas - Lista de nombres de charolas a procesar.
   * @param {string} tipoComida - Tipo de comida otorgada.
   * @param {string} tipoHidratacion - Tipo de hidratación otorgada.
   * @param {number} cantidadComida - Cantidad de comida otorgada a cada charola.
   * @param {number} cantidadHidratacion - Cantidad de hidratación otorgada a cada charola.
   * @param {number} cantidadPupa - Cantidad de pupas obtenidas.
   * @param {number} cantidadFras - Cantidad de fras (residuos) obtenidos en gramos.
   * @param {Date|string} fecha - Fecha del tamizado.
   */
    constructor({
    charolas = [],
    tipoComida = '',
    tipoHidratacion = '',
    cantidadComida = 0,
    cantidadHidratacion = 0,
    cantidadPupa = 0,
    cantidadFras = 0,
    fecha = new Date(),
    charolasParaTamizar = []
  }) {
    this.charolas = charolas;
    this.tipoComida = tipoComida;
    this.tipoHidratacion = tipoHidratacion;
    this.cantidadComida = cantidadComida;
    this.cantidadHidratacion = cantidadHidratacion;
    this.cantidadPupa = cantidadPupa;
    this.cantidadFras = cantidadFras;
    this.fecha = new Date(fecha);
    this.charolasParaTamizar = charolasParaTamizar;
  }

  /**
   * Realiza el tamizado para una sola charola.
   * Registra la comida, hidratación, fras y pupa asociada a la charola.
   * 
   * @async
   * @returns {Promise<boolean|Error>} Retorna `true` si el tamizado fue exitoso, o un `Error` si ocurre una falla.
   */

  async tamizarIndividual() {
    try {
        return await prisma.$transaction(async (tx) => {
        // Buscar IDs de comida e hidratación
        const comida = await tx.cOMIDA.findFirst({
            where: { nombre: this.tipoComida },
        });
        const hidratacion = await tx.hIDRATACION.findFirst({
            where: { nombre: this.tipoHidratacion },
        });

        if (!comida || !hidratacion) {
            throw new Error('Nombre de comida o hidratación no válido');
        }

        // Obtener todos los IDs de charolas por nombre
        const charolasBD = await tx.cHAROLA.findMany({
            where: {
            nombreCharola: { in: this.charolas },
            },
            select: {
            charolaId: true,
            nombreCharola: true,
            },
        });

        // Validar que se encontraron todas las charolas
        const nombresEncontrados = new Set(charolasBD.map(charola => charola.nombreCharola));
        const nombresFaltantes = this.charolas.filter(nombre => !nombresEncontrados.has(nombre));
        if (nombresFaltantes.length > 0) {
            throw new Error(`Charolas no encontradas: ${nombresFaltantes.join(', ')}`);
        }

        // Crear mapa nombre → id para acceso fácil
        const mapaCharolas = new Map();
        charolasBD.forEach(charola => mapaCharolas.set(charola.nombreCharola, charola.charolaId));

        // Crear FRAS
        const fras = await tx.fRAS.create({
            data: {
            gramosGenerados: this.cantidadFras,
            fechaRegistro: this.fecha,
            },
        });

        // Crear PUPA
        const pupa = await tx.pUPA.create({
            data: {
            cantidadObtenida: this.cantidadPupa,
            fechaRegistro: this.fecha,
            },
        });

        // Procesar cada charola por nombre
        for (const nombre of this.charolas) {
            const charolaId = mapaCharolas.get(nombre);

            await tx.cHAROLA_FRAS.create({
            data: { charolaId, frasId: fras.frasId },
            });

            await tx.cHAROLA_PUPA.create({
            data: { charolaId, pupaId: pupa.pupaId },
            });

            await tx.cHAROLA_COMIDA.create({
            data: {
                charolaId,
                comidaId: comida.comidaId,
                cantidadOtorgada: this.cantidadComida,
                fechaOtorgada: this.fecha,
            },
            });

            await tx.cHAROLA_HIDRATACION.create({
            data: {
                charolaId,
                hidratacionId: hidratacion.hidratacionId,
                cantidadOtorgada: this.cantidadHidratacion,
                fechaOtorgada: this.fecha,
            },
            });

            await tx.cHAROLA.update({
            where: { charolaId },
            data: {
                comidaCiclo: { increment: this.cantidadComida },
                hidratacionCiclo: { increment: this.cantidadHidratacion },
                fechaActualizacion: this.fecha,
            },
            });
        }

        return true;
        });
    } catch (error) {
        console.error('Error al tamizar charola:', error);
        return error;
  }
}

/**
   * Realiza el tamizado para varias charolas.
   * Registra los ancestros de las nuevas chrolas.
   * Actualiza las charolas tamizadas a estatus 'pasada'
   * 
   * @async
   * @returns {Promise<boolean|Error>} Retorna `true` si el tamizado fue exitoso, o un `Error` si ocurre una falla.
   */

  async tamizadoMultiple() {
    return await prisma.$transaction(async (tx) => {
        for (let charola of this.charolas) {
            const nuevaCharola = await tx.CHAROLA.create({
                data: {
                    nombreCharola: charola.nombre,
                    fechaCreacion: new Date(charola.fechaCreacion),
                    fechaActualizacion: new Date(charola.fechaActualizacion),
                    densidadLarva: charola.densidadLarva,
                    pesoCharola: charola.pesoCharola,
                    estado: 'activa',
                    comidaCiclo: charola.comidas[0].cantidadOtorgada,
                    hidratacionCiclo: charola.hidrataciones[0].cantidadOtorgada,

                    CHAROLA_COMIDA: {
                        create: charola.comidas.map(charola => ({
                            cantidadOtorgada: charola.cantidadOtorgada,
                            fechaOtorgada: charola.fechaOtorgada
                            ? new Date(charola.fechaOtorgada)
                            : new Date(),
                            COMIDA: { connect: { comidaId: charola.comidaId } }
                        }))
                    },
                    CHAROLA_HIDRATACION: {
                        create: charola.hidrataciones.map(hidratacion => ({
                            cantidadOtorgada: hidratacion.cantidadOtorgada,
                            fechaOtorgada: hidratacion.fechaOtorgada
                            ? new Date(hidratacion.fechaOtorgada)
                            : new Date(),
                            HIDRATACION: { connect: { hidratacionId: hidratacion.hidratacionId } }
                        }))
                    }
                },
            });
            
            for(let ancestro of this.charolasParaTamizar){
                await tx.cHAROLA_CHAROLA.create({
                    data: {
                        charolaHija: nuevaCharola.charolaId,
                        charolaAncestro: ancestro.charolaId
                    }
                })
            }
        }

        for(let charolaPasada of this.charolasParaTamizar){
            await tx.CHAROLA.update(
                {
                    where: {
                        charolaId: charolaPasada.charolaId
                    },
                    data: {
                        estado: 'pasada'
                    }
                }
            )
        }

        return true;
    });
  }
}