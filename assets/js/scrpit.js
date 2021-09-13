//store body of page to append to
var pageBodyMain = document.querySelector('main')

//place questions for values of questions
var qtnHolder = ["javascript","console.log",".document","python","html","css"]

//store content section of page
var contentStn = document.querySelector('#content')
console.log(contentStn)

//store button from content section of page
var contentBtn = document.querySelector('#start-btn')

//time left on timer
var timeLeft = 0

//empty variable to make sections 
var setStn 


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
    h2.textContent = "question"
    div.appendChild(h2)

    var btnanswer = document.createElement('button')
    btnanswer.setAttribute('id','btn-answer')
    btnanswer.className = 'btn'
    btnanswer.textContent = "javascript"
    div.appendChild(btnanswer)

    // make other 3 place holder buttons
    for (var i = 0; i < 3; i++){
        var btn = document.createElement("button")
        btn.setAttribute('id',"false-btn")
        btn.className = 'btn'
        btn.textContent = qtnHolder[Math.floor(Math.random() * qtnHolder.length)] 
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
    div.appendChild(ul)

    //this need to take from local storage that holds scores and display them in
    //the list item
    //make li item
    var li = document.createElement('li')
    li.textContent = "1. " /*initials*/ + " - " /*score*/
    ul.appendChild(li)

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
var makeFinished = function(){
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
    p.textContent = "Your final score is " + timeLeft
    div.appendChild(p)

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
    //append finished to page
    makeFinished()
}


var startQtns = function(){
    //remove content from page
    var removeCtn = document.querySelector('#content')
    pageBodyMain.removeChild(removeCtn)

    //counter for which question its on 
    var n = 0
    while(n < 1){
        //append questions to page
        makeQuestion()
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
            var removeQtn = document.querySelector('#question')
            pageBodyMain.removeChild(removeQtn)
        }, 2000);
        })
    
    
        //loop through node list and add event listeners to each
        for (var i = 0; i < falseBtns.length; i++){
            //event listener for on click then display that the answer was wrong
            falseBtns[i].addEventListener('click', function(){
            //call div to append to 
            var div = document.querySelector("#div-question")
            // make h3 element to append to bottom of section
            var h3 = document.createElement('h3')
            h3.textContent = 'Wrong'
            div.appendChild(h3)
    
             //remove questions section from page
        setTimeout(() => {
            var removeQtn = document.querySelector('#question')
            pageBodyMain.removeChild(removeQtn)
        }, 2000);
            })
        }
        n++
    }
   
    finishedPage()


}

contentBtn.addEventListener('click',startQtns )