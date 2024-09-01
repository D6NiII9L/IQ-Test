

//Getting data

let quizes = []

let answers = [3 , 1 , 5 , 5 , 2 , 1 , 2 , 2 , 2 , 6 , 4 , 1 , 4 , 7 , 2 , 3 , 1 , 6 , 5 , 8 , 4 , 4 , 7 , 6 , 4 , 7 , 7 , 3 , 2 , 8]

let score = 0

for (let q = 1 ; q <= 30 ; q++) {

    let optionsCount = 0

    if (q > 12) {

        optionsCount = 8

    }else {

        optionsCount = 6

    }

    let options = []

    for (let o = 1 ; o <= optionsCount ; o++) {

        options.push(`./Quizes/${q}/${q}-${o}.png`)

    }

    let quiz = {

        quizNumber : q,

        quizPhoto : `./Quizes/${q}/test${q}.png`,

        options : options,

        quizAnswer : 0

    }

    quizes.push(quiz)

}



//Preparing starter page

let changeThemeBtn = document.createElement('input')

changeThemeBtn.type = 'submit'

changeThemeBtn.value = 'T'

changeThemeBtn.id = 'changeThemeBtn'

document.body.appendChild(changeThemeBtn)

let isThemeDark = false

changeThemeBtn.addEventListener('click' , () => {

    let root = document.documentElement

    if (isThemeDark === true){
        
        root.style.setProperty('--bgColor' , 'hsl(0 , 0% , 90%)')
        root.style.setProperty('--secoondryBgColor' , 'hsl(0 , 0% , 96%)')
        root.style.setProperty('--primaryColor' , 'hsl(252, 72%, 72%)')
        root.style.setProperty('--primaryColorT' , 'hsla(252, 72%, 72% , 0.15)')
        root.style.setProperty('--color' , 'hsl(0 , 0% , 9%)')
        root.style.setProperty('--textFieldBgColor' , 'hsl(0 , 0% , 90%)')
        root.style.setProperty('--placeholderColor' , 'hsla(0 , 0% , 15% , 0.45)')
        root.style.setProperty('--errorColor' , 'hsl(342, 72%, 54%)')
        root.style.setProperty('--Color2' , 'hsl(0 , 0% , 96%)')
        root.style.setProperty('--quizFilter' , 'none')

        isThemeDark = false

    }else {

        root.style.setProperty('--bgColor' , 'hsl(0 , 0% , 9%)')
        root.style.setProperty('--secoondryBgColor' , 'hsl(0 , 0% , 15%)')
        root.style.setProperty('--primaryColor' , 'hsl(252, 66%, 72%)')
        root.style.setProperty('--primaryColorT' , 'hsla(252, 66%, 72% , 0.15)')
        root.style.setProperty('--color' , 'hsl(0 , 0% , 93%)')
        root.style.setProperty('--textFieldBgColor' , 'hsl(0 , 0% , 9%)')
        root.style.setProperty('--placeholderColor' , 'hsla(0 , 0% , 87% , 0.45)')
        root.style.setProperty('--errorColor' , 'hsl(342, 66%, 66%)')
        root.style.setProperty('--Color2' , 'hsl(0 , 0% , 15%)')
        root.style.setProperty('--quizFilter' , 'invert()')

        isThemeDark = true

    }

})


let mainSpace = document.createElement('div')

mainSpace.id = 'mainSpace'

document.body.appendChild(mainSpace)

let appName = document.createElement('h1')

appName.id = 'appName'

appName.innerText = 'IQ Test'

mainSpace.appendChild(appName)

let userNameInput = document.createElement('input')

userNameInput.className = 'textField'

userNameInput.type = 'text'

userNameInput.placeholder = 'Name'

mainSpace.appendChild(userNameInput)

let userAgeInput = document.createElement('input')

userAgeInput.className = 'textField'

userAgeInput.type = 'number'

userAgeInput.placeholder = 'Age'

mainSpace.appendChild(userAgeInput)


let startBtn = document.createElement('input')

startBtn.id = 'startBtn'

startBtn.type = 'submit'

startBtn.value = 'Start'

mainSpace.appendChild(startBtn)
        
const userNameError = document.createElement('p')

userNameError.className = 'errorText'

userNameError.innerText = 'please enter your name'
        
const userAgeError = document.createElement('p')

userAgeError.className = 'errorText'

userAgeError.innerText = 'please enter your age'

