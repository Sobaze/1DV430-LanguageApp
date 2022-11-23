/**
 * Module for testing Katakana
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */



 import katakana from '../components/KatakanaLetters'

 // Test to controll how many katakanas there is.
 test('Length of the katakanas should be 107', () => {
     let expected = 107
     let real = katakana.length
     expect(real).toBe(expected)
 })

 //Test to see that the first katakana is the correct one
test('The first katakana should be ア', () => {
    let expected = 'ア'
    let real = katakana[0].gana
    expect(real).toBe(expected)
})

// Test to see if it contains the correct answer alternatives
test('The answer alternatives should be [ "KA", "KI", "KU", "KE", "KO" ] ', () => {
    let expected = [ "KA", "KI", "KU", "KE", "KO" ]
    let real = katakana[6].answers
    expect(real).toStrictEqual(expected)
})
