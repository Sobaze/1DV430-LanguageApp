import React, { Component } from 'react';
import { shuffle } from './shuffle';
import kanjiC from './kanjiCharacters'
// import useSound from 'use-sound'

import あめ from '../sounds/あめ.mp3'
import あん from '../sounds/あん.m4a'
import いち from '../sounds/いち.m4a'
import かい from '../sounds/かい.m4a'
import わらい from '../sounds/わらい.m4a'
import かん from '../sounds/かん.m4a'
import さん from '../sounds/さん.m4a'
import やすい from '../sounds/やすい.m4a'
import き from '../sounds/き.m4a'
import なん from '../sounds/なん.m4a'
import のむ from '../sounds/のむ.m4a'
import かむ from '../sounds/かむ.m4a'
import つむ from '../sounds/つむ.m4a'
import いん from '../sounds/いん.m4a'
import ぎん from '../sounds/ぎん.m4a'
import しん from '../sounds/しん.m4a'
import みぎ from '../sounds/みぎ.m4a'
import かぎ from '../sounds/かぎ.m4a'
import とき from '../sounds/とき.m4a'
import ゆき from '../sounds/ゆき.m4a'
import さる from '../sounds/さる.m4a'
import えき from '../sounds/えき.m4a'
import うま from '../sounds/うま.m4a'
import でんしゃ from '../sounds/でんしゃ.m4a'
import えん from '../sounds/えん.m4a'
import のう from '../sounds/のう.m4a'
import ひか from '../sounds/ひか.m4a'
import ごみ from '../sounds/ごみ.m4a'
import けす from '../sounds/けす.m4a'




class kanjiLesson1 extends Component {
    constructor() {
        super();
        this.ansButton = [];
        this.qNumber = 1;
        this.amountOfCompletes = 0;
        this.questionsNumberLength = 10
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
            startPractice: true,
            play: false
        }

        this.KanjiCharacter = shuffle(kanjiC.slice(0, 10))
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
    onRadioChange(e) {
        this.whatSound(e)
        this.setState({
            selectedOpt: e.target.value, bgColor: 'white', play: true
        }, () => {
            this.state.play ? this.audio.play() : this.audio.pause()
        })
    }
    whatSound(e) {
        if (e.target.value === 'あめ') {
            this.audio = new Audio(あめ)
        }
        if (e.target.value === 'あん') {
            this.audio = new Audio(あん)
        }
        if (e.target.value === 'やすい') {
            this.audio = new Audio(やすい)
        }
        if (e.target.value === 'かい') {
            this.audio = new Audio(かい)
        }
        if (e.target.value === 'わらい') {
            this.audio = new Audio(わらい)
        }
        if (e.target.value === 'かん') {
            this.audio = new Audio(かん)
        }
        if (e.target.value === 'いち') {
            this.audio = new Audio(いち)
        }
        if (e.target.value === 'さん') {
            this.audio = new Audio(さん)
        }
        if (e.target.value === 'き') {
            this.audio = new Audio(き)
        }
        if (e.target.value === 'さん') {
            this.audio = new Audio(さん)
        }
        if (e.target.value === 'なん') {
            this.audio = new Audio(なん)
        }
        if (e.target.value === 'のむ') {
            this.audio = new Audio(のむ)
        }
        if (e.target.value === 'かむ') {
            this.audio = new Audio(かむ)
        }
        if (e.target.value === 'つむ') {
            this.audio = new Audio(つむ)
        }
        if (e.target.value === 'いん') {
            this.audio = new Audio(いん)
        }
        if (e.target.value === 'ぎん') {
            this.audio = new Audio(ぎん)
        }
        if (e.target.value === 'しん') {
            this.audio = new Audio(しん)
        }
        if (e.target.value === 'みぎ') {
            this.audio = new Audio(みぎ)
        }
        if (e.target.value === 'かぎ') {
            this.audio = new Audio(かぎ)
        }
        if (e.target.value === 'とき') {
            this.audio = new Audio(とき)
        }
        if (e.target.value === 'ゆき') {
            this.audio = new Audio(ゆき)
        }
        if (e.target.value === 'さる') {
            this.audio = new Audio(さる)
        }
        if (e.target.value === 'えき') {
            this.audio = new Audio(えき)
        }
        if (e.target.value === 'うま') {
            this.audio = new Audio(うま)
        }
        if (e.target.value === 'でんしゃ') {
            this.audio = new Audio(でんしゃ)
        }
        if (e.target.value === 'えん') {
            this.audio = new Audio(えん)
        }
        if (e.target.value === 'のう') {
            this.audio = new Audio(のう)
        }
        if (e.target.value === 'ひ/か') {
            this.audio = new Audio(ひか)
        }
        if (e.target.value === 'ごみ') {
            this.audio = new Audio(ごみ)
        }
        if (e.target.value === 'けす') {
            this.audio = new Audio(けす)
        }
    }

