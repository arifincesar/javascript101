//konsep squential
//program: menghitung luas segitiga
//rumus luas segitiga = (alas*tinggi) / 2

//input
const alas = 10;
const tinggi = 20;

//proses
const luassegitiga = (alas * tinggi) / 2;

//output
console.log("luas segitiga adalah " + luassegitiga);

//=========================================================
let a = 9;
let hasil = "";
if (a % 2 == 0) {
  hasil = "genap";
} else {
  hasil = "ganjil";
}

console.log("angka yang di masukkan " + hasil);
//=========================================================
let nomer = 10;
for (let i = 1; i <= nomer; i++) {
  if (nomer % i == 0) {
    console.log(i);
  }
}
//=========================================================
//program untuk menentukan apakah bilangan itu bilangan prima atau tidak
//bilangan prima pasti hanya punya 2 faktor
// contoh bilangan 5 -> 1 dan 5 -> faktornya cuma 2 (bilangan prima)
// contoh bilangan 8 -> 1,2,4,8 -> faktor ada 4 (bukan bilangan prima)

let number = 5;

let totalfaktor = 0;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    totalfaktor = totalfaktor + 1;
  }
}

if (totalfaktor == 2) {
  console.log("bilangan prima");
} else {
  console / log("bukan bilangan prima");
}
