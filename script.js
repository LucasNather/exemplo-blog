const paragrafosData = document.querySelectorAll('.data')

let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()

let arrMes = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto",
                  "setembro","outubro","novembro","dezembro"]
    
let mesAtual = arrMes[mes]


const dataMudada = paragrafosData.forEach((value) => {
     value.innerHTML = `${dia} de ${mesAtual} de ${ano}`
})


