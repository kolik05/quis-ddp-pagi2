const prompt = require("prompt-sync")();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
  {
    q: "Yang merupakan member JKT 48?",
    o: ["Jokowi", "Freya", "Nadin Amizah", "Igun Mama Takut"],
    a: 1,
  },
  {
    q: "Nama kakak Upin dan Ipin adalah...",
    o: ["Kak Rose", "Kak Jeane", "Monkey D. Luffy", "Igun Mama Takut"],
    a: 0,
  },
  {
    q: "Pulau Komodo terletak di provinsi?",
    o: ["Bali", "NTT", "NTB", "Jawa Timur"],
    a: 1,
  },
  {
    q: "Apa nama mata uang dari negara Thailand?",
    o: ["Won", "Rupiah", "Dollar", "Bath"],
    a: 3,
  },
  {
    q: "Danau terbesar di dunia adalah…",
    o: ["Danau Toba", "Danau Baikal", "Danau Kaspia", "Dabau Victoria"],
    a: 2,
  },
];

let nama = prompt("Input nama: ");

// Loop melalui setiap pertanyaan
for (let i = 0; i < soal.length; i++) {
  console.log("\nSoal " + (i + 1) + ": " + soal[i].q);

  // Menampilkan pilihan jawaban
  for (let j = 0; j < soal[i].o.length; j++) {
    console.log(j + ". " + soal[i].o[j]);
  }

  // Meminta jawaban dari pengguna
  let jawaban = prompt("Jawaban Anda (masukkan angka pilihan): ");

  // Memeriksa apakah jawaban benar
  if (parseInt(jawaban) === soal[i].a) {
    console.log("Jawaban Anda benar!");
    score += point_per_soal;
    jawaban_benar++;
  } else {
    console.log(
      "Jawaban Anda salah. Jawaban yang benar adalah: " + soal[i].o[soal[i].a]
    );
    jawaban_salah++;
  }
}

console.log("\nKuis selesai");
console.log("\nStatistic Kuis");
console.log("Nama\t\t:", nama);
console.log("Score\t\t:", score);
console.log("Jawaban benar\t:", jawaban_benar);
console.log("Jawaban salah\t:", jawaban_salah);
