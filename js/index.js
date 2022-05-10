import { Timer } from './time.js'
import { Controls } from './controls.js'
import { Sound } from './sound.js'
import { iconlight } from './colorControl.js'

import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonSetTime,
  buttonRemoveTime,
  Floresta,
  Rain,
  Cafeteria,
  Lareira,
  soundFloresta,
  soundRain,
  soundCafeteria,
  soundLareira
} from './config.js'

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
  minutesDisplay
})

let timer = Timer({
  minutesDisplay,
  secondsDisplay
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.tempo()
})

buttonStop.addEventListener('click', function () {
  buttonStop.classList.add('hide')
  buttonPlay.classList.remove('hide')

  minutes = Number(minutesDisplay.textContent)
  timer.hold()
})

buttonSetTime.addEventListener('click', function () {
  minutesDisplay.textContent = String(minutes + 1).padStart(2, '0')
  minutes = Number(minutesDisplay.textContent)
})

buttonRemoveTime.addEventListener('click', function () {
  minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')

  minutes = Number(minutesDisplay.textContent)
})

Floresta.addEventListener('click', function () {
  Floresta.classList.add('select')
  Rain.classList.remove('select')
  Cafeteria.classList.remove('select')
  Lareira.classList.remove('select')

  soundFloresta.play()
  soundRain.pause()
  soundCafeteria.pause()
  soundLareira.pause()
})

Rain.addEventListener('click', function () {
  Rain.classList.add('select')
  Floresta.classList.remove('select')
  Cafeteria.classList.remove('select')
  Lareira.classList.remove('select')

  soundRain.play()
  soundFloresta.pause()
  soundCafeteria.pause()
  soundLareira.pause()
})

Cafeteria.addEventListener('click', function () {
  Cafeteria.classList.add('select')
  Floresta.classList.remove('select')
  Rain.classList.remove('select')
  Lareira.classList.remove('select')

  soundCafeteria.play()
  soundFloresta.pause()
  soundRain.pause()
  soundLareira.pause()
})

Lareira.addEventListener('click', function () {
  Lareira.classList.add('select')
  Floresta.classList.remove('select')
  Rain.classList.remove('select')
  Cafeteria.classList.remove('select')

  soundLareira.play()
  soundFloresta.pause()
  soundRain.pause()
  soundCafeteria.pause()
})
