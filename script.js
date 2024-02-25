
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
