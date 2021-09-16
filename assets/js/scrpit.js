//extra information
//stn stand for section, int stands for initial, btn stands for button
//qtn stands for question or questions



//store body of page to append to
var pageBodyMain = document.querySelector('main')

//store content section of page to be used later to reappend it back to the page
var contentStn = document.querySelector('#content')

//store button from content section of page
var contentBtn = document.querySelector('#start-btn')

//time that timer will start with
var timeleft = 128

//Timer display
var displayTime = document.querySelector("#countdown")

//empty variable to make sections 
var setStn 

//initials and score stores objects that are stored and reused later
var intAndScore = []

//header view score button id call
var viewHS = document.querySelector('#btn-scores')


//which question is being used by number used in start quiz event listener
var qtnNumber = 0
//questions stored in obj stored in a array
var questions =[
    {
        question: 'which method is used to display content in the console?',
        answer: 'console.log',
        falseAnswers: ["javascrpit","console.dir",'show.log']
    },

    {
        question: 'which is used to create a variable?',
        answer: 'var varName',
        falseAnswers: ["create","makeVar",'VarName']
    },

    {
        question: 'objects in java script are used to store witch data values?',
        answer: 'key value pairs',
        falseAnswers: ["value pairs","data pairs",'pairs']
    },

    {
        question: 'which one is a string consided a string',
        answer: '"Hello World"',
        falseAnswers: ["0","string",'var']
    },

    {
        question: 'which is the correct way to call a function',
        answer: 'function(){}',
        falseAnswers: ["function()","function[]",'function{}']
    },
]




//save score to localstorage
var saveScore = function(){
    //setitems in intAndScore to the localStorage key of highscore
    localStorage.setItem('highscore', JSON.stringify(intAndScore) )

}

//function that clears the localStorage hence forth clearing the highscores
var clearScore = function(){
    //removes highscores from localstorage
    localStorage.removeItem('highscore')
}

//function that loads the scores to the highscore page
var loadScores = function(){
    //get items from local storage
    var savedScores = localStorage.getItem('highscore')

    //convert them from a string back to an array
    savedScores = JSON.parse(savedScores)

    //find id to append them to 
    var ulHighScore = document.querySelector("#high-score-list")

    //number associated with score
    var scoreNumber = 1

    // if method to check if 'highscore' is null
    if (!savedScores){
        return
    }

    //loop to append each score stored in localStorage
    for (score of savedScores){
        
        var li = document.createElement('li')
        li.textContent = scoreNumber + "." + score.initials + " - " + score.score
        ulHighScore.appendChild(li)

        scoreNumber++
    }
}


//function that makes a section with a div
var makeStn = function(stnClass,stnId, divId){
    //make section element
    setStn = document.createElement('section')
    setStn.className = stnClass
    setStn.setAttribute("id", stnId)

    //make div to go in section to hold content
    var div = document.createElement('div')
    div.setAttribute("id",divId)
    setStn.appendChild(div)
}

//function that removes sections 
var removeStn = function(sectionId){
    var remove = document.querySelector(sectionId)
    pageBodyMain.removeChild(remove)

}


//function that makes the quiz question section
var makeQuestionStn = function(){
    //function to make this section
    makeStn("question","question","div-question")

    //store section
    var sectionQuestion = setStn
    console.log(sectionQuestion)

    //append section to page
    pageBodyMain.appendChild(sectionQuestion)

    //find id div-question and store it
    var div = document.querySelector("#div-question")

    //make h2 element
    var h2 = document.createElement('h2')
    h2.textContent = questions[qtnNumber].question
    div.appendChild(h2)

    
    var btnanswer = document.createElement('button')
    btnanswer.setAttribute('id','btn-answer')
    btnanswer.className = 'btn'
    btnanswer.textContent = questions[qtnNumber].answer
    div.appendChild(btnanswer)

    // make other 3 place holder buttons
    for (var i = 0; i < 3; i++){
        var btn = document.createElement("button")
        btn.setAttribute('id',"false-btn")
        btn.className = 'btn'
        btn.textContent = questions[qtnNumber].falseAnswers[i] 
        div.appendChild(btn)
    }

}

