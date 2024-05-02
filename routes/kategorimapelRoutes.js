const express = require('express');
const router = express.Router();
const KategorimapelControllers = require('../controllers/kategorimapelControllers');
const authMiddleware = require("../middlewares/auth")

// CREATE: Menambahkan data ke dalam tabel mapels
router.post('/api/v1/kategorimapel/', KategorimapelControllers.create);

// READ: Menampilkan atau mengambil semua data dari tabel mapels
router.get('/api/v1/kategorimapel/', KategorimapelControllers.getAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/kategorimapel/:id', KategorimapelControllers.getById);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/kategorimapel/:id', KategorimapelControllers.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/kategorimapel/:id', KategorimapelControllers.delete);

module.exports = router;