// # Week 1

// 1. Sum all numbers in an array

function kungfoo(input) {
    var sum = input.reduce(function(acc, iter, i){
        return acc + iter*2
    }, 0)
    return sum;
}

// 2. capitalize the second word of a string

function kungfoo(input) {
  var array = input.split(' ').map(function(item, i){
      if(i%2 !== 0 && i !== 0){
        return item.toUpperCase()
      } else {
        return item
      }
    })
    return array.join(' ');
}


function largestPalindrome(){

  var x = 1000;
  var y = 999;
  var counter = 2;

  while(x > 0){

    result = x*y;
    array = result.toString().split('')

    console.log(array);

    if(array[0]===array[array.length] && array[1]===array[array.length-1]){
      console.log(array.join(''));
      return array.join('')
    }

    if(counter %2 === 0){
      x--
    } else {
      y--
    }

    counter++
  }
}
