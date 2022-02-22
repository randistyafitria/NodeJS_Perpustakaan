require('dotenv').config();             //file yg pertama kali dijalankan saat nodemon / SERVERnya
const express = require('express');     // ini SERVER, dideklaraasi biar bisa jalan
const app = express();                  // ini SERVER, dideklarasikan biar bisa jalan
const anggotaRouter = require("./api/anggota/anggota.router");
const petugasRouter = require("./api/petugas/petugas.router");
const pinjamRouter = require("./api/pinjam/pinjam.router");
const bukuRouter = require("./api/buku/buku.router");
app.use(express.json());
app.use("/api/anggota", anggotaRouter); 
app.use("/api/petugas", petugasRouter);
app.use("/api/pinjam", pinjamRouter)
app.use("/api/buku", bukuRouter)

app.listen(process.env.APP_PORT, ()=>{
console.log("Tersambung di PORT : " + process.env.APP_PORT)
})