//function that makes the quiz high score section
var makeHighScoreStn = function(){
    //function to make this section
    makeStn("high-score","high-score","div-high-score")

    //store Section
    var sectionHighScore = setStn
    console.log(sectionHighScore)
    
    //append section to page
    pageBodyMain.appendChild(sectionHighScore)

    //find id div-finished and store it
    var div = document.querySelector("#div-high-score")

    //make h2 element
    var h2 = document.createElement('h2')
    h2.textContent = 'High Score'
    div.appendChild(h2)

    //make unordered list element
    var ul = document.createElement('ul')
    ul.setAttribute('id',"high-score-list")
    div.appendChild(ul)

    //this need to take from local storage that holds scores and display them in
    //the list item
    //make li item
    

    //make btn go back
    var btnGoBack = document.createElement('button')
    btnGoBack.setAttribute('id', "btn-go-back")
    btnGoBack.className = "btn-go-back"
    btnGoBack.textContent = 'Go Back'
    div.appendChild(btnGoBack)

    //make btn clear score
    var btnClearScore = document.createElement('button')
    btnClearScore.setAttribute('id', "btn-clear-score")
    btnClearScore.className = "btn-clear-score"
    btnClearScore.textContent = 'Clear High Score'
    div.appendChild(btnClearScore)

    console.log(sectionHighScore)
}





//function that makes the quiz finished section
var makeFinishedStn = function(){
    //function to make this section
    makeStn("finished", "finished", "div-finished")

    //store Section
    var sectionFinished = setStn
    console.log(sectionFinished)
    
    //append section to page
    pageBodyMain.appendChild(sectionFinished)

    //find id div-finished and store it
    var div = document.querySelector("#div-finished")
    

    //make h2 element
    var h2 = document.createElement('h2')
    h2.textContent = "All Done!"
    div.appendChild(h2)

    //make p element
    var p = document.createElement('p')
    p.textContent = "Your final score is "
    div.appendChild(p)

    var span = document.createElement('span')
    span.setAttribute('id', 'score-span')
    p.appendChild(span)

    //make input and label
    var label = document.createElement('label')
    label.setAttribute('for', 'initials')
    label.textContent = 'Enter initials:'
    div.appendChild(label)

    var inputText = document.createElement('input')
    inputText.setAttribute('type','text')
    inputText.setAttribute('name', 'initials')
    inputText.setAttribute("id", "initials")
    div.appendChild(inputText)

    //make button
    var button = document.createElement('button')
    button.className = 'btn-submit'
    button.setAttribute('id',"btn-submit")
    button.textContent = 'Submit'
    div.appendChild(button)

    console.log(sectionFinished)

}

//function that will be called once quiz has finished or time as run out 
var finishedPage = function() {
    //set score
    var score = timeleft
   
    //stop displaying time left 
    displayTime.textContent = ""
    //append finished to page
    makeFinishedStn()

    //use score variable and add what the ending score was to the page
    var setScoreSpan = document.querySelector('#score-span')
    setScoreSpan.textContent = score

    //call variable out side of the event listener so it can be used again after
    //the event listener to store input
    var initialsInput 

    //finished submit button
    var btnFinished = document.querySelector("#btn-submit")
    btnFinished.addEventListener('click', function(){
    //get initials entered
        initialsInput = document.querySelector('#initials').value


        //check to make sure initials were entered
        if(!initialsInput){
            alert('please enter initals')
            return false
        }

        //store info in obj and push it to array
        var storeinfo = {
            initials: initialsInput,
            score: timeleft,
        }

        intAndScore.push(storeinfo)

        //save initials and score to local storage
        saveScore()

        //remove finished page
        removeStn('#finished')

        //append high score page
        highScorePage()
    })


}

