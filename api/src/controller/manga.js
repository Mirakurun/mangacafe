const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.all = async (req, res, next) => {
  try {
    const mangas = await prisma.manga.findMany();

    res.status(200).json(mangas);
  } catch (error) {
    next(error);
  }
};

exports.one = async (req, res, next) => {
  try {
    const { id } = req.params;
    const manga = await prisma.manga.findUnique({ where: { id } });

    res.status(200).json(manga);
  } catch (error) {
    next(error);
  }
};

exports.add = async (req, res, next) => {
  try {
    const { ...data } = req.body;

    const manga = await prisma.manga.create({
      data,
    });

    res.status(201).json(manga);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;

    const manga = await prisma.manga.update({ where: { id }, data });

    res.status(200).json(manga);
  } catch (error) {
    next(error);
  }
};
