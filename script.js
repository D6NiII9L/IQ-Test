

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

        userNameInput.style.border = '0'
        
        userNameInput.onblur = () => {

            userNameInput.style.border = '0'

        }
        
        userNameInput.onfocus = () => {

            userNameInput.style.border = '2px solid var(--primaryColor)'

        }


    } else {

        isValueCorrect = false

        userNameInput.insertAdjacentElement('afterend' , userNameError)

        userNameInput.style.border = '2px solid var(--errorColor)'

    }

    console.log(Number(userAgeInput.value.trim()));

    if (userAgeInput.value.trim() !== '' && Number(userAgeInput.value.trim()) > 0) {

        isValueCorrect = true
        
        try {

            mainSpace.removeChild(userAgeError)

        } catch {}

        userAgeInput.style.border = '0'
        
        userAgeInput.onblur = () => {

            userAgeInput.style.border = '0'

        }
        
        userAgeInput.onfocus = () => {

            userAgeInput.style.border = '2px solid var(--primaryColor)'

        }

    } else {
        
        isValueCorrect = false

        userAgeInput.insertAdjacentElement('afterend' , userAgeError)

        userAgeInput.style.border = '2px solid var(--errorColor)'

    }
    
})
