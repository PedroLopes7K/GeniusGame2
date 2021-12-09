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
}

// acende a proxima cor
let corBrilho = (Elemento, number) => {
  // if (Elemento == 0) {
  //   elemento = grenn
  // } else if
  number = number * 500
  setTimeout(() => {
    Elemento.classList.add('active')
  }, number - 250)
  setTimeout(() => {
    Elemento.classList.remove('active')
  }, number)
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
    alert(`Pontuação: ${points}\n Você acertou! Iniciando próximo nível`)
    proximoNivel()
  }
}

// click do jogador

let click = cor => {
  ordensClick[ordensClick.length] = cor
  criarElemento(cor).classList.add('active')

  setTimeout(() => {
    criarElemento(cor).classList.remove('active')
    checarClick()
  }, 250)
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
  result.innerHTML = ` Sua pontuação: ${--points}`
  modal.classList.add('open')
  ordens = []
  ordensClick = []
  // playGame()
}

//inicio do game
let playGame = () => {
  // alert('Bem Vindo')
  modal.classList.remove('open')
  points = 0
  proximoNivel()
}

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

let modal = document.getElementById('modal')

let title = document.querySelector('h2.titulo')

let result = document.querySelector('h2.result')

let btnTitle = document.querySelector('.btn')
let btnStart = document.querySelector('.continue')
btnStart.addEventListener('click', playGame)

// function prevent() {
//   for (let i = 0; i < array.length; i++) {
//     array[i].addEventListener('click', event => {
//       event.preventDefault()
//     })
//   }
// }
