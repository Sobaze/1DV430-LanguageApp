const katakanaLetters = [
    {
        gana: "ア",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "A"
    },
    {
        gana: "イ",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "I"
    },
    {
        gana: "ウ",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "I"
    },
    {
        gana: "エ",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "E"
    },
    {
        gana: "オ",
        answers: [ "A", "I", "U", "E", "O" ],
        correct: "O"
    },
    {
        gana: "カ",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KA"
    },
    {
        gana: "キ",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KI"
    },
    {
        gana: "ク",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KU"
    },
    {
        gana: "ケ",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "KE"
    },
    {
        gana: "コ",
        answers: [ "KA", "KI", "KU", "KE", "KO" ],
        correct: "い"
    },
    {
        gana: "サ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SA"
    },
    {
        gana: "シ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SHI"
    },
    {
        gana: "ス",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SU"
    },
    {
        gana: "セ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SE"
    },
    {
        gana: "ソ",
        answers: [ "SA", "SHI", "SU", "SE", "SO" ],
        correct: "SO"
    },
    {
        gana: "タ",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TA"
    },
    {
        gana: "チ",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "CHI"
    },
    {
        gana: "ツ",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TSU"
    },
    {
        gana: "テ",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TE"
    },
    {
        gana: "ト",
        answers: [ "TA", "CHI", "TSU", "TE", "TO" ],
        correct: "TO"
    },
    {
        gana: "ナ",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NA"
    },
    {
        gana: "ニ",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NI"
    },
    {
        gana: "ヌ",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NU"
    },
    {
        gana: "ネ",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NE"
    },
    {
        gana: "ノ",
        answers: [ "NA", "NI", "NU", "NE", "NO" ],
        correct: "NO"
    },
    {
        gana: "ハ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HA"
    },
    {
        gana: "ヒ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HI"
    },
    {
        gana: "フ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "FU"
    },
    {
        gana: "へ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HE"
    },
    {
        gana: "ホ",
        answers: [ "HA", "HI", "FU", "HE", "HO" ],
        correct: "HO"
    },
    {
        gana: "マ",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MA"
    },
    {
        gana: "ミ",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MI"
    },
    {
        gana: "ム",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MU"
    },
    {
        gana: "メ",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "ME"
    },
    {
        gana: "モ",
        answers: [ "MA", "MI", "MU", "ME", "MO" ],
        correct: "MO"
    },
    {
        gana: "ヤ",
        answers: [ "YA", "YU", "YO" ],
        correct: "YA"
    },
    {
        gana: "ユ",
        answers: [ "YA", "YU", "YO" ],
        correct: "YU"
    },
    {
        gana: "ヨ",
        answers: [ "YA", "YU", "YO" ],
        correct: "YO"
    },
    {
        gana: "ラ",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RA"
    },
    {
        gana: "リ",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RI"
    },
    {
        gana: "ル",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RU"
    },
    {
        gana: "レ",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RE"
    },
    {
        gana: "ロ",
        answers: [ "RA", "RI", "RU", "RE", "RO" ],
        correct: "RO"
    },
    {
        gana: "ワ",
        answers: [ "WA", "WO", "N" ],
        correct: "WA"
    },
    {
        gana: "ヲ",
        answers: [ "WA", "WO", "N" ],
        correct: "WO"
    },
    {
        gana: "ン",
        answers: [ "WA", "WO", "N" ],
        correct: "N"
    },
    {
        gana: "ガ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GA"
    },
    {
        gana: "ギ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GI"
    },
    {
        gana: "グ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GU"
    },
    {
        gana: "ゲ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GE"
    },
    {
        gana: "ゴ",
        answers: [ "GA", "GI", "GU", "GE", "GO" ],
        correct: "GO"
    },
    {
        gana: "ザ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZA"
    },
    {
        gana: "ジ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "JI"
    },
    {
        gana: "ズ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZU"
    },
    {
        gana: "ゼ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZE"
    },
    {
        gana: "ゾ",
        answers: [ "ZA", "JI", "ZU", "ZE", "ZO" ],
        correct: "ZO"
    },
    {
        gana: "ダ",
        answers: [ "DA", "JI", "DU", "DE", "DO" ],
        correct: "DA"
    },
    {
        gana: "ヂ",
        answers: [ "DA", "JI", "DU", "DE", "DO" ],
        correct: "JI"
    },
    {
        gana: "ヅ",
        answers: [ "DA", "JI", "ZU", "DE", "DO" ],
        correct: "ZU"
    },
    {
        gana: "デ",
        answers: [ "DA", "JI", "DU", "DE", "DO" ],
        correct: "DE"
    },
    {
        gana: "ド",
        answers: [ "DA", "JI", "DU", "DE", "DO" ],
        correct: "DO"
    },
    {
        gana: "バ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BA"
    },
    {
        gana: "ビ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BI"
    },
    {
        gana: "ブ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BU"
    },
    {
        gana: "ベ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BE"
    },
    {
        gana: "ボ",
        answers: [ "BA", "BI", "BU", "BE", "BO" ],
        correct: "BO"
    },
    {
        gana: "パ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PA"
    },
    {
        gana: "ピ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PI"
    },
    {
        gana: "プ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PU"
    },
    {
        gana: "ぺ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PE"
    },
    {
        gana: "ポ",
        answers: [ "PA", "PI", "PU", "PE", "PO" ],
        correct: "PO"
    },
    {
        gana: "キャ",
        answers: [ "KYA", "KYU", "KYO" ],
        correct: "KYA"
    },
    {
        gana: "キュ",
        answers: [ "KYA", "KYU", "KYO" ],
        correct: "KYU"
    },
    {
        gana: "キョ",
        answers: [ "KYA", "KYU", "KYO" ],
        correct: "KYO"
    },
    {
        gana: "ギャ",
        answers: [ "GYA", "GYU", "GYO" ],
        correct: "GYA"
    },
    {
        gana: "ギュ",
        answers: [ "GYA", "GYU", "GYO" ],
        correct: "GYU"
    },
    {
        gana: "ギョ",
        answers: [ "GYA", "GYU", "GYO" ],
        correct: "GYO"
    },
    {
        gana: "シャ",
        answers: [ "SHA", "SHU", "SHO" ],
        correct: "SHA"
    },
    {
        gana: "シュ",
        answers: [ "SHA", "SHU", "SHO" ],
        correct: "SHU"
    },
    {
        gana: "ショ",
        answers: [ "SHA", "SHU", "SHO" ],
        correct: "SHO"
    },
    {
        gana: "ジャ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JA"
    },
    {
        gana: "ジュ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JU"
    },
    {
        gana: "ジョ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JO"
    },
    {
        gana: "チャ",
        answers: [ "CHA", "CHU", "CHO" ],
        correct: "CHA"
    },
    {
        gana: "チュ",
        answers: [ "CHA", "CHU", "CHO" ],
        correct: "CHU"
    },
    {
        gana: "チョ",
        answers: [ "CHA", "CHU", "CHO" ],
        correct: "CHO"
    },
    {
        gana: "ヂャ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JA"
    },
    {
        gana: "ヂュ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JU"
    },
    {
        gana: "ヂョ",
        answers: [ "JA", "JU", "JO" ],
        correct: "JO"
    },
    {
        gana: "ニャ",
        answers: [ "NYA", "NYU", "NYO" ],
        correct: "NYA"
    },
    {
        gana: "ニュ",
        answers: [ "NYA", "NYU", "NYO" ],
        correct: "NYU"
    },
    {
        gana: "ニョ",
        answers: [ "NYA", "NYU", "NYO" ],
        correct: "NYO"
    },
    {
        gana: "ヒャ",
        answers: [ "HYA", "HYU", "HYO" ],
        correct: "HYA"
    },
    {
        gana: "ヒュ",
        answers: [ "HYA", "HYU", "HYO" ],
        correct: "HYU"
    },
    {
        gana: "ヒョ",
        answers: [ "HYA", "HYU", "HYO" ],
        correct: "HYO"
    },
    {
        gana: "ビャ",
        answers: [ "BYA", "BYU", "BYO" ],
        correct: "BYA"
    },
    {
        gana: "ビュ",
        answers: [ "BYA", "BYU", "BYO" ],
        correct: "BYU"
    },
    {
        gana: "ビョ",
        answers: [ "BYA", "BYU", "BYO" ],
        correct: "BYO"
    },
    {
        gana: "ピャ",
        answers: [ "PYA", "PYU", "PYO" ],
        correct: "PYA"
    },
    {
        gana: "ピュ",
        answers: [ "PYA", "PYU", "PYO" ],
        correct: "PYU"
    },
    {
        gana: "ピョ",
        answers: [ "PYA", "PYU", "PYO" ],
        correct: "PYO"
    },
    {
        gana: "ミャ",
        answers: [ "MYA", "MYU", "MYO" ],
        correct: "MYA"
    },
    {
        gana: "ミュ",
        answers: [ "MYA", "MYU", "MYO" ],
        correct: "MYU"
    },
    {
        gana: "ミョ",
        answers: [ "MYA", "MYU", "MYO" ],
        correct: "MYO"
    },
    {
        gana: "リャ",
        answers: [ "RYA", "RYU", "RYO" ],
        correct: "RYA"
    },
    {
        gana: "リュ",
        answers: [ "RYA", "RYU", "RYO" ],
        correct: "RYU"
    },
    {
        gana: "リョ",
        answers: [ "RYA", "RYU", "RYO" ],
        correct: "RYO"
    },
]


export default katakanaLetters