/**
 * Module for testing Kanji
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */

 
 import kanjiC from '../components/kanjiCharacters'

 // Test so that the correct first kanji gets in on the first lesson
 test('Should return the first kanji for our lessons', () => {
     let expected = '安い'
     let real = kanjiC[0].kanji
     expect(real).toBe(expected)
 })

 // Test to see if it contains the correct answer alternatives
test('The answer alternatives should be [ "やすい", "かい", "わらい" ] ', () => {
    let expected = [ "やすい", "かい", "わらい" ]
    let real = kanjiC[0].answers
    expect(real).toStrictEqual(expected)
})


