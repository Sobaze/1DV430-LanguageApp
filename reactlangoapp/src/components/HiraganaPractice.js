import React, { Component } from 'react';
import hiraganaL from './HiraganaLetters';
import { shuffle } from './shuffle';

import あ from '../sounds/hiragana/あ.m4a'
import い from '../sounds/hiragana/い.m4a'
import う from '../sounds/hiragana/う.m4a'
import え from '../sounds/hiragana/え.m4a'
import お from '../sounds/hiragana/お.m4a'
import か from '../sounds/hiragana/か.m4a'
import き from '../sounds/hiragana/き.m4a'
import く from '../sounds/hiragana/く.m4a'
import け from '../sounds/hiragana/け.m4a'
import こ from '../sounds/hiragana/こ.m4a'
import さ from '../sounds/hiragana/さ.m4a'
import し from '../sounds/hiragana/し.m4a'
import す from '../sounds/hiragana/す.m4a'
import せ from '../sounds/hiragana/せ.m4a'
import そ from '../sounds/hiragana/そ.m4a'
import た from '../sounds/hiragana/た.m4a'
import ち from '../sounds/hiragana/ち.m4a'
import つ from '../sounds/hiragana/つ.m4a'
import て from '../sounds/hiragana/て.m4a'
import と from '../sounds/hiragana/と.m4a'
import な from '../sounds/hiragana/な.m4a'
import に from '../sounds/hiragana/に.m4a'
import ぬ from '../sounds/hiragana/ぬ.m4a'
import ね from '../sounds/hiragana/ね.m4a'
import の from '../sounds/hiragana/の.m4a'
import は from '../sounds/hiragana/は.m4a'
import ひ from '../sounds/hiragana/ひ.m4a'
import ふ from '../sounds/hiragana/ふ.m4a'
import へ from '../sounds/hiragana/へ.m4a'
import ほ from '../sounds/hiragana/ほ.m4a'
import ま from '../sounds/hiragana/ま.m4a'
import み from '../sounds/hiragana/み.m4a'
import む from '../sounds/hiragana/む.m4a'
import め from '../sounds/hiragana/め.m4a'
import も from '../sounds/hiragana/も.m4a'
import や from '../sounds/hiragana/や.m4a'
import ゆ from '../sounds/hiragana/ゆ.m4a'
import よ from '../sounds/hiragana/よ.m4a'
import ら from '../sounds/hiragana/ら.m4a'
import り from '../sounds/hiragana/り.m4a'
import る from '../sounds/hiragana/る.m4a'
import れ from '../sounds/hiragana/れ.m4a'
import ろ from '../sounds/hiragana/ろ.m4a'
import わ from '../sounds/hiragana/わ.m4a'
import を from '../sounds/hiragana/を.m4a'
import ん from '../sounds/hiragana/ん.m4a'

import が from '../sounds/hiragana/が.m4a'
import ぎ from '../sounds/hiragana/ぎ.m4a'
import ぐ from '../sounds/hiragana/ぐ.m4a'
import げ from '../sounds/hiragana/げ.m4a'
import ご from '../sounds/hiragana/ご.m4a'
import ざ from '../sounds/hiragana/ざ.m4a'
import じ from '../sounds/hiragana/じ.m4a'
import ず from '../sounds/hiragana/ず.m4a'
import ぜ from '../sounds/hiragana/ぜ.m4a'
import ぞ from '../sounds/hiragana/ぞ.m4a'
import だ from '../sounds/hiragana/だ.m4a'
import ぢ from '../sounds/hiragana/じ.m4a'
import づ from '../sounds/hiragana/づ.m4a'
import で from '../sounds/hiragana/で.m4a'
import ど from '../sounds/hiragana/ど.m4a'
import ば from '../sounds/hiragana/ば.m4a'
import び from '../sounds/hiragana/び.m4a'
import ぶ from '../sounds/hiragana/ぶ.m4a'
import ベ from '../sounds/hiragana/ベ.m4a'
import ぼ from '../sounds/hiragana/ぼ.m4a'
import ぱ from '../sounds/hiragana/ぱ.m4a'
import ぴ from '../sounds/hiragana/ぴ.m4a'
import ぷ from '../sounds/hiragana/ぷ.m4a'
import ぺ from '../sounds/hiragana/ぺ.m4a'
import ぽ from '../sounds/hiragana/ぽ.m4a'

