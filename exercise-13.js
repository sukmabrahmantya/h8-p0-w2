function xo(str) {
    var hurufX = 0
    var hurufO = 0

    for (var i = 0; i < str.length; i++){
        if (str[i] == 'x'){
            hurufX++
        } else {
            hurufO++
        }
    }

    if (hurufX == hurufO) {
        return true
    } else {
        return false
    }

}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true