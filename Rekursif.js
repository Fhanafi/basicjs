function tampil(n) {
  // base  case 
  if (n === 0) {
    return
  }
  console.log(n);
  tampil(n-1);
}

tampil(10);