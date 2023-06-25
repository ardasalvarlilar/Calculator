const input = document.querySelector('.calculate-input')
const item = document.querySelector('.calculate-item')
const equal = document.querySelector('.equal')

let display = '0'
let firstValue = null
let bekleyenDeger = false
let operator = null

function updateScreen(){
  input.value = display
}
updateScreen()

item.addEventListener('click',function(e){
  const element = e.target

  if(!element.matches('button'))return

  if(element.classList.contains('clear')){
    clear()
    updateScreen()
    return
  }

  if(element.classList.contains('decimal')){
    decimal()
    updateScreen()
    return
  }
  if(element.classList.contains('delete')){
    deletebtn()
    updateScreen()
    return
  }
  if(element.classList.contains('operator')){
    forOperators(element.value)
    updateScreen()
    return
  }

  inputNumber(element.value)
  updateScreen()
})

function inputNumber(num){
  if(bekleyenDeger){
    display = num
    bekleyenDeger = false
  }else{
    display = display === '0' ? num : display + num
  }
}

function clear(){
  display = '0'
  firstValue = null
  bekleyenDeger = false
  operator = null
}

function decimal(){
  if(!display.includes('.')){
    display += '.'
  }
}

function deletebtn(){
  display = input.value.slice(0, -1)
}

function forOperators(element){
  let ikinciDeger = parseFloat(display)
  if(operator && bekleyenDeger){
    operator = element
    return
  }
  if(firstValue === null){
    firstValue = parseFloat(display)
  }else{
    const sonuc = calculate(firstValue,ikinciDeger,operator)
    display = sonuc
    firstValue = display
  }
  operator =element
  bekleyenDeger = true
}
function calculate(ilk,iki,op){
  if(op == '+'){
    return ilk + iki
  }else if(op == '-'){
    return ilk - iki  
  }else if(op == '*'){
    return ilk * iki
  }else if(op == '/'){
    return ilk / iki
  }
  return ilk
}