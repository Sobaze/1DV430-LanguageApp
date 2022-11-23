import React from 'react'


function Sidebar () {
    return(
        <div className="nav">
            <ul className="NavBarOptions">
                <li><a href="/" className="hclass"> Home</a></li>
                <li><a href="/Hiragana" className="hclass"> Hiragana </a></li>
                <li><a href="/Katakana" className="hclass"> Katakana</a></li>
                <li><a href="/Kanji">Kanji</a></li>
            </ul>
        </div>
    )
}

export default Sidebar; 