const reverse = (string) => {
  return string.split('').reverse().join('')
}

const forEachReverse = (string) => {
  let array = []
  string.split('').forEach((letter)=>{
    array.unshift(letter)
  })
  return array.join('')
}

const mapReverse = (string) => {
  return Array.prototype.map.call(string, (letter)=>{
    return letter
  }).reverse().join('')
}

const reduceReverse = (string) => {
  return string.split('').reduce((acc, letter)=>{
    acc.unshift(letter)
    return acc
  },[]).join('')
}

const forReverse = (string) => {
  let arr = string.split('')
  let result = [];
  for(var i=arr.length-1; i >= 0; i--){
    result.push(arr[i])
  }
  return result.join('');
}

const forLoopReverse = (word) => {
  let string = ''
  for(var i=word.length-1; i >= 0; i--){
    string += word[i]
  }
  return string;
}

const whileReverse = (word) => {
  let string = ''
  var i = word.length-1
  while(i >= 0){
    string=string+word[i]
    i--
  }
  return string;
}

module.exports = { reverse, forEachReverse, mapReverse,
                   reduceReverse, forReverse, forLoopReverse, whileReverse };
