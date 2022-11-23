import React, { Component } from 'react';
import { shuffle } from './shuffle';
import kanjiC from './kanjiCharacters'

import した from '../sounds/した.m4a'
import あか from '../sounds/あか.m4a'
import うえ from '../sounds/うえ.m4a'
import かけ from '../sounds/かけ.m4a'
import はな from '../sounds/はな.m4a'
import さかな from '../sounds/さかな.m4a'
import なに from '../sounds/なに.m4a'
import なになん from '../sounds/なになん.m4a'
import かみ from '../sounds/かみ.m4a'
import きみ from '../sounds/きみ.m4a'
import あう from '../sounds/あう.m4a'
import さそう from '../sounds/さそう.m4a'
import あそぼう from '../sounds/あそぼう.m4a'
import かい from '../sounds/かい.m4a'
import たこ from '../sounds/たこ.m4a'
import えみ from '../sounds/えみ.m4a'
import そと from '../sounds/そと.m4a'
import なか from '../sounds/なか.m4a'
import かん from '../sounds/かん.m4a'
import がく from '../sounds/がく.m4a'
import さす from '../sounds/さす.m4a'
import きく from '../sounds/きく.m4a'
import まなぶ from '../sounds/まなぶ.m4a'
import えらぶ from '../sounds/えらぶ.m4a'
import きぼう from '../sounds/きぼう.m4a'
import あいだま from '../sounds/あいだま.m4a'
import さ from '../sounds/さ.m4a'
import もん from '../sounds/もん.m4a'
import かんけん from '../sounds/かんけん.m4a'
import きん from '../sounds/きん.m4a'
import こん from '../sounds/こん.m4a'
import きけ from '../sounds/きけ.m4a'
import し from '../sounds/し.m4a'
import わるい from '../sounds/わるい.m4a'


class kanjiLesson2 extends Component {
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

        this.KanjiCharacter = shuffle(kanjiC.slice(10, 22))
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
        if (e.target.value === 'した') {
            this.audio = new Audio(した)
        }
        if (e.target.value === 'あか') {
            this.audio = new Audio(あか)
        }
        if (e.target.value === 'なに / なん') {
            this.audio = new Audio(なになん)
        }
        if (e.target.value === 'か / け') {
            this.audio = new Audio(かけ)
        }
        if (e.target.value === 'はな') {
            this.audio = new Audio(はな)
        }
        if (e.target.value === 'さかな') {
            this.audio = new Audio(さかな)
        }
        if (e.target.value === 'うえ') {
            this.audio = new Audio(うえ)
        }
        if (e.target.value === 'なに') {
            this.audio = new Audio(なに)
        }
        if (e.target.value === 'かみ') {
            this.audio = new Audio(かみ)
        }
        if (e.target.value === 'きみ') {
            this.audio = new Audio(きみ)
        }
        if (e.target.value === 'きん') {
            this.audio = new Audio(きん)
        }
        if (e.target.value === 'あ-う') {
            this.audio = new Audio(あう)
        }
        if (e.target.value === 'さそう') {
            this.audio = new Audio(さそう)
        }
        if (e.target.value === 'あそぼう') {
            this.audio = new Audio(あそぼう)
        }
        if (e.target.value === 'かい') {
            this.audio = new Audio(かい)
        }
        if (e.target.value === 'たこ') {
            this.audio = new Audio(たこ)
        }
        if (e.target.value === 'えみ') {
            this.audio = new Audio(えみ)
        }
        if (e.target.value === 'そと') {
            this.audio = new Audio(そと)
        }
        if (e.target.value === 'なか') {
            this.audio = new Audio(なか)
        }
        if (e.target.value === 'かん') {
            this.audio = new Audio(かん)
        }
        if (e.target.value === 'がく') {
            this.audio = new Audio(がく)
        }
        if (e.target.value === 'さす') {
            this.audio = new Audio(さす)
        }
        if (e.target.value === 'きく') {
            this.audio = new Audio(きく)
        }
        if (e.target.value === 'まな-ぶ') {
            this.audio = new Audio(まなぶ)
        }
        if (e.target.value === 'えらぶ') {
            this.audio = new Audio(えらぶ)
        }
        if (e.target.value === 'きぼう') {
            this.audio = new Audio(きぼう)
        }
        if (e.target.value === 'あいだ  / ま') {
            this.audio = new Audio(あいだま)
        }
        if (e.target.value === 'さ') {
            this.audio = new Audio(さ)
        }
        if (e.target.value === 'もん') {
            this.audio = new Audio(もん)
        }
        if (e.target.value === 'かん  / けん') {
            this.audio = new Audio(かんけん)
        }
        if (e.target.value === 'こん') {
            this.audio = new Audio(こん)
        }
        if (e.target.value === 'き  / け') {
            this.audio = new Audio(きけ)
        }
        if (e.target.value === 'し') {
            this.audio = new Audio(し)
        }
        if (e.target.value === 'わるい') {
            this.audio = new Audio(わるい)
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

               <h3>Kanji Lesson 2</h3>
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
                               <td>下</td>
                               <td>音読み : <b> か, げ</b> <br></br>訓読み:<b> した </b></td>
                               <td>Down, Under, Lower</td>
                           </tr>
                           <tr>
                               <td>花</td>
                               <td>音読み: <b>か</b> <br></br>訓読み: <b>はな </b></td>
                               <td>Flower</td>
                           </tr>
                           <tr>
                               <td>何</td>
                               <td>音読み: <b>か</b> <br></br>訓読み:<b> なに, なん </b></td>
                               <td>What, How</td>
                           </tr>
                           <tr>
                               <td>会</td>
                               <td>音読み: <b>かい, え</b> <br></br>訓読み:<b> あ-う </b></td>
                               <td>Meet, Society</td>
                           </tr>
                           <tr>
                               <td>外</td>
                               <td>音読み: <b>がい, げ</b> <br></br>訓読み:<b> そと, ほか </b></td>
                               <td>Outside</td>
                           </tr>
                           <tr>
                               <td>学</td>
                               <td>音読み: <b>がく</b> <br></br>訓読み: <b> まな-ぶ  </b></td>
                               <td>Study, Learning</td>
                           </tr>
                           <tr>
                               <td>間</td>
                               <td>音読み: <b> かん, けん</b> <br></br>訓読み: <b>あいだ, ま </b></td>
                               <td>Interval, between</td>
                           </tr>
                           <tr>
                               <td>気</td>
                               <td>音読み: <b>き, け</b> <br></br>訓読み: <b> </b></td>
                               <td>Gas, Spirit</td>
                           </tr>
                           </tbody>
                       </table>
                           </div>
                           <div className="kanjiPContent">
                           <h4>Lesson content</h4>
                       <p>下  is read as した and it means under, lower, down</p>
                       <p>下 is read as か / げ and it means under, lower , down </p>
                       <p>花 is read as はな and it means flower  </p>
                       <p>何 is read as なに / なん and it means to what, how</p>
                       <p>会う is read as あ-う and it means to meet</p>
                       <p>会 is read as かい / え and it means meeting, society </p>
                       <p>外 is read as そと and it means outside</p>
                       <p>学 is read as がく and it means study, learning </p>
                       <p>学-ぶ is read as まな-ぶ and it mean study, learning</p>
                       <p>間 is read as あいだ  / ま and it means interval, between </p>
                       <p>間 is read as かん  / けん and it means interval, between </p>
                       <p>気 is read as き  / け and it means gas, spirit </p>
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

export default kanjiLesson2;