startBtn.addEventListener('click' , () => {

    let isValueCorrect = false

    if (userNameInput.value.trim() !== '') {

        isValueCorrect = true
        
        try {

            mainSpace.removeChild(userNameError)

        } catch {}

        userNameInput.style.border = '2px solid var(--secoondryBgColor)'
        
        userNameInput.onblur = () => {

            userNameInput.style.border = '2px solid var(--secoondryBgColor)'

        }
        
        userNameInput.onfocus = () => {

            userNameInput.style.border = '2px solid var(--primaryColor)'

        }


    } else {

        isValueCorrect = false

        userNameInput.insertAdjacentElement('afterend' , userNameError)

        userNameInput.style.border = '2px solid var(--errorColor)'

    }

    if (userAgeInput.value.trim() !== '' && Number(userAgeInput.value.trim()) > 0) {

        isValueCorrect = true
        
        try {

            mainSpace.removeChild(userAgeError)

        } catch {}

        userAgeInput.style.border = '2px solid var(--secoondryBgColor)'
        
        userAgeInput.onblur = () => {

            userAgeInput.style.border = '2px solid var(--secoondryBgColor)'

        }
        
        userAgeInput.onfocus = () => {

            userAgeInput.style.border = '2px solid var(--primaryColor)'

        }

    } else {
        
        isValueCorrect = false

        userAgeInput.insertAdjacentElement('afterend' , userAgeError)

        userAgeInput.style.border = '2px solid var(--errorColor)'

    }

    if (isValueCorrect === true) {

        appName.remove()

        userNameInput.remove()

        userAgeInput.remove()

        startBtn.remove()

        mainSpace.style.justifyContent = 'space-between'

        let headerSpace = document.createElement('div')

        headerSpace.id = 'headerSpace'

        mainSpace.appendChild(headerSpace)

        let userName = document.createElement('h2')

        userName.id = 'userName'

        userName.innerHTML = `${userNameInput.value} <span>(${userAgeInput.value})</span>`

        headerSpace.appendChild(userName)

        appName.style.fontSize = '18px'

        appName.style.marginBottom = '0'

        appName.style.color = 'var(--primaryColorT)'

        headerSpace.appendChild(appName)

        mainSpace.appendChild(quizPhotoSpace)

        mainSpace.appendChild(quizOptionsSpace)

        showNewQuiz()

    }
    
})

let quiz

let passedQuizes = []

let quizPhotoSpace = document.createElement('div')

quizPhotoSpace.id = 'quizPhotoSpace'

let quizOptionsSpace = document.createElement('div')

quizOptionsSpace.id = 'quizOptionsSpace'

function showNewQuiz() {

    quiz = quizes[Math.floor(Math.random() * quizes.length)]

    quizPhotoSpace.innerHTML = `<img src="${quiz.quizPhoto}" class="quizPhoto">`

    let quizOptionsList = ``

    for (let i = 0 ; i < quiz.options.length ; i++) {

        quizOptionsList += `<div class="quizOptions"><img number="${i+1}" src="${quiz.options[i]}" onclick="answerClick(this)" ></div>`

    }

    quizOptionsSpace.innerHTML = quizOptionsList

}

function answerClick(e) {

    quizes.splice(quizes.indexOf(quiz) , 1)

    quiz.quizAnswer = e.getAttribute('number')

    passedQuizes.push(quiz)

    if (quizes.length <= 0){

        score = 0

        passedQuizes.forEach((q) => {

            if (q.quizAnswer == answers[q.quizNumber - 1]) {

                score += 1

            }

        })

        console.log(score);

        headerSpace.remove()

        quizPhotoSpace.remove()

        quizOptionsSpace.remove()

        mainSpace.style.justifyContent = 'center'

        let iqResult = document.createElement('h1')

        iqResult.id = 'iqResult'

        iqResult.innerText = `${Math.round((score * 140) / answers.length)} IQ`

        mainSpace.appendChild(iqResult)

        let resultProgressBar = document.createElement('div')
        
        resultProgressBar.id = 'resultProgressBar'

        resultProgressBar.innerHTML = `<div></div>`

        resultProgressBar.getElementsByTagName('div')[0].style.width = `${Math.round((score * 100) / answers.length)}%`

        mainSpace.appendChild(resultProgressBar)

        let resultNumber = document.createElement('div')
        
        resultNumber.id = 'resultNumber'

        resultNumber.innerHTML = `<span>${score} Correct</span><span>${answers.length - score} Incorrect</span>`
        
        mainSpace.appendChild(resultNumber)

    }else {

        showNewQuiz()

    }

}