    getKanji (i) {

        this.setState({ getNewQ : false, answerStatus: null, selectedOpt: null, bgColor: 'white'})

        this.kanjiQ = this.KanjiCharacter[this.qNumber - 1]

        this.shuffleAnswers = shuffle(this.kanjiQ.answers)

        this.correctAnswer = this.kanjiQ.correct

        this.setState( { kanjiQuestion: this.kanjiQ.kanji, kanjiAlternatives: this.correctAnswer, kanjiCorrect: this.correctAnswer, meaning: this.kanjiQ.meaning } )
         
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

               <h3>Kanji Lesson 1</h3>
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
                               <td>安</td>
                               <td>音読み : <b>あん</b> <br></br>訓読み:<b> やす-い </b></td>
                               <td>Peaceful, Cheap</td>
                           </tr>
                           <tr>
                               <td>一</td>
                               <td>音読み: <b>いち</b> <br></br>訓読み: <b>ひと,  ひと-つ </b></td>
                               <td>One</td>
                           </tr>
                           <tr>
                               <td>飲</td>
                               <td>音読み: <b>いん</b> <br></br>訓読み:<b> の-む </b></td>
                               <td>Drink</td>
                           </tr>
                           <tr>
                               <td>右</td>
                               <td>音読み: <b>う, ゆう</b> <br></br>訓読み:<b> みぎ </b></td>
                               <td>Right</td>
                           </tr>
                           <tr>
                               <td>雨</td>
                               <td>音読み: <b>くう</b> <br></br>訓読み:<b> あめ, あま </b></td>
                               <td>Rain</td>
                           </tr>
                           <tr>
                               <td>駅</td>
                               <td>音読み: <b>えき </b> <br></br>訓読み: <b>  </b></td>
                               <td>Station</td>
                           </tr>
                           <tr>
                               <td>円</td>
                               <td>音読み: <b>えん</b> <br></br>訓読み: <b>まる-い </b></td>
                               <td>Yen, Circle</td>
                           </tr>
                           <tr>
                               <td>火</td>
                               <td>音読み: <b>か</b> <br></br>訓読み: <b>ひ </b></td>
                               <td>Fire</td>
                           </tr>
                           </tbody>
                       </table>
                           </div>
                           <h4>Lesson content</h4>
                       <div className="kanjiPContent">
                       <p>安  is read as あん and it means peaceful</p>
                       <p>安い is read as やすい and it means cheap</p>
                       <p>一 is read as いち and it means one</p>
                       <p>飲 is read as いん and it means to drink</p>
                       <p>飲む is read as のむ and it means to drink</p>
                       <p>右 is read as みぎ and it means right (next corner turn to the right) </p>
                       <p>雨 is read as あめ and it means rain</p>
                       <p>駅 is read as えき and it means station </p>
                       <p>円 is read as えん and it mean yen</p>
                       <p>火 is read as ひ or か and it means fire </p>
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
               
               {/* <button className="stoppPractice"onClick={() => this.props.history.push("/Kanji")} >Stop practice</button> */}
           </div>
        );
    }

}

export default kanjiLesson1;