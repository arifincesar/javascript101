//============================================
//             JavaScript101                //
//============================================

console.log("hello mawah mas sayang adek");

//=====deklrasi data
let namaku = "yoga";
let namamu = "mawah";
let sapa = `halo ${namaku}`;
console.log(sapa);
console.log(namaku[2]);

//=====concate (menambah atau menyambung)
let perasaan = namaku + " " + namamu;
console.log(perasaan);

//======menghitung jumlah data
console.log(perasaan.length);

//======memotong data
let potong = perasaan.substring(0, 4);
console.log(potong);

//=====konversi data to interger
let nomer = "10anjay";
let konversi = nomer.substring(0, 2);
console.log(parseInt(nomer) + 10); //tipe string berubah jadi tipe interger

//=====konversi data to string
let nomerr = 100;
let numberToString = nomerr.toString();
console.log(nomerr + 200);
console.log(numberToString + 200);
