// Melakukan Looping Menggunakan While
var pertama = 2
var pertama2 = 20

console.log('Nomor 1')
console.log('LOOPING PERTAMA')
while (pertama <= 20) {
    console.log(pertama + ' - I love coding')
    pertama += 2
}
console.log('LOOPING KEDUA')
while (pertama2 >= 0) {
    console.log(pertama2 + ' - I will become fullstack developer')
    pertama2 -= 2
}

console.log('')


// Melakukan Looping Menggunakan For
console.log('Nomor 2')
console.log('LOOPING PERTAMA')
for(i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding')
}
console.log('LOOPING KEDUA')
for(i = 20; i > 0; i--) {
    console.log(i + ' - I love coding')
}

console.log('')


//Angka Ganjil dan Genap
console.log('Nomor 3')
for (var i = 1; i <= 100; i++){
    if (i %2 == 0) {
        console.log(i + ' GENAP')
    } else {
        console.log(i + ' GANJIL')
    }
}

console.log('')
console.log('KELIPATAN 3')
for (var k = 1; k <= 100; k+=2){
    if ( k % 3 == 0) {
        console.log(k + ' Kelipatan 3')
    }
}

console.log('')
console.log('KELIPATAN 5')
for (var l = 1; l <= 100; l+=5){
    if ( l % 5 == 0) {
        console.log(l + ' Kelipatan 5')
    }
}

console.log('')
console.log('KELIPATAN 10')
for (var m = 1; m <= 100; m+=9){
    if ( m % 10 == 0) {
        console.log(m + ' Kelipatan 10')
    }
}
