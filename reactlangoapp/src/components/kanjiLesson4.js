import React, { Component } from 'react';
import { shuffle } from './shuffle';
import kanjiC from './kanjiCharacters'

import ふるい from '../sounds/ふるい.m4a'
import くろい from '../sounds/くろい.m4a'
import わるい from '../sounds/わるい.m4a'
import ご from '../sounds/ご.m4a'
import うしろ from '../sounds/うしろ.m4a'
import し from '../sounds/し.m4a'
import なな from '../sounds/なな.m4a'
import よる from '../sounds/よる.m4a'
import のびろ from '../sounds/のびろ.m4a'
import げつ from '../sounds/げつ.m4a'
import はな from '../sounds/はな.m4a'
import そと from '../sounds/そと.m4a'
import みぎ from '../sounds/みぎ.m4a'
import かたる from '../sounds/かたる.m4a'
import さわる from '../sounds/さわる.m4a'
import くだる from '../sounds/くだる.m4a'
import こう from '../sounds/こう.m4a'
import かい from '../sounds/かい.m4a'
import かぎ from '../sounds/かぎ.m4a'
import くち from '../sounds/くち.m4a'
import した from '../sounds/した.m4a'
import もり from '../sounds/もり.m4a'
import うみ from '../sounds/うみ.m4a'
import かむ from '../sounds/かむ.m4a'
import いく from '../sounds/いく.m4a'
import きく from '../sounds/きく.m4a'
import かく from '../sounds/かく.m4a'
import がっこう from '../sounds/がっこう.m4a'
import あそぼう from '../sounds/あそぼう.m4a'
import びょういん from '../sounds/びょういん.m4a'
import ごご from '../sounds/ごご.m4a'
import さそう from '../sounds/さそう.m4a'
import ごぜん from '../sounds/ごぜん.m4a'



class kanjiLesson4 extends Component {
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

        this.KanjiCharacter = shuffle(kanjiC.slice(34, 47))
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
        if (e.target.value === 'ふるい') {
            this.audio = new Audio(ふるい)
        }
        if (e.target.value === 'ご') {
            this.audio = new Audio(ご)
        }
        if (e.target.value === 'はな') {
            this.audio = new Audio(はな)
        }
        if (e.target.value === 'わるい') {
            this.audio = new Audio(わるい)
        }
        if (e.target.value === 'し') {
            this.audio = new Audio(し)
        }
        if (e.target.value === 'なな') {
            this.audio = new Audio(なな)
        }
        if (e.target.value === 'うしろ') {
            this.audio = new Audio(うしろ)
        }
        if (e.target.value === 'のびろ') {
            this.audio = new Audio(のびろ)
        }
        if (e.target.value === 'みぎ') {
            this.audio = new Audio(みぎ)
        }
        if (e.target.value === 'かたる') {
            this.audio = new Audio(かたる)
        }
        if (e.target.value === 'くろい') {
            this.audio = new Audio(くろい)
        }
        if (e.target.value === 'さわる') {
            this.audio = new Audio(さわる)
        }
        if (e.target.value === 'くだる') {
            this.audio = new Audio(くだる)
        }
        if (e.target.value === 'こう') {
            this.audio = new Audio(こう)
        }
        if (e.target.value === 'かい') {
            this.audio = new Audio(かい)
        }
        if (e.target.value === 'よる') {
            this.audio = new Audio(よる)
        }
        if (e.target.value === 'げつ') {
            this.audio = new Audio(げつ)
        }
        if (e.target.value === 'かぎ') {
            this.audio = new Audio(かぎ)
        }
        if (e.target.value === 'くち') {
            this.audio = new Audio(くち)
        }
        if (e.target.value === 'した') {
            this.audio = new Audio(した)
        }
        if (e.target.value === 'うみ') {
            this.audio = new Audio(うみ)
        }
        if (e.target.value === 'そと') {
            this.audio = new Audio(そと)
        }
        if (e.target.value === 'かむ') {
            this.audio = new Audio(かむ)
        }
        if (e.target.value === 'もり') {
            this.audio = new Audio(もり)
        }
        if (e.target.value === 'いく') {
            this.audio = new Audio(いく)
        }
        if (e.target.value === 'ごぜん') {
            this.audio = new Audio(ごぜん)
        }
        if (e.target.value === 'かく') {
            this.audio = new Audio(かく)
        }
        if (e.target.value === 'がっこう') {
            this.audio = new Audio(がっこう)
        }
        if (e.target.value === 'あそぼう') {
            this.audio = new Audio(あそぼう)
        }
        if (e.target.value === 'きく') {
            this.audio = new Audio(きく)
        }
        if (e.target.value === 'びょういん') {
            this.audio = new Audio(びょういん)
        }
        if (e.target.value === 'ごご') {
            this.audio = new Audio(ごご)
        }
        if (e.target.value === 'さそう') {
            this.audio = new Audio(さそう)
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

               <h3>Kanji Lesson 4</h3>
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
                               <td>古い</td>
                               <td>音読み : <b>こ</b> <br></br>訓読み:<b> ふる-い , ふる-す </b></td>
                               <td>Old</td>
                           </tr>
                           <tr>
                               <td>五</td>
                               <td>音読み: <b>ご</b> <br></br>訓読み: <b>いつ, いつつ </b></td>
                               <td>Five</td>
                           </tr>
                           <tr>
                               <td>後</td>
                               <td>音読み: <b>ご, こう</b> <br></br>訓読み:<b> のち、うし-ろ、あと </b></td>
                               <td>After</td>
                           </tr>
                           <tr>
                               <td>午</td>
                               <td>音読み: <b>ご </b> <br></br>訓読み:<b> </b></td>
                               <td>Noon</td>
                           </tr>
                           <tr>
                               <td>語</td>
                               <td>音読み: <b>ご</b> <br></br>訓読み:<b> かた-る、かた-らう </b></td>
                               <td>Language, Word, Tell</td>
                           </tr>
                           <tr>
                               <td>校</td>
                               <td>音読み: <b>こう</b> <br></br>訓読み: <b> </b></td>
                               <td>School, Collate </td>
                           </tr>
                           <tr>
                               <td>口</td>
                               <td>音読み: <b>こう、く</b> <br></br>訓読み: <b>くち </b></td>
                               <td>Mouth</td>
                           </tr>
                           <tr>
                               <td>行</td>
                               <td>音読み: <b>こう、ぎょう、あん</b> <br></br>訓読み: <b>い-く、ゆ-く、おこな-う </b></td>
                               <td>Go, Act, Line</td>
                           </tr>
                           </tbody>
                       </table>
                           </div>
                           <div className="kanjiPContent">
                       <h4>Lesson content</h4>
                       <p>古い  is read as ふる-い and it means old</p>
                       <p>五 is read as ご and it means five  </p>
                       <p>後 is read as ご and it means to after</p>
                       <p>後ろ is read as うしろ and it means behind</p>
                       <p>午 is read as ご and it means noon</p>
                       <p>語る is read as かたる and it means language,word,tell</p>
                       <p>校 is read as こう and it means school, colate </p>
                       <p>口 is read as くち and it means mouth </p>
                       <p>行 is read as こう and it means go, act,line </p>
                       <p>行く is read as いく and it means go </p>
                       <p><b>Extra</b></p>
                       <p>学校 is read as がっこう and it means school</p>
                       <p>午後 is read as ごご and it means afternoon</p>
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

export default kanjiLesson4;