


window.onload = function () {
"use strict";

    Hangman ={
    wordList: ["dopey", "sneezy", "doc", "happy", "grumpy", "sleepy", "bashful"],
    wordArray:  [],
    wordUArray: [],
    lives:      4,
    wordBank:   word.length,
    word:       "",
    wordU:      " ",

    // pullWord = function(){
    //     word = wordList[math.floor(math.random() * wordBank)];
    //     console.log("h");
    // },

    //get letter on click, may want to reassign as value
    // // $(function(){
    //    $("#a").click(function(event){
    //     event.updateLetter("A");
    //     // updateLetter("A");
    //    })
    // // });
    // $('#a').click(function() {
    //         var letter = $this.val('a');
    //         console.log("h");
    //     });

    guessInput.onclick = function () {
        this.value = '';
    };

    pullWord: function() {
        var arrayLength = this.words.length;
        var index = this.getRandomInt(0,arrayLength-1);
        this.currentWord = this.words[index];
        this.currentWord = this.currentWord.toLowerCase();
        console.log("The selected word is " + this.currentWord);
    },

    //used to pull word from wordlist
    setUnderline = function(){
        pullWord();
        for (i=0; i<word.length; i++){
            wordArray[i] = main.word.charAt(i);
            wordUArray[i] = " ";
        }
        wordU = wordUArray.join (" ");
        document.getElementById("word").innerHTML=wordU;

        document.getElementById("numletters").innerHTML = word.length;
    },

    //check letter and see if it is array
    updateLetter = function (letter){
        changes = 0;
        for (i=0; i<word.length; i++){
            wordArray[i] = word.charat(i);
            if (word.charat(i) == letter){
                wordUArray[i] == letter;
                changes +=1
            }
        }
        if (changes < 1){
            lives -= 1;
            document.getElementById("lives").innerHTML = lives;
        }
        wordU = wordUArray.join ("");
        document.getElementById("word").innerHTML = wordU;
    },

    //determining if you won
        var word1 = wordArray.join("");
        var word2 = wordUArray.join("");

    if (word1 == word2){
        alert("you won");
        window.location.reload();
    },
    //if you run out of lives
    if (main.lives< 1){
        document.getElementById ("word").innerHTML = word1;
        alert ("Please try again");
        window.location.reload();
    },

};




}());

    Hangman.init();
