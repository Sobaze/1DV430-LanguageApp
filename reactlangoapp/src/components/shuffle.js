/** 
 * Module for shuffle.
 *
 * @module src/shuffle
 * @author Frank Mitchell
 * @version 1.1.0
 */

/**
* Shuffles the deck array.
* Copied from https://www.frankmitchell.org/2015/01/fisher-yates/
*
* @param {array} array - The deck to be shuffled.
* @returns {array} array - The same array mutated and shuffled.
*/

function shuffle (array) {
  let i = 0
  let j = 0
  let temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export { shuffle }