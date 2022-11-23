


const kanjiCharacters = [
    {
        kanji:"安い",
        answers: [ "やすい", "かい", "わらい" ],
        correct:"やすい",
        meaning: "Cheap"
    },
    {
        kanji:"安",
        answers: ["あん", "かん", "さん"],
        correct:"あん",
        meaning:"Peaceful"
    },
    {
        kanji:"一",
        answers: ["いち", "き", "なん"],
        correct:"いち",
        meaning:"One"
    },
    {
        kanji:"飲む",
        answers:["のむ", "かむ", "つむ"],
        correct:"のむ",
        meaning:"Drink"
    },
    {
        kanji:"飲",
        answers:["いん", "ぎん", "しん"],
        correct:"いん",
        meaning:"Drink"
    },
    {
        kanji:"右",
        answers:["みぎ", "かぎ", "とき"],
        correct:"みぎ",
        meaning:"Right"
    },
    {
        kanji:"雨",
        answers:["あめ", "ゆき", "さる"],
        correct:"あめ",
        meaning:"Rain"
    },
    {
        kanji:"駅",
        answers:["えき", "うま", "でんしゃ"],
        correct:"えき",
        meaning:"Station"
    },
    {
        kanji:"円",
        answers: ["えん", "いん", "のう"],
        correct:"えん",
        meaning:"Yen"
    },
    {
        kanji:"火",
        answers:["ひ/か", "ごみ", "けす"],
        correct:"ひ/か",
        meaning:"Fire"
    },
    {
        kanji:"下",
        answers: [ "した", "あか" ,  "うえ" ],
        correct:"した",
        meaning: "under, lower, down"
    },
    {
        kanji:"下",
        answers:[ "か / け", "あか", "うえ" ],
        correct:"か / け",
        meaning: "under, lower, down"
    },
    {
        kanji:"花",
        answers: [ "はな", "さかな", "なに" ],
        correct:"はな",
        meaning: "flower"
    },
    {
        kanji:"何",
        answers: ["なに / なん", "かみ", "きみ" ],
        correct:"なに / なん",
        meaning:" what, how"
    },
    {
        kanji:"会う",
        answers: [ "あ-う", "さそう", "あそぼう"  ],
        correct:"あ-う",
        meaning: "meet"
    },
    {
        kanji:"会",
        answers: [ "かい", "たこ", "えみ" ],
        correct:"かい",
        meaning: "meeting, society"
    },
    {
        kanji:"外",
        answers: [ "そと", "なか", "かん" ],
        correct:"そと",
        meaning: "outside"
    },
    {
        kanji:"学",
        answers: [ "がく", "さす", "きく" ],
        correct:"がく",
        meaning: "study, learning"
    },
    {
        kanji:"学-ぶ",
        answers: [ "まな-ぶ", "えらぶ", "きぼう" ],
        correct:"まな-ぶ",
        meaning: "study, learning"
    },
    {
        kanji:"間",
        answers: [ "あいだ  / ま", "さ", "もん" ],
        correct:"あいだ  / ま",
        meaning: "interval, between"
    },
    {
        kanji:"間",
        answers: [ "かん  / けん", "きん", "こん" ],
        correct:"かん  / けん",
        meaning: "interval, between"
    },
    {
        kanji:"気",
        answers: [ "き  / け", "し", "わるい" ],
        correct:"き  / け",
        meaning:"gas, spirit"
        
    },
    {
        kanji:"九",
        answers: [ "きゅう", "なな", "いま" ],
        correct:"きゅう",
        meaning:"nine"
        
    },
    {
        kanji:"休",
        answers: [ "きゅう", "さむ", "あむ" ],
        correct:"きゅう",
        meaning:"rest"
        
    },
    {
        kanji:"休む",
        answers: [ "やすむ", "さむ", "あむ" ],
        correct:"やすむ",
        meaning:"rest"
        
    },
    {
        kanji:"魚",
        answers: [ "さかな", "うみ", "ねこ" ],
        correct:"さかな",
        meaning:"fish"
    },
    {
        kanji:"金",
        answers: [ "きん / こん", "くろい", "すいか" ],
        correct:"きん / こん",
        meaning:"gold"
        
    },
    {
        kanji:"金",
        answers: [ "かね / かな", "くろい", "すいか" ],
        correct:"かね / かな",
        meaning:"money"
        
    },
    {
        kanji:"空",
        answers: [ "くう / そら", "みる", "よる" ],
        correct:"くう / そら",
        meaning:"sky, air, empty"
    },
    {
        kanji:"月",
        answers: [ "げつ", "にち", "いぬ" ],
        correct:"げつ",
        meaning:"moon"
        
    },
    {
        kanji:"月",
        answers: [ "つき", "ひ", "そと" ],
        correct:"つき",
        meaning:"moon"
        
    },
    {
        kanji:"見る",
        answers: [ "みる", "うみ", "さる" ],
        correct:"みる",
        meaning:"see"
        
    },
    {
        kanji:"見",
        answers: [ "けん", "もり", "つり" ],
        correct:"けん",
        meaning:"see"
    },
    {
        kanji:"言う",
        answers: [ "いう", "かのう", "かう" ],
        correct:"いう",
        meaning:"say, speech"
        
    },
    {
        kanji:"古い",
        answers: [ "ふるい", "くろい", "わるい" ],
        correct:"ふるい",
        meaning:"old"
        
    },
    {
        kanji:"五",
        answers: [ "ご", "し", "なな" ],
        correct:"ご",
        meaning:"five"
        
    },
    {
        kanji:"後ろ",
        answers: [ "うしろ", "よる", "のびろ" ],
        correct:"うしろ",
        meaning:"behind"
        
    },
    {
        kanji:"後",
        answers: [ "ご", "げつ", "はな" ],
        correct:"ご",
        meaning:"after"
        
    },
    {
        kanji:"午",
        answers: [ "ご", "そと", "みぎ" ],
        correct:"ご",
        meaning:"noon"
        
    },
    {
        kanji:"語る",
        answers: [ "かたる", "さわる", "くだる" ],
        correct:"かたる",
        meaning:"language, word, tell"
        
    },
    {
        kanji:"校",
        answers: [ "こう", "かい", "かぎ" ],
        correct:"こう",
        meaning:"school, collate"
        
    },
    {
        kanji:"口",
        answers: [ "くち", "した", "もり" ],
        correct:"くち",
        meaning:"mouth"
        
    },
    {
        kanji:"行",
        answers: [ "こう", "うみ", "かむ" ],
        correct:"こう",
        meaning:"say, speech"
        
    },
    {
        kanji:"行く",
        answers: [ "いく", "きく", "かく" ],
        correct:"いく",
        meaning:"go"
        
    },
    {
        kanji:"学校",
        answers: [ "がっこう", "あそぼう", "びょういん" ],
        correct:"がっこう",
        meaning:"school"
        
    },
    {
        kanji:"午後",
        answers: [ "ごご", "さそう", "ごぜん" ],
        correct:"ごご",
        meaning:"afternoon"
        
    },


]


export default kanjiCharacters