/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Skrip app.js berhasil terhubung!");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI="Kedai Kopi Keni";
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let NAMA_KASIR = "Aca";
let SHIFT_KERJA = "Pagi"
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Nama Kedai : " + NAMA_KEDAI);
console.log("Kasir : " + NAMA_KASIR);
console.log("Shift : " + SHIFT_KERJA);

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
NAMA_KASIR = "Keni";
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Kasir : " + NAMA_KASIR);

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat Datang di Website Kedai Kopi Keni")
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let NAMA_PELANGGAN = prompt("Halo! Masukkan Nama Kamu Untuk Memesan");
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
 if (NAMA_PELANGGAN) {
        // jika user memasukkan nama maka akan ada greetings 
        alert("Halo!, " + NAMA_PELANGGAN + " Yuk kami bantu untuk memesan!");
        console.log("Pelanggan Membeli : " + NAMA_PELANGGAN);
    } else{
        // jika user tidak memasukkan nama, akan disebut anonim
        alert("Kamu tidak memasukkan nama, kamu disebut anonymous");
        NAMA_PELANGGAN = "Pelanggan Setia"
        console.log("Pelanggan Anonim : " + NAMA_PELANGGAN);
    }

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let POIN_KOPI = 15;
let POIN_MAKANAN = 5;
let POIN_MERCHANDISE = 20;
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let TOTAL_POIN = POIN_KOPI+ POIN_MAKANAN + POIN_MERCHANDISE;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("Poin Kamu : " + NAMA_PELANGGAN);
console.log("Poin Pembelian Kopi : " + POIN_KOPI);
console.log("Poin Pembelian Makanan : " + POIN_MAKANAN);
console.log("Poin Pembelian Merchandise : " + POIN_MERCHANDISE);

console.log("Perolehan Poin : " + TOTAL_POIN);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
let TIERMEMBER = "";
let BENEFIT = "";

// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"

if (TOTAL_POIN >= 100) {
    // kondisi  yang pertama kali di cek : apakah rata-rata 90?
    TIERMEMBER = "Platinum";
    BENEFIT = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (TOTAL_POIN >= 70) {
    // kondisi kedua dimana kondisi pertama tidak terpenuhi
    TIERMEMBER = "Gold";
    BENEFIT = "Diskon 10% di setiap transaksi";
} else if (TOTAL_POIN >= 40) {
    // kondisi ketiga dimana kondisi pertama dan kedua tidak memenuhi
    TIERMEMBER = "Silver";
    BENEFIT = "Diskon 5% untuk menu minuman";
} else {
    // jika semua kondisi diatas tidak memenuhi
    TIERMEMBER = "Bronze";
    BENEFIT = "Member Reguler (kumpulkan poin untuk naik tier)";
}
// 3. Cetak hasil tierMember dan benefit ke Console.
console.log("Benefit : " + BENEFIT + " TierMember : " + TIERMEMBER);

// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
alert(
    "Nama : " + NAMA_PELANGGAN + "\n" + // \n artinya enter
    "Total Poin : " + TOTAL_POIN + "\n" +  
    "TierMember : " + TIERMEMBER + "\n" +
    "Benefit : " + BENEFIT
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotalPoin(p1, p2, p3) {
    return p1 + p2 + p3;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function tentukanTierMember(poin) {
    if (poin >= 100) {
        return { tier: "Platinum", benefit: "Diskon 20% + Gratis 1 Minum Signature" };
    } else if (poin >= 70) {
        return { tier: "Gold", benefit: "Diskon 10% di setiap transaksi" };
    } else if (poin >= 40) {
        return { tier: "Silver", benefit: "Diskon 5% untuk menu minuman" };
    } else {
        return { tier: "Bronze", benefit: "Member Reguler (kumpulkan poin untuk naik tier)" }
    }
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
let totalPoinB = hitungTotalPoin(35, 25, 20);
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
let totalPoinC = hitungTotalPoin(15, 10, 5);
// 3. Cetak data Pelanggan B dan C ke tab Console.
console.log("RINCIAN POIN: Pelanggan B");
console.log("Total Poin: " + totalPoinB);
let tierB = tentukanTierMember(totalPoinB); 
console.log("Tier Member: " + tierB.tier);
console.log("Benefit: " + tierB.benefit);

console.log("RINCIAN POIN: Pelanggan C");
console.log("Total Poin: " + totalPoinC);
let tierC = tentukanTierMember(totalPoinC); 
console.log("Tier Member: " + tierC.tier);
console.log("Benefit: " + tierC.benefit);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
let menuRekomendasi = ["Americano", "Matcha", "Latte", "Mix Platter", "Mocha"];

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
for (let i = 0; i < menuRekomendasi.length; i++) {
    console.log((i + 1) + ". " + menuRekomendasi[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("Jumlah Total Menu: " + menuRekomendasi.length);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");