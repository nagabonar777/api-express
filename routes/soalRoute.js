const express = require('express');
const router = express.Router();
const soalController = require('../controllers/soalControllers');

// CREATE: Menambahkan data ke dalam tabel soals
router.post('/api/v1/soal/', soalController.create);

// READ: Menampilkan atau mengambil semua data dari tabel soals
router.get('/api/v1/soal/', soalController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/soal/:id', soalController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/soal/:id', soalController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/soal/:id', soalController.delete);

module.exports = router;