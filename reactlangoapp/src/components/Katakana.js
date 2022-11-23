import React, { Component } from 'react';
import katakanaPic from '../pictures/katakanaChart.jpg'
import tentenKatakana from '../pictures/tentenKatakana4.jpg'
import comboKatakana from '../pictures/ComboKatakana.jpg'
 
class katakana extends Component {
    constructor()  {
        super();
        this.state = {
            prac : false
        }
    }
    render() {

        return (
           <div className="katakana-content">
              <h1>Katakana</h1>
               <p>Katakana is a Japanese syllabry, one component of the Japanese writing system, along with hiragana and kanji. Katakana means
                   "fragmentary kana" as the characters are fragments from more complex kanji. Katakana is used for transcription of foreign languages into
                   Japanese and the writing of "loan words".
               </p>
               <p>The complete katakana script consist of 48 characters</p>
               <ur>
                        <li> 5 nuclues vowels</li>
                        <li> 42 consonant-vowel unions</li>
                        <li> 1 singular consonant</li>
                    </ur>
                    <p>These are conceived as a 5×10 grid (gojūon, 五十音, literally "fifty sounds"), 
                        as shown in the adjacent table, read ア (a), イ (i), ウ (u), エ (e), オ (o), カ (ka), キ (ki), ク (ku), ケ (ke), コ (ko)
                         and so on
                    </p>
                    <img src={comboKatakana} className="comboChart" alt=" combo katakana chart"/>
                    <img src={tentenKatakana} className="tentenChart" alt="tenten katakana chart"/>
                    <img src={katakanaPic} className="ganaChart" alt="katakana chart"/>
                    <button className="startPractice"onClick={() => this.props.history.push("/KatakanaPractice")} >Start practice</button>
           </div>
        );
    }
}
 
export default katakana;