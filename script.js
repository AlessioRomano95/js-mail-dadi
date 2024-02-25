
// es dadi
const button = document.getElementById('button')
const victory = document.getElementById('vincitore')

button.addEventListener('click', function(){

    let resultUser = ''
    let resultCpu = ''
    let message = ''

    resultUser = Math.floor(Math.random() * 6) + 1
    console.log(resultUser, 'resultUser')
    resultCpu = Math.floor(Math.random() * 6) + 1
    console.log(resultCpu, 'resultCpu')
  
    if(resultUser > resultCpu){
        message = 'HAI VINTO'
    } else if(resultUser === resultCpu){
        message = 'HAI PAREGGIATO'
    }
    else {
        message = 'HA VINTO IL PC'
    }

    victory.innerText = message + ' risultato utente: ' + resultUser + ' risultato computer: ' + resultCpu
})


// es email
const email = ['armando@libero.it',
  'ALexciao@icloud.com',
  'ironman@gmail.com',
  'obione@gmail.com'
  'spock@gmail.com']

const emailUser = document.getElementById('email')
const emailButton = document.getElementById('mail-button')
const text = document.getElementById('text')

emailButton.addEventListener('click', function(){

const emailDichiarata = emailUser.value.trim()
console.log(emailDichiarata)

if (!emailDichiarata){
    alert('Email non valida')
    return
}

let userAutorizzato = false

for(let i = 0; i < email.length && !userAutorizzato; i++){
    console.log(email[i])
    let messageForUser

if (emailDichiarata === email[i]){
    userAutorizzato = true
    console.log('Benvenuto ', emailDichiarata)
    console.log(userAutorizzato)
    messageForUser = 'Benvenuto ' + emailDichiarata
} else if(!userAutorizzato){
    console.log('Non puoi entrare ', emailDichiarata)
    console.log(userAutorizzato)
    messageForUser = 'Non sei autorizzato '+ emailDichiarata
}

text.innerText = messageForUser
}
})