import きゃ from '../sounds/hiragana/きゃ.m4a'
import きゅ from '../sounds/hiragana/きゅ.m4a'
import きょ from '../sounds/hiragana/きょ.m4a'
import ぎゃ from '../sounds/hiragana/ぎゃ.m4a'
import ぎゅ from '../sounds/hiragana/ぎゅ.m4a'
import ぎょ from '../sounds/hiragana/ぎょ.m4a'
import しゃ from '../sounds/hiragana/しゃ.m4a'
import しゅ from '../sounds/hiragana/しゅ.m4a'
import しょ from '../sounds/hiragana/しょ.m4a'
import じゃ from '../sounds/hiragana/じゃ.m4a'
import じゅ from '../sounds/hiragana/じゅ.m4a'
import じょ from '../sounds/hiragana/じょ.m4a'
import ちゃ from '../sounds/hiragana/ちゃ.m4a'
import ちゅ from '../sounds/hiragana/ちゅ.m4a'
import ちょ from '../sounds/hiragana/ちょ.m4a'
import ぢゃ from '../sounds/hiragana/じゃ.m4a'
import ぢゅ from '../sounds/hiragana/じゅ.m4a'
import ぢょ from '../sounds/hiragana/じょ.m4a'
import にゃ from '../sounds/hiragana/にゃ.m4a'
import にゅ from '../sounds/hiragana/にゅ.m4a'
import にょ from '../sounds/hiragana/にょ.m4a'
import ひゃ from '../sounds/hiragana/ひゃ.m4a'
import ひゅ from '../sounds/hiragana/ひゅ.m4a'
import ひょ from '../sounds/hiragana/ひょ.m4a'
import びゃ from '../sounds/hiragana/びゃ.m4a'
import びゅ from '../sounds/hiragana/びゅ.m4a'
import びょ from '../sounds/hiragana/びょ.m4a'
import ぴゃ from '../sounds/hiragana/ぴゃ.m4a'
import ぴゅ from '../sounds/hiragana/ぴゅ.m4a'
import ぴょ from '../sounds/hiragana/ぴょ.m4a'
import みゃ from '../sounds/hiragana/みゃ.m4a'
import みゅ from '../sounds/hiragana/みゅ.m4a'
import みょ from '../sounds/hiragana/みょ.m4a'
import りゃ from '../sounds/hiragana/りゃ.m4a'
import りゅ from '../sounds/hiragana/りゅ.m4a'
import りょ from '../sounds/hiragana/りょ.m4a'