var highScorePage = function(){

    //append high score page
    makeHighScoreStn()

    //load the scores from the local storage
    loadScores()

    // call up id for go back button
    var goBackBtn = document.querySelector('#btn-go-back')

    //call up id for clear highscore button
    var clearScoreBtn = document.querySelector('#btn-clear-score')

    //event listener for go back button
    goBackBtn.addEventListener('click',function(){
        //remove highscore page and return to default content page
        removeStn('#high-score')

        //append content page 
        pageBodyMain.appendChild(contentStn)
    })

    //event listener for clear highscore button
    clearScoreBtn.addEventListener('click',function(){
        //clear score function
        clearScore()

        // let the user know they will be return to the front page
        var confirm = window.confirm('You will now be return to the starting page')
        if(confirm){
            //remove highscore page and return to default content page
            removeStn('#high-score')

            //append content page 
            pageBodyMain.appendChild(contentStn)
        }
        
    })
}

//fuction that holds the timer Interval logic
var timerIntervalLoigc = function(){
    //if timer is great than 0 countdown by one second
    if (timeleft > 0){
        displayTime.textContent = timeleft
        timeleft--
        console.log(timeleft)
    }

    //if timer hits 0 stop timer, end questions and appened next section
    if (timeleft === 0){
       displayTime.textContent = timeleft--
       clearInterval(countdown)
        removeStn('#question')
        finishedPage()
    }


}




var startQtns = function(){
    //remove content from page
    removeStn('#content')

    timeleft = 128
    //start timer
    var countdown = setInterval(function(){
 timerIntervalLoigc()
   }, 1000)


   //function to check if all the questions and been answered
   //function has to be called in this function to clearinerval
var checkQtnLeft = function(){
    if (qtnNumber < questions.length){
        removeStn('#question')
        repeatMakingQtns()
    }else{
        qtnNumber = 0
        clearInterval(countdown)
        removeStn('#question')
        finishedPage()
    }
}

//function that will continue to index through the questions and make them until
//the checkQtnLeft has confirmed otherwise
//function has to be called in this function to clear interval
var repeatMakingQtns = function(){
    //append questions to page
    makeQuestionStn()
    // add 1 to question number which will be used as and index
    qtnNumber++

    //call up id for answer button
    var answerBtn = document.querySelector('#btn-answer')
    //call up id for false buttons
    var falseBtns = document.querySelectorAll('#false-btn')


    //event listener for answerBtn
    answerBtn.addEventListener('click',function(){

        //call div to append to 
        var div = document.querySelector("#div-question")

        // make h3 element to append to bottom of section
        var h3 = document.createElement('h3')
        h3.textContent = 'Correct'
        div.appendChild(h3)
        //set timeout for 1 second then call checkQtnLeft function
    setTimeout(() => {
            checkQtnLeft()
    }, 1000);
    })


    //loop through node list and add event listeners to each
    for (var i = 0; i < falseBtns.length; i++){
        //variable to hold a value to compare to
        var answerWrong = "wrong"
         //event listener for on click then display that the answer was wrong
        falseBtns[i].addEventListener('click', function(){
        //call div to append to 
        var div = document.querySelector("#div-question")
        // make h3 element to append to bottom of section
        var h3 = document.createElement('h3')
        h3.textContent = 'Wrong'
        div.appendChild(h3)

        //if method to check if the answer was wrong which it should be because
        //of the call out above
        if (answerWrong === "wrong"){
            //clears the countdown interval
            clearInterval(countdown)
            //subtract 10 seconds from time left
            timeleft = timeleft - 10
            //restart interval
          countdown = setInterval(function(){
                timerIntervalLoigc()
                  }, 1000)
        }

    //set timeout for 1 second then call checkQtnLeft function
    setTimeout(() => {
        checkQtnLeft()
    }, 1000);
        })
    }
}
    //call function repeatMakingQtns
    repeatMakingQtns()
}
        
//event listener for start of quiz
contentBtn.addEventListener('click', startQtns )


//event listener for view score
viewHS.addEventListener('click',function(){
    //remove content from page
    var removeCtn = document.querySelector('#content')
    pageBodyMain.removeChild(removeCtn)

    //function call to make high score page
    highScorePage()
})

