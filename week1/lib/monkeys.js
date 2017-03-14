//
//
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',
//              'z']
//
// const key = ['p','h','q','g','i','u','m','e','a','y','l','n','o','f','d','x','j','k','r','c','v','s','t','z','w',
//              'b']
//
// // hello = einnd
//
//
//
//
//
//
//
//
//
// const key = 12345
//
// function encrypt(string){
//   return string.split('').map((letter)=>{
//     return letter.charCodeAt()
//   }).join('')
// }
//
// function decrypt(string){
//   return string.split('-').map((letter)=>{
//     return String.fromCharCode(letter)^12345
//   }).join('')
// }
//
//
//
//
//
// function encrypt(string, key){
//   return string.split('').map((item)=>{
//     return key[alphabet.indexOf(item)]
//   }).join('')
// }
//
// function decrypt(string, key){
//    return string.split('').map((item)=>{
//     return alphabet[key.indexOf(item)]
//   }).join('')
// }
//
// console.log(encrypt('bwdasda', key))
//
// console.log(decrypt('htgprgp', key))
