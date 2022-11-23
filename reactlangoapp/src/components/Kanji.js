import React, { Component } from 'react';
import '../App.css';




class Kanji extends Component {
    constructor() {
        super();
        
        this.state = {
            message: 'Kanji',
            lessonSelected: false
        }
    }

    
    wonClick = (event) => {
        this.setState({
            message: event.target.value
        })
        console.log(event.target.value)
        
    }
    render () {
        return ( 
           <div className="hiragana-content">
                    <h2>Kanji</h2>
                    <p>Kanji has ben adopted from the Chinese logographic characters and are being used in the Japanese writing system.
                        Kanji is used alongside the other two alphabets, hiragana and katakana. <br></br>
                        Since the kanji has been adopted into the Japanese language, a single kanji can be used to write one or many different words
                        which means the same character can be pronounced in different ways. <br></br>
                        This means that the kanji can be perceived as to having 
                        one or more different "readings". Depending on the context the reading may vary.<br></br>
                        <br></br>
                        Kanji readings are categorized as either <b>on'yomi(音読み, sound reading)</b> or <b>kun'yomi(訓読み, meaning reading)</b>. Most characters
                        have at least two readings, at least one of each.
                    </p>
                    <h3>On'yomi (音読み)</h3>
                    <p>
                        On'yomi is the modern descendant of the Japanese approxiation of the base Chinese pronounciation at the given time it was introduced.
                        <br></br>
                        Some kanji were introduced from different parts of China and at different times so because of that a kanji can have
                        several on'yomi and lots of different meanings behind them.
                    </p>
                    <h3>Kun'yomi(訓読み)</h3>
                    <p>
                        The kun'yomi is the native reading based of the Japanese pronounciation of a native word, as the on'yomi there can be 
                        several kun'yomi for a kanji and there are also some kanji who doesn't have one at all.
                    </p>

                    <h3>Lessons</h3> 
                    <p>
                        Each of the lessons will start with a table where you can see the kanji, the on'yomi and the kun'yomi for that kanji and 
                        the meaning of that kanji. It's recomended to take a look at this before starting and try to remember.
                        <br></br>
                        Then on the right you will have lesson content which will name what the kanji that will be in the lesson
                        and in what way you will be expected to read them in. 
                    </p>
                    <button className="kanjiLesson" onClick={this.wonClick.bind(this)} value="Kanji-lesson-1"> Lesson 1 </button>
                    <button className="kanjiLesson" onClick={this.wonClick.bind(this)} value="Kanji-lesson-2"> Lesson 2 </button>
                    <button className="kanjiLesson" onClick={this.wonClick.bind(this)} value="Kanji-lesson-3"> Lesson 3 </button>
                    <button className="kanjiLesson" onClick={this.wonClick.bind(this)} value="Kanji-lesson-4"> Lesson 4 </button>
                    <button className="startPractice"onClick={() => this.props.history.push(this.state.message)} >Start practice</button>
           </div>
        );
    }
}

export default Kanji