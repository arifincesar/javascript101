//======================================================

console.log("============kasus 7===========");
//input

let no = 20;
let faktorbilangan = [];
//proses
for (let i = 1; i <= no; i++) {
  if (no % i == 0) {
    //memasukkan nilai ke array
    faktorbilangan.push(i);
  }
}

//output
console.log(faktorbilangan);

//ganti dan assign nilai
faktorbilangan[0] = 10000;
console.log(faktorbilangan);
