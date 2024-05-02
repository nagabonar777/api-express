const db = require("../database/models");
const Soal = db.Soal;

// CREATE: Menambahkan data ke dalam tabel Soals
exports.create = (req, res) => {
    // Validasi permintaan
    if (!req.body.nama_soal) {
        return res.status(400).send({
            message: "Nama soal tidak boleh kosong",
        });
    }

    // Data yang diperoleh dari inputan oleh pengguna
    const soal = {
        nama_soal: req.body.nama_soal,
    };

    // Proses menyimpan ke dalam database
    Soal.create(soal).then((data) => {
        res.json({
            message: "soal berhasil dibuat.",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat membuat soal.",
            data: null,
        });
    });
};

// READ: Menampilkan atau mengambil semua data dari tabel soals
exports.findAll = (req, res) => {
    Soal.findAll().then((soals) => {
        res.json({
            message: "Data kategoris berhasil diambil.",
            data: soals,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat mengambil data kategoris.",
            data: null,
        });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
    const id = req.params.id;

    // Field untuk memperbarui data kategori
    const soalData = {
        nama_soal: req.body.nama_soal,
        // Tambahkan bidang lain sesuai kebutuhan
    };

    Soal.update(soalData, {
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Soal berhasil diperbarui.",
                data: soalData,
            });
        } else {
            res.json({
                message: 'Tidak dapat memperbarui kategori dengan id=${id}. Mungkin kategori tidak ditemukan atau req.body kosong!',
                data: soalData,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat memperbarui kategori.",
            data: null,
        });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
    const id = req.params.id;
    Soal.destroy({
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Kategori berhasil dihapus.",
                data: req.body,
            });
        } else {
            res.json({
                message: 'Tidak dapat menghapus kategori dengan id=${id}. Mungkin kategori tidak ditemukan!',
                data: req.body,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat menghapus kategori.",
            data: null,
        });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
    Soal.findByPk(req.params.id).then((soal) => {
        if (!kategori) {
            return res.status(404).json({
                message: 'Kategori dengan id=${req.params.id} tidak ditemukan.',
                data: null,
            });
        }
        res.json({
            message: "Kategori berhasil ditemukan.",
            data: kategori,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat mengambil kategori.",
            data: null,
        });
    });
};