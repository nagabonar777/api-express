const db = require('../database/models');
const Kategorimapel = db.Kategorimapel;
const bcrypt = require("bcryptjs")

const kategorimapelControllers = {
  // Menampilkan semua mapel
  async getAll(req, res, next) {
    try {
      const kategorimapel = await Kategorimapel.findAll();
      res.json(kategorimapel);
    } catch (error) {
      next(error);
    }
  },

  // Menampilkan detail mapel berdasarkan ID
  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const kategorimapel = await Kategorimapel.findByPk(id);
      if (!kategorimapel) {
        return res.status(404).json({ error: 'kategori mapel not found' });
      }
      res.json(kategorimapel);
    } catch (error) {
      next(error);
    }
  },

  // Menambahkan mapel baru
  async create(req, res, next) {
    const { nama_kategori } = req.body;
    try {
      const newKategorimapel = await Kategorimapel.create({
        nama_kategori,
      });
      res.status(201).json(newKategorimapel);
    } catch (error) {
      next(error);
    }
  },

  // Memperbarui mapel berdasarkan ID
  async update(req, res, next) {
    const { id } = req.params;
    const { nama_kategori } = req.body;
    try {
      const kategorimapel = await Kategorimapel.findByPk(id);
      if (!kategorimapel) {
        return res.status(404).json({ error: 'kategori mapel not found' });
      }
      await kategorimapel.update({
        nama_kategori,
      });
      res.json(kategorimapel);
    } catch (error) {
      next(error);
    }
  },

  // Menghapus mapel berdasarkan ID
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const kategorimapel = await Kategorimapel.findByPk(id);
      if (!kategorimapel) {
        return res.status(404).json({ error: 'kategori mapel not found' });
      }
      await kategorimapel.destroy();
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = kategorimapelControllers;