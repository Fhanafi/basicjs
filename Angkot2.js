let angkot = 10;
let nomor = 1;
let operasi = 6;

for (nomor; nomor <= angkot; nomor++) {
  if (nomor <= operasi) {
    console.log(`angkot jalan no ${nomor}`)
  } else if (nomor == 8 || nomor == 10){
    console.log(`angkot no ${nomor} lembur`)
  } else {
    console.log(`angkot ${nomor} tidak jalan`)
  }
}