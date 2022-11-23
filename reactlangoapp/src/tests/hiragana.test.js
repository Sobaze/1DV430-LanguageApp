/**
 * Module for testing hiragana
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */


 import hiragana  from '../components/HiraganaLetters';
 

 // Tests so its the correct amount of Hiraganas
 test('The length should be 107', () => {
     let expected = 107
     let real = hiragana.length
     expect(real).toBe(expected)
 })

//Test to see that the first hiragana is the correct one
test('The first Hiragana should be あ', () => {
    let expected = 'あ'
    let real = hiragana[0].gana
    expect(real).toBe(expected)
})

// Test to see if it contains the correct answer alternatives
test('The answer alternatives should be [ "A", "I", "U", "E", "O" ] ', () => {
    let expected = [ "A", "I", "U", "E", "O" ]
    let real = hiragana[0].answers
    expect(real).toStrictEqual(expected)
})

