// import React, { Component } from 'react'
// import { shuffle } from './shuffle'

const hiraganaLetters = [
    {
        gana: "あ",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "A"
    },
    {
        gana: "い",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "I"
    },
    {
        gana: "う",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "I"
    },
    {
        gana: "え",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "E"
    },
    {
        gana: "お",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "O"
    },
    {
        gana: "か",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KA"
    },
    {
        gana: "き",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KI"
    },
    {
        gana: "く",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KU"
    },
    {
        gana: "け",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KE"
    },
    {
        gana: "こ",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KO"
    },
    {
        gana: "さ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SA"
    },
    {
        gana: "し",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SHI"
    },
    {
        gana: "す",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SU"
    },
    {
        gana: "せ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SE"
    },
    {
        gana: "そ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SO"
    },
    {
        gana: "た",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TA"
    },
    {
        gana: "ち",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "CHI"
    },
    {
        gana: "つ",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TSU"
    },
    {
        gana: "て",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TE"
    },
    {
        gana: "と",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TO"
    },
    {
        gana: "な",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NA"
    },
    {
        gana: "に",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NI"
    },
    {
        gana: "ぬ",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NU"
    },
    {
        gana: "ね",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NE"
    },
    {
        gana: "の",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NO"
    },
    {
        gana: "は",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HA"
    },
    {
        gana: "ひ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HI"
    },
    {
        gana: "ふ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "FU"
    },
    {
        gana: "へ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HE"
    },
    {
        gana: "ほ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HO"
    },
    {
        gana: "ま",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MA"
    },
    {
        gana: "み",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MI"
    },
    {
        gana: "む",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MU"
    },
    {
        gana: "め",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "ME"
    },
    {
        gana: "も",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MO"
    },
    {
        gana: "や",
        answers: [ "YA", "YU", "YO" ],
        correct: "YA"
    },
    {
        gana: "ゆ",
        answers: [ "YA", "YU", "YO" ],
        correct: "YU"
    },
    {
        gana: "よ",
        answers: [ "YA", "YU", "YO" ],
        correct: "YO"
    },
    {
        gana: "ら",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RA"
    },
    {
        gana: "り",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RI"
    },
    {
        gana: "る",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RU"
    },
    {
        gana: "れ",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RE"
    },
    {
        gana: "ろ",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RO"
    },
    {
        gana: "わ",
        answers: [ "WA", "WO", "N" ],
        correct: "WA"
    },
    {
        gana: "を",
        answers: [ "WA", "WO", "N" ],
        correct: "WO"
    },
    {
        gana: "ん",
        answers: [ "WA", "WO", "N" ],
        correct: "N"
    },
    {
        gana: "が",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GA"
    },
    {
        gana: "ぎ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GI"
    },
    {
        gana: "ぐ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GU"
    },
    {
        gana: "げ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GE"
    },
    {
        gana: "ご",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GO"
    },
    {
        gana: "ざ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZA"
    },
    {
        gana: "じ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "JI"
    },
    {
        gana: "ず",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZU"
    },
    {
        gana: "ぜ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZE"
    },
    {
        gana: "ぞ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZO"
    },
    {
        gana: "だ",
        answers: [ "DA", "JI", "ZU", "DE", "DO" ],
        correct: "DA"
    },
    {
        gana: "ぢ",
        answers: [ "DA", "JI", "ZU", "DE", "DO" ],
        correct: "JI"
    },
    {
        gana: "づ",
        answers: [ "DA", "JI", "ZU", "DE", "DO" ],
        correct: "ZU"
    },
    {
        gana: "で",
        answers: [ "DA", "JI", "ZU", "DE", "DO" ],
        correct: "DE"
    },
    {
        gana: "ど",
        answers: [ "DA", "JI", "ZU", "DE", "DO" ],
        correct: "DO"
    },
    {
        gana: "ば",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BA"
    },
    {
        gana: "び",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BI"
    },
    {
        gana: "ぶ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BU"
    },
    {
        gana: "ベ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BE"
    },
    {
        gana: "ぼ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BO"
    },
    {
        gana: "ぱ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PA"
    },
    {
        gana: "ぴ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PI"
    },
    {
        gana: "ぷ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PU"
    },
    {
        gana: "ぺ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PE"
    },
    {
        gana: "ぽ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PO"
    },
    {
        gana: "きゃ",
        answers: [ "KYA", "KYU", "KYO" ],
        correct: "KYA"
    },
    {
        gana: "きゅ",
        answers: [ "KYA", "KYU", "KYO" ],
        correct: "KYU"
    },
    {
        gana: "きょ",
        answers: [ "KYA", "KYU", "KYO" ],
        correct: "KYO"
    },
    {
        gana: "ぎゃ",
        answers: [ "GYA", "GYU", "GYO" ],
        correct: "GYA"
    },
    {
        gana: "ぎゅ",
        answers: [ "GYA", "GYU", "GYO" ],
        correct: "GYU"
    },
    {
        gana: "ぎょ",
        answers: [ "GYA", "GYU", "GYO" ],
        correct: "GYO"
    },
    {
        gana: "しゃ",
        answers: [ "SHA", "SHU", "SHO" ],
        correct: "SHA"
    },
    {
        gana: "しゅ",
        answers: [ "SHA", "SHU", "SHO" ],
        correct: "SHU"
    },
    {
        gana: "しょ",
        answers: [ "SHA", "SHU", "SHO" ],
        correct: "SHO"
    },
    {
        gana: "じゃ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JA"
    },
    {
        gana: "じゅ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JU"
    },
    {
        gana: "じょ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JO"
    },
    {
        gana: "ちゃ",
        answers: [ "CHA", "CHU", "CHO" ],
        correct: "CHA"
    },
    {
        gana: "ちゅ",
        answers: [ "CHA", "CHU", "CHO" ],
        correct: "CHU"
    },
    {
        gana: "ちょ",
        answers: [ "CHA", "CHU", "CHO" ],
        correct: "CHO"
    },
    {
        gana: "ぢゃ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JA"
    },
    {
        gana: "ぢゅ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JU"
    },
    {
        gana: "ぢょ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JO"
    },
    {
        gana: "にゃ",
        answers: [ "NYA", "NYU", "NYO" ],
        correct: "NYA"
    },
    {
        gana: "にゅ",
        answers: [ "NYA", "NYU", "NYO" ],
        correct: "NYU"
    },
    {
        gana: "にょ",
        answers: [ "NYA", "NYU", "NYO" ],
        correct: "NYO"
    },
    {
        gana: "ひゃ",
        answers: [ "HYA", "HYU", "HYO" ],
        correct: "HYA"
    },
    {
        gana: "ひゅ",
        answers: [ "HYA", "HYU", "HYO" ],
        correct: "HYU"
    },
    {
        gana: "ひょ",
        answers: [ "HYA", "HYU", "HYO" ],
        correct: "HYO"
    },
    {
        gana: "びゃ",
        answers: [ "BYA", "BYU", "BYO" ],
        correct: "BYA"
    },
    {
        gana: "びゅ",
        answers: [ "BYA", "BYU", "BYO" ],
        correct: "BYU"
    },
    {
        gana: "びょ",
        answers: [ "BYA", "BYU", "BYO" ],
        correct: "BYO"
    },
    {
        gana: "ぴゃ",
        answers: [ "PYA", "PYU", "PYO" ],
        correct: "PYA"
    },
    {
        gana: "ぴゅ",
        answers: [ "PYA", "PYU", "PYO" ],
        correct: "PYU"
    },
    {
        gana: "ぴょ",
        answers: [ "PYA", "PYU", "PYO" ],
        correct: "PYO"
    },
    {
        gana: "みゃ",
        answers: [ "MYA", "MYU", "MYO" ],
        correct: "MYA"
    },
    {
        gana: "みゅ",
        answers: [ "MYA", "MYU", "MYO" ],
        correct: "MYU"
    },
    {
        gana: "みょ",
        answers: [ "MYA", "MYU", "MYO" ],
        correct: "MYO"
    },
    {
        gana: "りゃ",
        answers: [ "RYA", "RYU", "RYO" ],
        correct: "RYA"
    },
    {
        gana: "りゅ",
        answers: [ "RYA", "RYU", "RYO" ],
        correct: "RYU"
    },
    {
        gana: "りょ",
        answers: [ "RYA", "RYU", "RYO" ],
        correct: "RYO"
    },

]




export default hiraganaLetters