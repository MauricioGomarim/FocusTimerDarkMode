const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonSetTime = document.querySelector('.setTime')
const buttonRemoveTime = document.querySelector('.removeTime')

const resetSelect = document.querySelector('.Sound')
const Floresta = document.querySelector('.Floresta')
const Rain = document.querySelector('.Rain')
const Cafeteria = document.querySelector('.Cafeteria')
const Lareira = document.querySelector('.Lareira')

const soundFloresta = new Audio('./sons/Floresta.wav')
const soundRain = new Audio('./sons/Chuva.wav')
const soundCafeteria = new Audio('./sons/Cafeteria.wav')
const soundLareira = new Audio('./sons/Lareira.wav')

export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonSetTime,
  buttonRemoveTime,
  resetSelect,
  Floresta,
  Rain,
  Cafeteria,
  Lareira,
  soundFloresta,
  soundRain,
  soundCafeteria,
  soundLareira
}
