import { minutesDisplay } from './config.js'

export function Controls() {
  function addTime() {
    minutesDisplay.textContent = String(minutes + 1).padStart(2, '0')
    minutes = Number(minutesDisplay.textContent)
  }

  function removeTime() {
    minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')

    minutes = Number(minutesDisplay.textContent)
  }

  return {
    addTime,
    removeTime
  }
}
