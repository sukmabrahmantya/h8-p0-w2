// Menyusun Barisan Bintang
console.log('Nomor 1')
var row1 = 5;

for (var i = 0; i < row1; i++){
    console.log('*');
}
    
console.log('')
    

// Menyusun Barisan Bintang Dengan Nested Looping
console.log('Nomor 2')
var row2 = 5;
var hasil2 = '';
    
for (var j = 0; j < row2; j++){
    for (var k = 0; k < row2; k++){
        hasil2 += '*'      
    }
    console.log(hasil2);
    hasil2 = ''
}
    
console.log('')
    

//Menyusun Barisan Bintang Dengan Nested Looping
console.log('Nomor 3')
var row3 = 5;
var hasil3 = '';

for (var l = 0; l < row3; l++){
    for (var m = 0; m <= l; m++){
        hasil3 += '*'
    }
    console.log(hasil3);
    hasil3 =''

}


