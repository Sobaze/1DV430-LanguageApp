import React, { Component } from 'react';
import { shuffle } from './shuffle';
import kanjiC from './kanjiCharacters'

import きゅう from '../sounds/きゅう.m4a'
import なな from '../sounds/なな.m4a'
import いま from '../sounds/いま.m4a'
import さむ from '../sounds/さむ.m4a'
import あむ from '../sounds/あむ.m4a'
import やすむ from '../sounds/やすむ.m4a'
import さかな from '../sounds/さかな.m4a'
import うみ from '../sounds/うみ.m4a'
import ねこ from '../sounds/ねこ.m4a'
import きんこん from '../sounds/きんこん.m4a'
import くろい from '../sounds/くろい.m4a'
import すいか from '../sounds/すいか.m4a'
import かねかな from '../sounds/かねかな.m4a'
import くうそら from '../sounds/くうそら.m4a'
import みる from '../sounds/みる.m4a'
import よる from '../sounds/よる.m4a'
import げつ from '../sounds/げつ.m4a'
import にち from '../sounds/にち.m4a'
import いぬ from '../sounds/いぬ.m4a'
import つき from '../sounds/つき.m4a'
import ひ from '../sounds/ひ.m4a'
import そと from '../sounds/そと.m4a'
import けん from '../sounds/けん.m4a'
import もり from '../sounds/もり.m4a'
import つり from '../sounds/つり.m4a'
import いう from '../sounds/いう.m4a'
import かのう from '../sounds/かのう.m4a'
import かう from '../sounds/かう.m4a'
import こと from '../sounds/こと.m4a'
import さる from '../sounds/さる.m4a'



class kanjiLesson3 extends Component {
    constructor() {
        super();
        this.ansButton = [];
        this.qNumber = 1;
        this.amountOfCompletes = 0;
        this.questionsNumberLength = 12
        this.audio = new Audio();
        this.state = {
            meaning: null,
            kanjiQuestion : null,
            kanjiAlternatives: null,
            kanjiCorrect: null,
            answerStatus: null,
            getNewQ: false,
            selectedOpt: null,
            practiceDone : false,
            bgColor: 'white',
            startPractice: true
        }

        this.KanjiCharacter = shuffle(kanjiC.slice(22, 34))
    }

