

//Getting data

let quizes = []

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

        quizPhoto : `./Quizes/${q}/test${q}.png`,

        options : options

    }

    quizes.push(quiz)

}



//Preparing starter page

let mainSpace = document.createElement('div')

mainSpace.id = 'mainSpace'

document.body.appendChild(mainSpace)

let appName = document.createElement('h1')

appName.id = 'appName'

appName.innerText = 'Superior IQ'

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

startBtn.addEventListener('click' , function () {

    

})
