import {
  Floresta,
  Rain,
  Cafeteria,
  Lareira,
  soundFloresta,
  soundRain,
  soundCafeteria,
  soundLareira
} from './config.js'

export function Sound() {
  function TimeEnd() {
    Floresta.classList.remove('select')
    Rain.classList.remove('select')
    Cafeteria.classList.remove('select')
    Lareira.classList.remove('select')

    soundFloresta.pause()
    soundRain.pause()
    soundCafeteria.pause()
    soundLareira.pause()
  }
  return {
    TimeEnd
  }
}