    componentDidMount() {
        this.getKanji()
        this.audio.addEventListener('ended', () => this.setState({ play: false}))
    }
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false}))
    }

    nextQ() {
        this.ansButton = [];
        this.checkPracticeDone()
        this.getKanji(this.qNumber)
    }

    checkAnswer() {
        for(let i = 0; i < this.ansButton.length; i++) {
            if (this.state.selectedOpt === this.state.kanjiCorrect) {
                this.selectedAlternative = this.state.selectedOpt
            }
        }
        this.controllAnswer(this.selectedAlternative)
    }
    controllAnswer(answer) {
        if (answer === this.state.kanjiCorrect) {
            this.setState({ answerStatus: 'Correct', getNewQ: true, bgColor: 'green'})
        } else {
            this.setState({ answerStatus: 'Incorrect', bgColor: 'red'})
        }
    }
    //Buttons when clicked
    onRadioChange(e) {
        this.whatSound(e)
        this.setState({
            selectedOpt: e.target.value, bgColor: 'white', play: true
        }, () => {
            this.state.play ? this.audio.play() : this.audio.pause()
        })
    }
    whatSound(e) {
        if (e.target.value === 'きゅう') {
            this.audio = new Audio(きゅう)
        }
        if (e.target.value === 'なな') {
            this.audio = new Audio(なな)
        }
        if (e.target.value === 'うみ') {
            this.audio = new Audio(うみ)
        }
        if (e.target.value === 'さむ') {
            this.audio = new Audio(さむ)
        }
        if (e.target.value === 'あむ') {
            this.audio = new Audio(あむ)
        }
        if (e.target.value === 'やすむ') {
            this.audio = new Audio(やすむ)
        }
        if (e.target.value === 'いま') {
            this.audio = new Audio(いま)
        }
        if (e.target.value === 'さかな') {
            this.audio = new Audio(さかな)
        }
        if (e.target.value === 'ねこ') {
            this.audio = new Audio(ねこ)
        }
        if (e.target.value === 'きん / こん') {
            this.audio = new Audio(きんこん)
        }
        if (e.target.value === 'くろい') {
            this.audio = new Audio(くろい)
        }
        if (e.target.value === 'すいか') {
            this.audio = new Audio(すいか)
        }
        if (e.target.value === 'かね / かな') {
            this.audio = new Audio(かねかな)
        }
        if (e.target.value === 'くう / そら') {
            this.audio = new Audio(くうそら)
        }
        if (e.target.value === 'みる') {
            this.audio = new Audio(みる)
        }
        if (e.target.value === 'よる') {
            this.audio = new Audio(よる)
        }
        if (e.target.value === 'げつ') {
            this.audio = new Audio(げつ)
        }
        if (e.target.value === 'にち') {
            this.audio = new Audio(にち)
        }
        if (e.target.value === 'いぬ') {
            this.audio = new Audio(いぬ)
        }
        if (e.target.value === 'つき') {
            this.audio = new Audio(つき)
        }
        if (e.target.value === 'ひ') {
            this.audio = new Audio(ひ)
        }
        if (e.target.value === 'そと') {
            this.audio = new Audio(そと)
        }
        if (e.target.value === 'けん') {
            this.audio = new Audio(けん)
        }
        if (e.target.value === 'もり') {
            this.audio = new Audio(もり)
        }
        if (e.target.value === 'つり') {
            this.audio = new Audio(つり)
        }
        if (e.target.value === 'あいだ  / ま') {
            this.audio = new Audio(いう)
        }
        if (e.target.value === 'かのう') {
            this.audio = new Audio(かのう)
        }
        if (e.target.value === 'かう') {
            this.audio = new Audio(かう)
        }
        if (e.target.value === 'こと') {
            this.audio = new Audio(こと)
        }
        if (e.target.value === 'いう') {
            this.audio = new Audio(いう)
        }
        if (e.target.value === 'さる') {
            this.audio = new Audio(さる)
        }
        if (e.target.value === 'さる') {
            this.audio = new Audio(さる)
        }
    }

    getKanji (i) {

        this.setState({ getNewQ : false, answerStatus: null, selectedOpt: null, bgColor: 'white'})

        this.kanjiQ = this.KanjiCharacter[this.qNumber - 1]

        this.shuffleAnswers = shuffle(this.kanjiQ.answers)

        this.correctAnswer = this.kanjiQ.correct

        this.setState( { kanjiQuestion: this.kanjiQ.kanji, kanjiAlternatives: this.correctAnswer, kanjiCorrect: this.correctAnswer, meaning: this.kanjiQ.meaning} )
        
        for (let i = 0; i < this.shuffleAnswers.length; i++) {
           this.ansButton.push(<label><input className="aButton" type="button" name="answerB"
                value={this.shuffleAnswers[i]} 
                onClick={this.onRadioChange.bind(this)}
                ></input></label>)
           }

    }

    startLessonPractice() {
        this.qNumber = 1
        this.setState({
            startPractice: false,
            practiceDone: false
        })
    }
    redoPractice() {

        this.setState({
            startPractice: true
        })
    }

    checkPracticeDone () {
        
        if (this.qNumber === this.questionsNumberLength) {
            this.setState({
                practiceDone: true
            })
            console.log('klart')
            this.amountOfCompletes++
        }
        else {
            this.qNumber++
        }
    }

    render() {
        return (
            <div className="hiragana-content">

               <h3>Kanji Lesson 3</h3>
               {this.state.startPractice ? (
                   <div>
                       <div className="tableDiv">
                       <table>
                           <tbody>
                           <tr className="tableTitle">
                               <td>Kanji</td>
                               <td>How to read</td>
                               <td>Meaning</td>
                           </tr>
                           <tr>
                               <td>九</td>
                               <td>音読み : <b>きゅう</b> <br></br>訓読み:<b> ここの, ここの-つ </b></td>
                               <td>Nine</td>
                           </tr>
                           <tr>
                               <td>休</td>
                               <td>音読み: <b>きゅう</b> <br></br>訓読み: <b>やす-む </b></td>
                               <td>Rest</td>
                           </tr>
                           <tr>
                               <td>魚</td>
                               <td>音読み: <b>ぎょ</b> <br></br>訓読み:<b> やすむ </b></td>
                               <td>Fish</td>
                           </tr>
                           <tr>
                               <td>金</td>
                               <td>音読み: <b>きん, こん</b> <br></br>訓読み:<b> かね, かな </b></td>
                               <td>Money, Gold</td>
                           </tr>
                           <tr>
                               <td>空</td>
                               <td>音読み: <b>くう</b> <br></br>訓読み:<b> そら, あ-く , から </b></td>
                               <td>Sky, Air, Empty</td>
                           </tr>
                           <tr>
                               <td>月</td>
                               <td>音読み: <b>げつ, がつ</b> <br></br>訓読み: <b> つき </b></td>
                               <td>Month, Moon</td>
                           </tr>
                           <tr>
                               <td>見</td>
                               <td>音読み: <b>けん</b> <br></br>訓読み: <b>み-る </b></td>
                               <td>See</td>
                           </tr>
                           <tr>
                               <td>言</td>
                               <td>音読み: <b>げん,  ごん</b> <br></br>訓読み: <b>い-う, こと </b></td>
                               <td>Say, Speech</td>
                           </tr>
                           </tbody>
                       </table>
                           </div>
                           <div className="kanjiPContent">
                       <h4>Lesson content</h4>
                       <p>九  is read as きゅう and it means nine</p>
                       <p>休 is read as きゅう and it means rest  </p>
                       <p>休む  is read as やす-む and it means rest  </p>
                       <p>魚 is read as やすむ and it means to fish</p>
                       <p>金 is read as きん / こん and it means gold</p>
                       <p>金 is read as かね / かな and it means money </p>
                       <p>空 is read as くう / そら and it means sky, air, empty</p>
                       <p>月 is read as げつ and it means month </p>
                       <p>月 is read as つき and it mean moon</p>
                       <p>見る is read as みる and it means see </p>
                       <p>見 is read as けん and it means see </p>
                       <p>言う is read as いう and it means say, speech </p>
                       <p>言 is read as こと and it means say, speech </p>
                       </div>
                   <button className="startPractice" onClick={this.startLessonPractice.bind(this)}>Start Lesson</button>
                   <button className="stoppPractice"onClick={() => this.props.history.push("/Kanji")} >Stop practice</button>
                   </div>
                   ) : 
                   <div>

               {this.state.practiceDone ? (
                   <div>
                   <p>Practice done, good job!</p>
                   <button className="GobkToLessoninformation" onClick={this.redoPractice.bind(this)}>Return to Lesson</button>
                   </div>
               ) :
               <div>
                        <p>Question {this.qNumber}/ {this.questionsNumberLength} </p>
                        <p>Guess the Kanji : </p>
                        <p className="GanaToGuess"> {this.state.kanjiQuestion} </p>
                        <p>Meaning: {this.state.meaning} </p>
                        <div className="answerArea">
                         {this.ansButton} 
                         </div>
                        <div>
                            <p className="answerStatus" style={{color: this.state.bgColor}}> The answer {this.state.selectedOpt} is {this.state.answerStatus} </p>
                            {this.state.getNewQ ? (
                                
                                <div>
                                <button className="NextQButton" onClick={this.nextQ.bind(this)}> Next Question</button>
                                <button className="GobkToLessoninformation" onClick={this.redoPractice.bind(this)}>Return to Lesson</button>
                                </div>
                                ) : 
                                <div>
                                <button className="answerButton" onClick={this.checkAnswer.bind(this)} > Answer</button>
                                <button className="GobkToLessoninformation" onClick={this.redoPractice.bind(this)}>Return to Lesson</button>
                                </div>
                                
                                } 

                        </div>
                    </div>
                }
               </div>
               }
           </div>
        );
    }

}

export default kanjiLesson3;