class hiraganaPractice extends Component {
    constructor() {
        super();
        this.ansButton = [];
        this.audio = new Audio();
        this.state = {
            ganaQuestion : null,
            ganaAlternatives : null,
            ganaCorrect: null,
            answerStatus : null,
            getNewQ : false,
            selectedOpt: null,
            bgColor: 'white'
        }
    }
    componentDidMount() {
        this.getRandomGana()
        this.audio.addEventListener('ended', () => this.setState({ play: false}))
    }
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false}))
    }
    nextQ() {
        this.ansButton = [];
        this.getRandomGana()
    }
    getRandomGana() {
        this.setState({ getNewQ : false, answerStatus: null, selectedOpt: null, bgColor: 'white'})
        // shuffling the hiragana to practice on
         this.ganaQ = shuffle(hiraganaL)[0]
         
         // shuffling the answer alternatives
         this.randomGanaA = shuffle(this.ganaQ.answers)
         //to know what the answer is
         this.correctGana = this.ganaQ.correct
         
         this.setState( { ganaQuestion: this.ganaQ.gana, ganaAlternatives: this.randomGanaA, ganaCorrect: this.correctGana } )
         
         for (let i = 0; i < this.randomGanaA.length; i++) {
            this.ansButton.push(<label><input className="aButton" type="button" name="answerB"
                 value={this.randomGanaA[i]} 
                 onClick={this.onRadioChange.bind(this)}
                 ></input></label>)
            }
        }

        checkAnswer() {
            for(let i = 0; i < this.ansButton.length; i++) {
                if (this.state.selectedOpt === this.state.ganaCorrect) {
                    this.selectedAlternative = this.state.selectedOpt
                }
            }
            this.controllAnswer(this.selectedAlternative)
        }
        controllAnswer(answer) {
            if (answer === this.state.ganaCorrect) {
                this.setState({ answerStatus: 'Correct', getNewQ: true, bgColor: 'green'})
            } else {
                this.setState({ answerStatus: 'Incorrect', bgColor: 'red'})
            }
        }
        onRadioChange(e) {
            this.whatSound(e)
            this.setState({
                selectedOpt: e.target.value, bgColor: 'white', play: true
            }, () => {
                this.state.play ? this.audio.play() : this.audio.pause()
            })
        } 
        whatSound(e) {
            if (e.target.value === 'A') {
                this.audio = new Audio(あ)
            }
            if (e.target.value === 'I') {
                this.audio = new Audio(い)
            }
            if (e.target.value === 'U') {
                this.audio = new Audio(う)
            }
            if (e.target.value === 'E') {
                this.audio = new Audio(え)
            }
            if (e.target.value === 'O') {
                this.audio = new Audio(お)
            }
            if (e.target.value === 'KA') {
                this.audio = new Audio(か)
            }
            if (e.target.value === 'KI') {
                this.audio = new Audio(き)
            }
            if (e.target.value === 'KU') {
                this.audio = new Audio(く)
            }
            if (e.target.value === 'KE') {
                this.audio = new Audio(け)
            }
            if (e.target.value === 'KO') {
                this.audio = new Audio(こ)
            }
            if (e.target.value === 'HO') {
                this.audio = new Audio(ほ)
            }
            if (e.target.value === 'SA') {
                this.audio = new Audio(さ)
            }
            if (e.target.value === 'SHI') {
                this.audio = new Audio(し)
            }
            if (e.target.value === 'SU') {
                this.audio = new Audio(す)
            }
            if (e.target.value === 'SE') {
                this.audio = new Audio(せ)
            }
            if (e.target.value === 'SO') {
                this.audio = new Audio(そ)
            }
            if (e.target.value === 'TA') {
                this.audio = new Audio(た)
            }
            if (e.target.value === 'CHI') {
                this.audio = new Audio(ち)
            }
            if (e.target.value === 'TSU') {
                this.audio = new Audio(つ)
            }
            if (e.target.value === 'TE') {
                this.audio = new Audio(て)
            }
            if (e.target.value === 'TO') {
                this.audio = new Audio(と)
            }
            if (e.target.value === 'NA') {
                this.audio = new Audio(な)
            }
            if (e.target.value === 'NI') {
                this.audio = new Audio(に)
            }
            if (e.target.value === 'NU') {
                this.audio = new Audio(ぬ)
            }
            if (e.target.value === 'NE') {
                this.audio = new Audio(ね)
            }
            if (e.target.value === 'NO') {
                this.audio = new Audio(の)
            }
            if (e.target.value === 'HA') {
                this.audio = new Audio(は)
            }
            if (e.target.value === 'HI') {
                this.audio = new Audio(ひ)
            }
            if (e.target.value === 'FU') {
                this.audio = new Audio(ふ)
            }
            if (e.target.value === 'HE') {
                this.audio = new Audio(へ)
            }
            if (e.target.value === 'MA') {
                this.audio = new Audio(ま)
            }
            if (e.target.value === 'MI') {
                this.audio = new Audio(み)
            }
            if (e.target.value === 'MU') {
                this.audio = new Audio(む)
            }
            if (e.target.value === 'ME') {
                this.audio = new Audio(め)
            }
            if (e.target.value === 'MO') {
                this.audio = new Audio(も)
            }
            if (e.target.value === 'YA') {
                this.audio = new Audio(や)
            }
            if (e.target.value === 'YU') {
                this.audio = new Audio(ゆ)
            }
            if (e.target.value === 'YO') {
                this.audio = new Audio(よ)
            }
            if (e.target.value === 'RA') {
                this.audio = new Audio(ら)
            }
            if (e.target.value === 'RI') {
                this.audio = new Audio(り)
            }
            if (e.target.value === 'RU') {
                this.audio = new Audio(る)
            }
            if (e.target.value === 'RE') {
                this.audio = new Audio(れ)
            }
            if (e.target.value === 'RO') {
                this.audio = new Audio(ろ)
            }
            if (e.target.value === 'WA') {
                this.audio = new Audio(わ)
            }
            if (e.target.value === 'WO') {
                this.audio = new Audio(を)
            }
            if (e.target.value === 'N') {
                this.audio = new Audio(ん)
            }
            if (e.target.value === 'GA') {
                this.audio = new Audio(が)
            }
            if (e.target.value === 'GI') {
                this.audio = new Audio(ぎ)
            }
            if (e.target.value === 'GU') {
                this.audio = new Audio(ぐ)
            }
            if (e.target.value === 'GE') {
                this.audio = new Audio(げ)
            }
            if (e.target.value === 'GO') {
                this.audio = new Audio(ご)
            }
            if (e.target.value === 'ZA') {
                this.audio = new Audio(ざ)
            }
            if (e.target.value === 'JI') {
                this.audio = new Audio(じ)
            }
            if (e.target.value === 'ZU') {
                this.audio = new Audio(ず)
            }
            if (e.target.value === 'ZE') {
                this.audio = new Audio(ぜ)
            }
            if (e.target.value === 'ZO') {
                this.audio = new Audio(ぞ)
            }
            if (e.target.value === 'DA') {
                this.audio = new Audio(だ)
            }
            if (e.target.value === 'JI') {
                this.audio = new Audio(ぢ)
            }
            if (e.target.value === 'ZU') {
                this.audio = new Audio(づ)
            }
            if (e.target.value === 'DE') {
                this.audio = new Audio(で)
            }
            if (e.target.value === 'DO') {
                this.audio = new Audio(ど)
            }
            if (e.target.value === 'BA') {
                this.audio = new Audio(ば)
            }
            if (e.target.value === 'BI') {
                this.audio = new Audio(び)
            }
            if (e.target.value === 'BU') {
                this.audio = new Audio(ぶ)
            }
            if (e.target.value === 'BE') {
                this.audio = new Audio(ベ)
            }
            if (e.target.value === 'BO') {
                this.audio = new Audio(ぼ)
            }
            if (e.target.value === 'PA') {
                this.audio = new Audio(ぱ)
            }
            if (e.target.value === 'PI') {
                this.audio = new Audio(ぴ)
            }
            if (e.target.value === 'PU') {
                this.audio = new Audio(ぷ)
            }
            if (e.target.value === 'PE') {
                this.audio = new Audio(ぺ)
            }
            if (e.target.value === 'PO') {
                this.audio = new Audio(ぽ)
            }
            if (e.target.value === 'KYA') {
                this.audio = new Audio(きゃ)
            }
            if (e.target.value === 'KYU') {
                this.audio = new Audio(きゅ)
            }
            if (e.target.value === 'KYO') {
                this.audio = new Audio(きょ)
            }
            if (e.target.value === 'GYA') {
                this.audio = new Audio(ぎゃ)
            }
            if (e.target.value === 'GYU') {
                this.audio = new Audio(ぎゅ)
            }
            if (e.target.value === 'GYO') {
                this.audio = new Audio(ぎょ)
            }
            if (e.target.value === 'SHA') {
                this.audio = new Audio(しゃ)
            }
            if (e.target.value === 'SHU') {
                this.audio = new Audio(しゅ)
            }
            if (e.target.value === 'SHO') {
                this.audio = new Audio(しょ)
            }
            if (e.target.value === 'JA') {
                this.audio = new Audio(じゃ)
            }
            if (e.target.value === 'JU') {
                this.audio = new Audio(じゅ)
            }
            if (e.target.value === 'JO') {
                this.audio = new Audio(じょ)
            }
            if (e.target.value === 'CHA') {
                this.audio = new Audio(ちゃ)
            }
            if (e.target.value === 'CHU') {
                this.audio = new Audio(ちゅ)
            }
            if (e.target.value === 'CHO') {
                this.audio = new Audio(ちょ)
            }
            if (e.target.value === 'JA') {
                this.audio = new Audio(ぢゃ)
            }
            if (e.target.value === 'JU') {
                this.audio = new Audio(ぢゅ)
            }
            if (e.target.value === 'JO') {
                this.audio = new Audio(ぢょ)
            }
            if (e.target.value === 'NYA') {
                this.audio = new Audio(にゃ)
            }
            if (e.target.value === 'NYU') {
                this.audio = new Audio(にゅ)
            }
            if (e.target.value === 'NYO') {
                this.audio = new Audio(にょ)
            }
            if (e.target.value === 'HYA') {
                this.audio = new Audio(ひゃ)
            }
            if (e.target.value === 'HYU') {
                this.audio = new Audio(ひゅ)
            }
            if (e.target.value === 'HYO') {
                this.audio = new Audio(ひょ)
            }
            if (e.target.value === 'BYA') {
                this.audio = new Audio(びゃ)
            }
            if (e.target.value === 'BYU') {
                this.audio = new Audio(びゅ)
            }
            if (e.target.value === 'BYO') {
                this.audio = new Audio(びょ)
            }
            if (e.target.value === 'PYA') {
                this.audio = new Audio(ぴゃ)
            }
            if (e.target.value === 'PYU') {
                this.audio = new Audio(ぴゅ)
            }
            if (e.target.value === 'PYO') {
                this.audio = new Audio(ぴょ)
            }
            if (e.target.value === 'MYA') {
                this.audio = new Audio(みゃ)
            }
            if (e.target.value === 'MYU') {
                this.audio = new Audio(みゅ)
            }
            if (e.target.value === 'MYO') {
                this.audio = new Audio(みょ)
            }
            if (e.target.value === 'RYA') {
                this.audio = new Audio(りゃ)
            }
            if (e.target.value === 'RYU') {
                this.audio = new Audio(りゅ)
            }
            if (e.target.value === 'RYO') {
                this.audio = new Audio(りょ)
            }
            
        }
        render() {
        return (
            <div className="hiragana-content">

               <h3>Practice Hiragana</h3>
               <p>Guess the hiragana : </p>
               <p className="GanaToGuess"> {this.state.ganaQuestion} </p>
               <div className="answerArea">
                 {this.ansButton} 
               </div>
               <div>
                   <p className="answerStatus" style={{color: this.state.bgColor}}> The answer {this.state.selectedOpt} is {this.state.answerStatus} </p>
                   {this.state.getNewQ ? (
                       
                       <button className="NextQButton" onClick={this.nextQ.bind(this)}> Next Question</button>
                       ) : 
                       <button className="answerButton" onClick={this.checkAnswer.bind(this)} > Answer</button>
                    } 

               </div>
               <button className="stoppPractice"onClick={() => this.props.history.push("/Hiragana")} >Stop practice</button>
           </div>
        );
    }
}

export default hiraganaPractice; 
