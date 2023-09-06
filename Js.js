const Btntheme = document.querySelector('#change-theme')

const BtnPlay = document.querySelector('.play')
const BtnStop = document.querySelector('.stop')
const BtnMore = document.querySelector('.more')
const BtnLess = document.querySelector('.less')
const BtnPause = document.querySelector('.pause')

const jungleSounds = document.querySelector('.card-button-jungle')
const RainSounds = document.querySelector('.card-button-rain')
const CoffeSounds = document.querySelector('.card-button-coffe')
const FireSounds = document.querySelector('.card-button-fire')

const BgJUngle = document.querySelector('.bg-jungle')
const BgRain = document.querySelector('.bg-rain')
const BgCoffe = document.querySelector('.bg-coffe')
const BgFire = document.querySelector('.bg-fire')

const JSound = document.querySelector('.jungle-sound')
const RSound = document.querySelector('.rain-sound')
const FSound = document.querySelector('.fire-sound')
const CSound = document.querySelector('.coffe-sound')

const BtnDark = document.querySelector('.moon-svg')
const BtnSun = document.querySelector('.sun-svg')

let MinutesDisplay = document.querySelector('.minutes')
let SecondsDisplay = document.querySelector('.seconds')
let timerTimeOut



function countdow(){
    timerTimeOut = setTimeout(() => {

        minutes = Number(MinutesDisplay.textContent)
        seconds = Number(SecondsDisplay.textContent)
        
        if(minutes <= 0 && seconds <= 0){
            ResetTime()

            return
        }

        if(seconds <= 0){
            MinutesDisplay.textContent = String(minutes -1).padStart(2, "0")
            seconds = 3
        }

        SecondsDisplay.textContent = String(seconds -1).padStart(2, "0")

        countdow()
    }, 1000);
}



function ResetTime(){
    clearInterval(timerTimeOut)
    MinutesDisplay.textContent = "00"
    SecondsDisplay.textContent = "00"
}


function moreTime(){
    MinutesDisplay.textContent = String(minutes+5).padStart(2, "0")
}

function LessTime(){
    MinutesDisplay.textContent = String(minutes-5).padStart(2, "0")
}

function jSound(){
    JSound.play()
    RSound.pause()
    FSound.pause()
    CSound.pause()
}

function RaSound(){
    RSound.play()
    JSound.pause()
    FSound.pause()
    CSound.pause()
}

function FiSound(){
    FSound.play()
    CSound.pause()
    RSound.pause()
    JSound.pause()
}

function CoSound(){
    CSound.play()
    JSound.pause()
    RSound.pause()
    FSound.pause()
}


BtnPlay.addEventListener('click', function(){
    BtnPlay.classList.add('hide')
    BtnPause.classList.remove('hide')
    countdow()
})

BtnPause.addEventListener('click', function(){
    BtnPlay.classList.remove('hide')
    BtnPause.classList.add('hide')
    
    clearTimeout(timerTimeOut)
})

BtnStop.addEventListener('click', function(){
    BtnPause.classList.add('hide')
    BtnPlay.classList.remove('hide')

    ResetTime()
})

BtnMore.addEventListener('click', function(){
    moreTime()
})

BtnLess.addEventListener('click', function(){
    LessTime()
})


jungleSounds.addEventListener('click', function(){
    BgJUngle.classList.remove('hide')
    BgRain.classList.add('hide')
    BgCoffe.classList.add('hide')
    BgFire.classList.add('hide')

    jSound()
})

RainSounds.addEventListener('click', function(){
    BgRain.classList.remove('hide')
    BgJUngle.classList.add('hide')
    BgCoffe.classList.add('hide')
    BgFire.classList.add('hide')

    RaSound()
})

FireSounds.addEventListener('click', function(){
    BgFire.classList.remove('hide')
    BgRain.classList.add('hide')
    BgJUngle.classList.add('hide')
    BgCoffe.classList.add('hide')

    FiSound()
})

CoffeSounds.addEventListener('click', function(){
    BgCoffe.classList.remove('hide')
    BgFire.classList.add('hide')
    BgRain.classList.add('hide')
    BgJUngle.classList.add('hide')

    CoSound()
})



let minutes = prompt('Quantos minutos?') || "00"

MinutesDisplay.textContent = String(minutes).padStart(2, "0")