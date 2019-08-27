// Let's From a Sentence
var word = 'JavaScript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth = 'love'
var seventh = 'it!'

console.log('Nomor 1')
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)
console.log(' ')


//Index Accessin - 1 by 1
var word = 'wow JavaScript is so cool'
var firstWord = word[0] + word[1] + word[2]
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
var thirdWord = word[15] + word[16]
var fourthWord = word[18] + word[19]
var fifthWord = word[21] + word[22] + word[23] + word[24]

console.log('Nomor 2')
console.log('First Word : ' + firstWord)
console.log('Second Word : ' + secondWord)
console.log('Third Word : ' + thirdWord)
console.log('Fourth Word : ' + fourthWord)
console.log('Fifth Word : ' + fifthWord)
console.log('')


//Breaking Sentence (again) using Substring
var word2 = 'wow JavaScript is so cool'
var firstWord2 = word2.substring(0,3)
var secondWord2 = word2.substring(4,14)
var thirdWord2 = word2.substring(15,17)
var fourthWord2 = word2.substring(18,20)
var fifthWord2 = word2.substring(21,25)

console.log('Nomor 3')
console.log('First Word : ' + firstWord2)
console.log('Second Word : ' + secondWord2)
console.log('Third Word : ' + thirdWord2)
console.log('Fourth Word : ' + fourthWord2)
console.log('Fifth Word : ' + fifthWord2)
console.log('')


//Breaking Sentence (yet Again) and Count Each Length
var word3 = 'wow JavaScript is so cool'
var firstWord3 = word3.substring(0,3)
var secondWord3 = word3.substring(4,14)
var thirdWord3 = word3.substring(15,17)
var fourthWord3 = word3.substring(18,20)
var fifthWord3 = word3.substring(21,25)

var firstWordLength = firstWord3.length 
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length

console.log('Nomor 4')
console.log('First Word : ' + firstWord3 + ', with length : ' + firstWordLength)
console.log('Second Word : ' + secondWord3 + ', with length : ' + secondWordLength)
console.log('Third Word : ' + thirdWord3 + ', with length : ' + thirdWordLength)
console.log('Fourth Word : ' + fourthWord3 + ', with length : ' + fourthWordLength)
console.log('Fifth Word : ' + fifthWord3 + ', with length : ' + fifthWordLength)
console.log('')