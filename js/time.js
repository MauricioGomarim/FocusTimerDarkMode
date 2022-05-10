import { Sound } from './sound.js'
import { buttonPlay, buttonStop } from './config.js'

export function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut

  let minutes = Number(minutesDisplay.textContent)
  let newMinutes = minutes
  Sound()
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function updateMinutes() {
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    minutes = Number(minutesDisplay.textContent)
  }
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function tempo() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        Sound().TimeEnd()
        clearTimeout(timerTimeOut)
        reset()
        updateDisplay()
        updateMinutes()
        return
      }

      if (seconds <= 0) {
        seconds = 2
        --minutes
      }

      updateDisplay(minutes, seconds - 1)

      tempo()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    tempo,
    hold,
    updateMinutes,
    updateDisplay,
    reset
  }
}
