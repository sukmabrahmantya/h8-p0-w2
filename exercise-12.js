function konversiMenit(menit) {
  
    var jam = Math.floor(menit / 60);
    var menit = menit % 60
    var waktu = ''

    if (menit < 10) {
        waktu = jam + ':0' + menit
    } else {
        waktu = jam + ':' + menit
    }
    
    return waktu;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00