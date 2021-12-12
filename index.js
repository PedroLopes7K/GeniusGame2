let ordens = []
let ordensClick = []
let points = 0
let pontuacao = document.getElementById('pontos')
pontuacao.innerHTML = points

const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')

// let array = [blue, green, yellow, red]
// cria ordem aleatoria de cores
let embaralharOrdem = () => {
  let OrdemCores = Math.floor(Math.random() * 4)
  ordens[ordens.length] = OrdemCores
  ordensClick = []
  for (let i in ordens) {
    let corElemento = criarElemento(ordens[i])
    corBrilho(corElemento, Number(i) + 1) // retornando a cor da função cria elemento
  }
  // proximoNivel()
}

// acende a proxima cor
let corBrilho = (Elemento, timer) => {
  // let cor

  timer = timer * 500
  setTimeout(() => {
    if (Elemento == green) {
      Elemento.classList.add('activeG')
    } else if (Elemento == red) {
      Elemento.classList.add('activeR')
    } else if (Elemento == yellow) {
      Elemento.classList.add('activeY')
    } else if (Elemento == blue) {
      Elemento.classList.add('activeB')
    }
    // Elemento.classList.add('active')
  }, timer - 250)
  setTimeout(() => {
    if (Elemento == green) {
      Elemento.classList.remove('activeG')
    } else if (Elemento == red) {
      Elemento.classList.remove('activeR')
    } else if (Elemento == yellow) {
      Elemento.classList.remove('activeY')
    } else if (Elemento == blue) {
      Elemento.classList.remove('activeB')
    }
    // Elemento.classList.remove('active')
  }, timer)
}

// checa se os botos clicados sao os mesmos da ordem gerada no jogo
let checarClick = () => {
  for (let i in ordensClick) {
    if (ordensClick[i] != ordens[i]) {
      perdeu()
      // break estava errado
      return
    }
  }
  if (ordensClick.length == ordens.length) {
    // alert(`Pontuação: ${points}\n Você acertou! Iniciando próximo nível`)
    modal2.classList.add('open')
    // btnCnt.addEventListener('click', () => {
    //   modal2.classList.remove('open')
    //   proximoNivel()
    // })

    // setTimeout(() => {
    //   modal2.classList.remove('open')
    //   proximoNivel()
    // }, 700)
  }
}

// click do jogador

let click = cor => {
  let ElementsColor
  ordensClick[ordensClick.length] = cor
  console.log(ordensClick)
  ElementsColor = criarElemento(cor)

  switch (ElementsColor) {
    case green:
      ElementsColor.classList.add('activeG')
      break
    case blue:
      ElementsColor.classList.add('activeB')
      break
    case red:
      ElementsColor.classList.add('activeR')
      break
    case yellow:
      ElementsColor.classList.add('activeY')
      break
  }

  setTimeout(() => {
    switch (ElementsColor) {
      case green:
        ElementsColor.classList.remove('activeG')
        break
      case blue:
        ElementsColor.classList.remove('activeB')
        break
      case red:
        ElementsColor.classList.remove('activeR')
        break
      case yellow:
        ElementsColor.classList.remove('activeY')
        break
    }

    checarClick()
  }, 300)
}

// funçao que retorna a cor
let criarElemento = cor => {
  if (cor == 0) {
    return green
  } else if (cor == 1) {
    return red
  } else if (cor == 2) {
    return yellow
  } else if (cor == 3) {
    return blue
  }
}

// funçao para proximo nivel
let proximoNivel = () => {
  points++
  pontuacao.innerHTML = points - 1
  embaralharOrdem()
}

// funçao  game over

let perdeu = () => {
  // alert(`Pontuação: ${--points}\nVocê Perdeu!\nClique em Ok para reiniciar`)
  title.innerHTML = 'Voce Perdeu!'
  btnStart.style.background = 'red'
  btnTitle.innerHTML = 'RESTART'
  btnTitle.style.color = '#fff'
  result.style.color = '#fff'
  result.innerHTML = ` Sua pontuação: ${--points}`
  modal.classList.add('open')
  ordens = []
  ordensClick = []
  // playGame()
}

//inicio do game
let playGame = () => {
  // alert('Bem Vindo')
  btnCnt.addEventListener('click', () => {
    modal2.classList.remove('open')
    proximoNivel()
  })
  modal.classList.remove('open')
  points = 0
  // addClick()

  // embaralharOrdem()
  proximoNivel()
}

// function addClick() {
//   green.addEventListener('click', () => {
//     click(0)
//   })
//   red.addEventListener('click', () => {
//     click(1)
//   })
//   yellow.addEventListener('click', () => {
//     click(2)
//   })
//   blue.addEventListener('click', () => {
//     click(3)
//   })
// }

// function removeClick() {
//   green.addEventListener(
//     'click',
//     () => {
//       click(0)
//     },
//     false
//   )
//   red.addEventListener(
//     'click',
//     () => {
//       click(1)
//     },
//     false
//   )
//   yellow.addEventListener(
//     'click',
//     () => {
//       click(2)
//     },
//     false
//   )
//   blue.addEventListener(
//     'click',
//     () => {
//       click(3)
//     },
//     false
//   )
// }
green.addEventListener('click', () => {
  click(0)
})
red.addEventListener('click', () => {
  click(1)
})
yellow.addEventListener('click', () => {
  click(2)
})
blue.addEventListener('click', () => {
  click(3)
})

// playGame()

// green.onclick() = () => click(0)
// red.onclick() = () => click(1)
// yellow.onclick() = () => click(2)
// blue.onclick() = () => click(3)

// MODAL 1
let modal = document.getElementById('modal')

let title = document.querySelector('h2.titulo')

let result = document.querySelector('h2.result')

let btnTitle = document.querySelector('.btn')
let btnStart = document.querySelector('.continue')
btnStart.addEventListener('click', playGame)

//MODAL 2
let modal2 = document.getElementById('win')
let btnCnt = document.querySelector('.continue2')

// function prevent() {
//   for (let i = 0; i < array.length; i++) {
//     array[i].addEventListener('click', event => {
//       event.preventDefault()
//     })
//   }
// }
