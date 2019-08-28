// Tugas 1
function shoutOut() {
    var tugas1 = 'Hallo Function'
    return tugas1
}

console.log('Nomor 1');
console.log(shoutOut());
console.log('');


// Tugas 2
function calculateMultiply(num1, num2) {
    return num1 * num2;
}

var num1 = 5;
var num2 = 2;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log('Nomor 2');
console.log(hasilPerkalian);
console.log('');


// Nomor 3
function processSentence(name, age, address, hoby) {
    var gabung = ('Nama saya ' + name + ', umur saya ' + age + ', alamat saya di ' + address + ', dan saya punya hobi yaitu ' + hobby)
    return gabung;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log('Nomor 3');
console.log(fullSentence);


