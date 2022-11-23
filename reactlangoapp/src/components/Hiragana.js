
import React, { Component } from 'react';
import hiraganaPic from '../pictures/hiraganaChart.jpg';
import tentenHiragana from '../pictures/tentenHiragana3.jpg'
import comboHiragana from '../pictures/ComboHiragana1.jpg'
import '../App.css';
// import hiraganaL from './HiraganaLetters'
// import  hiraganaPractice from './HiraganaPractice';
 
class hiragana extends Component {
    constructor() {
        super();
        this.state = {
            practiceNotStarted : true
        }
    }
    render () {
        return ( 
           <div className="hiragana-content">
              <h2>Hiragana</h2>
               <p>Hiragana is a Japanese syllabry, one component of the Japanese writing system, along with katakana and kanji. Hiragana means "simple"
                    or "ordinary"("simple" compared to kanji).<br/> 
                    The modern hiragana syllabry consists of 46 base characters:
                    </p>
                    <ur>
                        <li> 5 singular vowels</li>
                        <li> 40 consonant-vowel unions</li>
                        <li> 1 singular consonant</li>
                    </ur>
                    <p>These are concieved as a 5x10 grid (gojūon, 五十音, literally "fifty sounds"),
                         as illustrated in the adjacent table below,
                         read あ (a), い (i), う (u), え (e), お (o), か (ka), き (ki), く (ku), け (ke), こ (ko) and so on.</p>

                    <img src={comboHiragana} className="comboChart" alt="mixed hiragana chart"/>
                    <img src={tentenHiragana} className="tentenChart" alt="tenten hiragana chart"/>
                    <img src={hiraganaPic} className="ganaChart" alt="hiragana chart"/> 
                    <button className="startPractice"onClick={() => this.props.history.push("/HiraganaPractice")} >Start practice</button>
           </div>
        );
    }
}

 
export default hiragana;