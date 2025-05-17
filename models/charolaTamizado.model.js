// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = class Tamizado {
    constructor({
    charolas = [],
    tipoComida = '',
    tipoHidratacion = '',
    cantidadComida = 0,
    cantidadHidratacion = 0,
    cantidadPupa = 0,
    cantidadFras = 0,
    fecha = new Date()
  }) {
    this.charolas = charolas;
    this.tipoComida = tipoComida;
    this.tipoHidratacion = tipoHidratacion;
    this.cantidadComida = cantidadComida;
    this.cantidadHidratacion = cantidadHidratacion;
    this.cantidadPupa = cantidadPupa;
    this.cantidadFras = cantidadFras;
    this.fecha = new Date(fecha);
  }

  async tamizarIndividual() {
    try {
        return await prisma.$transaction(async (tx) => {
        // Buscar IDs de comida e hidratación
        const comida = await tx.cOMIDA.findFirst({
            where: { nombre: this.nombreComida },
        });
        const hidratacion = await tx.hIDRATACION.findFirst({
            where: { nombre: this.nombreHidratacion },
        });

        if (!comida || !hidratacion) {
            throw new Error("Nombre de comida o hidratación no válido");
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
        const nombresEncontrados = new Set(charolasBD.map(c => c.nombreCharola));
        const nombresFaltantes = this.charolas.filter(n => !nombresEncontrados.has(n));
        if (nombresFaltantes.length > 0) {
            throw new Error(`Charolas no encontradas: ${nombresFaltantes.join(', ')}`);
        }

        // Crear mapa nombre → id para acceso fácil
        const mapaCharolas = new Map();
        charolasBD.forEach(c => mapaCharolas.set(c.nombreCharola, c.charolaId));

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
        console.error("Error al tamizar charola:", error);
        return error;
  }
}


  async tamizadoMultiple() {
    return await prisma.$transaction(async (tx) => {
        // 0. Buscar IDs de charolas por nombre
        const charolasBD = await tx.cHAROLA.findMany({
        where: {
            nombreCharola: { in: this.charolas },
        },
        select: {
            charolaId: true,
            nombreCharola: true,
        },
        });

        // Validar que se encontraron todas
        const nombresEncontrados = new Set(charolasBD.map(c => c.nombreCharola));
        const nombresFaltantes = this.charolas.filter(n => !nombresEncontrados.has(n));
        if (nombresFaltantes.length > 0) {
        throw new Error(`Charolas no encontradas: ${nombresFaltantes.join(', ')}`);
        }

        // Crear mapa nombre → id
        const mapaCharolas = new Map();
        charolasBD.forEach(c => mapaCharolas.set(c.nombreCharola, c.charolaId));

        // 1. Crear FRAS
        const fras = await tx.fRAS.create({
        data: {
            gramosGenerados: this.cantidadFras,
            fechaRegistro: this.fecha,
        },
        });

        // 2. Crear PUPA
        const pupa = await tx.pUPA.create({
        data: {
            cantidadObtenida: this.cantidadPupa,
            fechaRegistro: this.fecha,
        },
        });

        // 3. Procesar cada charola (por nombre)
        for (const nombre of this.charolas) {
        const charolaId = mapaCharolas.get(nombre);

        await tx.cHAROLA_FRAS.create({
            data: {
            charolaId,
            frasId: fras.frasId,
            },
        });

        await tx.cHAROLA_PUPA.create({
            data: {
            charolaId,
            pupaId: pupa.pupaId,
            },
        });

        await tx.cHAROLA.update({
            where: { charolaId },
            data: {
            fechaActualizacion: this.fecha,
            },
        });
        }

        return true;
    });
  }
}