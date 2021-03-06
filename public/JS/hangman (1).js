"use strict";

var Hangman = {
    words:            ["Firefly", "Serenity", "Wash", "Enara", "Jane", "Fillian"], // Set of words for hangman to choose from
    currentWord:      '', // Current word for the game
    correctGuesses:   [], // Correct letters the user has guesses
    incorrectGuesses: [], // Wrong letters the user has guessed
    maxGuesses:        0, // Maximum number of wrong guesses the user is allowed

    /**
     * Do all the initial game setup, register any necessary event listeners.
     * This method should only be run once.
     */
    init: function() {
        console.log("init");
        $("#btn-start").click(function(){
            Hangman.gameStart();
        })

    },

    /**
     * Start a new game. Should be used whenever a new hangman game is begun.
     */
    gameStart: function() {
        console.log("gameStart");
        this.pickWord();

    },
//this refers to gamestart function
    /**
     * Pick a new random word and assign it to the currentWord property
     */
    pickWord: function() {
        console.log("pickWord");
        var arrayLength = this.words.length;      
        // index = 1;  //test for result
        this.currentWord = words[index];



    },

    /**
     * The game has finished. Use this method at the end of the game if necessary
     * to remove things like event listeners or display a "New Game" button.
     */
    gameEnd: function() {
        console.log("gameEnd");

    },

    /**
     * Event handler for when a keyboard key is pressed.
     *
     * @param Event event - JavaScript event object
     */
    keyPressHandler: function(event) {
        console.log("keyPressHandler");

    },

    /**
     * Random number generator, should return an integer between min and max.
     *
     * @param integer min
     * @param integer max
     *
     * @return integer
     */
    getRandomInt: function(min, max) {
        // console.log("getRandomInt");


    },

    /**
     * Check if the user has guessed a given letter before (either right or wrong).
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    hasLetterBeenGuessed: function(letter) {
        console.log("hasLetterBeenGuessed");

    },

//event listener = clicks
    /**
     * Return whether or not a letter is in the current word.
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    isLetterInWord: function(letter) {
        console.log("isLetterInWord");

    },

    /**
     * Return the indexes where a given letter occurs in the current word
     * For example, if the word is "banana", and the letter passed was "a"
     * then this function should return [1, 3, 5]. If the letter passed was
     * "b" then the function should return [0]. If the letter was "q" then
     * it should return [].
     *
     * @param string letter - Letter the user typed
     *
     * @return array - Array of indexes in the word
     */
    findLetterInWord: function(letter) {
        console.log("findLetterInWord");

    },

    /**
     * Add a letter to the array of correct guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addCorrectGuess: function(letter) {
        console.log("addCorrectGuess");

    },

    /**
     * Add a letter to the array of incorrect guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addIncorrectGuess: function(letter) {
        console.log("addIncorrectGuess");

    },

    /**
     * Check whether all the letters in the word have been guessed
     *
     * @return boolean
     */
    isGameWon: function() {
        console.log("isGameWon");

    }
};

Hangman.init();
