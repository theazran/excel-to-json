const xlsx = require('xlsx');
const fs = require('fs');

// Baca file Excel
const workbook = xlsx.readFile('data.xlsx');

// Ambil sheet pertama pada file Excel
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Konversi sheet menjadi array of objects
const rows = xlsx.utils.sheet_to_json(sheet);

// Simpan data sebagai file JSON
fs.writeFileSync('data.json', JSON.stringify(rows), 'utf8');

console.log('Data berhasil diubah menjadi file JSON');
