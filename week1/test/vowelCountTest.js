// var { assert } = require('chai');
// var { isCharVowel, countVowelsInString, determineMost } = require('../lib/vowelCount.js');
//
// describe('IronFE', function() {
//   it('vowel check should return true', function() {
//
//     assert.deepEqual(isCharVowel('a'), true);
//     assert.deepEqual(isCharVowel('e'), true);
//     assert.deepEqual(isCharVowel('i'), true);
//     assert.deepEqual(isCharVowel('o'), true);
//     assert.deepEqual(isCharVowel('u'), true);
//   });
//   it('vowel check should return false', function() {
//
//     assert.deepEqual(isCharVowel('l'), false);
//     assert.deepEqual(isCharVowel('j'), false);
//     assert.deepEqual(isCharVowel('k'), false);
//     assert.deepEqual(isCharVowel('q'), false);
//     assert.deepEqual(isCharVowel('p'), false);
//   });
//   it('vowel count test', function() {
//
//     assert.deepEqual(countVowelsInString('a'), 1);
//     assert.deepEqual(countVowelsInString('aaa'), 3);
//     assert.deepEqual(countVowelsInString('abcde'), 2);
//     assert.deepEqual(countVowelsInString(''), 0);
//     assert.deepEqual(countVowelsInString('aeiou'), 5);
//     assert.deepEqual(countVowelsInString('aeu df ge'), 4);
//
//   });
//
//   it('determine most test', function() {
//
//     assert.deepEqual(determineMost(['aaaa', 'aa', 'aaaa', 'aaaaa']), {score: 5, string: 'aaaaa'});
//
//     assert.deepEqual(determineMost(['hello there', 'what is a llama', 'this is a lot of vowels aeiou', 'suh dude']), {score: 12, string: 'this is a lot of vowels aeiou'});
//
//   });
// })
