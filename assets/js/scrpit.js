//calls body of page 
var pageBody = document.querySelector('body')



//time left on timer
var timeLeft = 0

var setSection 
//section questions
var sectionquestions
//section finished
var sectionFinished 
//section high score
var sectionHighScore

//make section with div function
var makeSection = function(setClass,id){
    //make section element
    setSection = document.createElement('section')
    setSection.className = setClass

    //make div to go in section to hold content
    var div = document.createElement('div')
    div.setAttribute("id",id)
    setSection.appendChild(div)
    

}

//function that makes the quiz question screen
var makeQuestion

//function that makes the quiz high score screen
var makeHighScore = function(){
    //function to make this section
    makeSection("high-score","div-high-score")

    //store Section
    var sectionHighScore = setSection
    
    //append section to page
    pageBody.appendChild(sectionHighScore)

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
    makeSection("finished","div-finished")

    //store Section
    var sectionFinished = setSection
    
    //append section to page
    pageBody.appendChild(sectionFinished)

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

makeHighScore()
makeFinished()