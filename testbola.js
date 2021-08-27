let bola = 1;
let tinggi = 12;

for (bola; bola <= tinggi; bola++) {
  if (bola == 5) {
    console.log(`menyentuh ketinggian ideal`)
  } else if (bola >= 5){
    console.log(`lebih tinggi dari ideal`)
  } else {
    console.log(`kurang dari ideal`)
  }
}