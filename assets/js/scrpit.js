//Stn stand for section

//store body of page to append to
var pageBodyMain = document.querySelector('main')

//store content section of page
var contentStn = document.querySelector('#content')
console.log(contentStn)

//store button from content section of page
var contentBtn = document.querySelector('#start-btn')

//time on timer
var timeleft = 128
//Timer display
var displayTime = document.querySelector("#countdown")
console.log(displayTime)

//empty variable to make sections 
var setStn 

//initials and score
var intAndScore = []


//header view score button
var viewHS = document.querySelector('#btn-scores')

//questions
//which question is being used 
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
    console.log(intAndScore)
        localStorage.setItem('highscore', JSON.stringify(intAndScore) )

}

var clearScore = function(){
    localStorage.removeItem('highscore')
}


 var loadScores = function(){
    var savedScores = localStorage.getItem('highscore')

    savedScores = JSON.parse(savedScores)
    console.log(savedScores)
    
    var ulHighScore = document.querySelector("#high-score-list")

    var scoreNumber = 1

    if (!savedScores){
        return
    }

    for (score of savedScores){
        
        var li = document.createElement('li')
        li.textContent = scoreNumber + "." + score.initials + " - " + score.score
        ulHighScore.appendChild(li)
        scoreNumber++
    }
}


//function that makes a section with a div
var makeSection = function(stnClass,stnId, divId){
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
var removeSection = function(sectionId){
    var remove = document.querySelector(sectionId)
    pageBodyMain.removeChild(remove)

}

//function that makes the quiz question screen
var makeQuestion = function(){
    //function to make this section
    makeSection("question","question","div-question")

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

//function that makes the quiz high score screen
var makeHighScore = function(){
    //function to make this section
    makeSection("high-score","high-score","div-high-score")

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





//function that makes the quiz finished screen
var makeFinishedStn = function(){
    //function to make this section
    makeSection("finished", "finished", "div-finished")

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

var finishedPage = function() {
    //set score
    var score = timeleft
   

    //stop displaying time left 
    displayTime.textContent = ""
    //append finished to page
    makeFinishedStn()

    var setScore = document.querySelector('#score-span')
    setScore.textContent = score

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
        removeSection('#finished')


        //append high score page
        highScorePage()
    })


}

var highScorePage = function(){
    //append high score page
    makeHighScore()

    loadScores()
    // call up id for go back button
    var goBackBtn = document.querySelector('#btn-go-back')

    //call up id for clear highscore button
    var clearScoreBtn = document.querySelector('#btn-clear-score')

    //event listener for go back button
    goBackBtn.addEventListener('click',function(){
        //remove highscore page and return to default content page
        removeSection('#high-score')

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
            removeSection('#high-score')

            //append content page 
            pageBodyMain.appendChild(contentStn)
        }
        
    })
}


var intervalLoigc = function(){
    if (timeleft > 0){
        displayTime.textContent = timeleft
        timeleft--
        console.log(timeleft)
    }

    //if timer hits 0 stop timer, end questions and appened next section
    if (timeleft === 0){
       displayTime.textContent = timeleft--
       clearInterval(countdown)
        removeSection('#question')
        finishedPage()
    }


}


var startQtns = function(){
    //debugger
    //remove content from page
    removeSection('#content')

    timeleft = 128
    //start timer
    var countdown = setInterval(function(){
 intervalLoigc()
   }, 1000)

   //function to check if all the questions and been answered
    var check = function(){
        if (qtnNumber < questions.length){
            removeSection('#question')
            repeat()
        }else{
            qtnNumber = 0
            clearInterval(countdown)
            removeSection('#question')
            finishedPage()
        }
    }


    var repeat = function(){
        //append questions to page
        makeQuestion()
        // add 1 to question number
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

            

             //remove questions section from page
        setTimeout(() => {
                check()
        }, 2000);
        })


        //loop through node list and add event listeners to each
        for (var i = 0; i < falseBtns.length; i++){
            var answerWrong = "wrong"
             //event listener for on click then display that the answer was wrong
            falseBtns[i].addEventListener('click', function(){
            //call div to append to 
            var div = document.querySelector("#div-question")
            // make h3 element to append to bottom of section
            var h3 = document.createElement('h3')
            h3.textContent = 'Wrong'
            div.appendChild(h3)

            if (answerWrong === "wrong"){
                clearInterval(countdown)
                timeleft = timeleft - 10
              countdown = setInterval(function(){
                    intervalLoigc()
                      }, 1000)
            }


            //remove questions section from page
        setTimeout(() => {
            check()
        }, 1500);
            })
        }
    }

    repeat()
}
        
  
        
        





//event listener for start of quiz
contentBtn.addEventListener('click',startQtns )


//event listener for view score
viewHS.addEventListener('click',function(){
    //remove content from page
    var removeCtn = document.querySelector('#content')
    pageBodyMain.removeChild(removeCtn)

    highScorePage()
})

