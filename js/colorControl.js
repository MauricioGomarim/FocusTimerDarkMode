document.getElementById('iconlight').addEventListener('click', iconlight)

function iconlight() {
  alert('dark mode on')

  document.querySelector('#body').style.backgroundColor = '#121214'
  document.querySelector('#time').style.color = '#FFFFFF'
  document.querySelector('.play').classList.add('darkcolor')
  document.querySelector('.stop').classList.add('darkcolor')
  document.querySelector('.setTime').classList.add('darkcolor')
  document.querySelector('.removeTime').classList.add('darkcolor')

  document.querySelector('.icondark').classList.remove('hide')
  document.querySelector('.iconlight').classList.add('hide')
}

document.getElementById('icondark').addEventListener('click', icondark)

function icondark() {
  alert('light mode on')
  document.querySelector('#body').style.backgroundColor = '#FFFFFF'
  document.querySelector('#time').style.color = '#323238'
  document.querySelector('.play').classList.remove('darkcolor')
  document.querySelector('.stop').classList.remove('darkcolor')
  document.querySelector('.setTime').classList.remove('darkcolor')
  document.querySelector('.removeTime').classList.remove('darkcolor')

  document.querySelector('.icondark').classList.add('hide')
  document.querySelector('.iconlight').classList.remove('hide')
}

export { iconlight, icondark }
