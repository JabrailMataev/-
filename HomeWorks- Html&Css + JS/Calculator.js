let input = document.body.querySelector('.input')


input.addEventListener('keydown', (event) =>{
    event.preventDefault()
})

let one = document.body.querySelector('.one')
let two = document.body.querySelector('.two')
let three = document.body.querySelector('.three')
let four = document.body.querySelector('.four')
let five = document.body.querySelector('.five')
let six = document.body.querySelector('.six')
let seven = document.body.querySelector('.seven')
let eight = document.body.querySelector('.eight')
let nine = document.body.querySelector('.nine')
let zero = document.body.querySelector('.zero')
let plus = document.body.querySelector('.plus')
let minus = document.body.querySelector('.minus')
let toShare = document.body.querySelector('.toShare')
let multiply = document.body.querySelector('.multiply')
let equally = document.body.querySelector('.equally')
let clear = document.body.querySelector('.clear')


clear.addEventListener('click', ()=>{
    input.value = ''
})

one.addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 1
    }else{
input.value += 1
    }
})



two.addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 2
    }else{
input.value += 2
    }
})



three.addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 3
    }else{
input.value += 3
    }
})



four.addEventListener('click', ()=>{
    if(input.value.includes('=')){
        input.value !== 4
    }else{
input.value += 4
    }
})




five.addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 5
    }else{
input.value += 5
    }
})




six .addEventListener('click',() =>{
    if(input.value.includes('=')){
        input.value !== 6
    }else{
input.value += 6
    }
})




seven.addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 7
    }else{
input.value += 7
    }
})




eight.addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 8
    }else{
input.value += 8
    }
})




nine .addEventListener('click', () =>{
    if(input.value.includes('=')){
        input.value !== 9
    }else{
input.value += 9
    }
})




zero .addEventListener('click', () => {
    if(input.value.includes('=')){
        input.value !== 0
    }else{
input.value += 0
    }
})




plus .addEventListener('click',() =>{
    if(input.value.includes('=') || input.value.includes('+','-','*','/')){
        input.value !== '+'
    }else{
input.value += '+'
    }
})




minus.addEventListener('click',() =>{
    if(input.value.includes('=') || input.value.includes('+','-','*','/')){
        input.value !== '-'
    }else{
input.value += '-'
    }
})




toShare.addEventListener('click', () =>{
    if(input.value.includes('=') || input.value.includes('+','-','*','/')){
        input.value !== '/'
    }else{
input.value += '/'
    }

})




multiply.addEventListener('click',()=>{
    if(input.value.includes('=') || input.value.includes('+','-','*','/')){
        input.value !== '*'
    }else{
input.value += '*'
    }
})




equally .addEventListener('click', () =>{
    if(input.value.includes('=') || input.value == ''){
        input.value !== '='
    }else{
input.value += '='
    }
    if(input.value.includes('+')){
      let result =  input.value.charAt(0) + input.value.charAt(2)
      input.value = result
    }else if(input.value.includes('-')){
     result =  input.value.charAt(+0) - input.value.charAt(+2)
     input.value = result
    }else if(input.value.includes('*')){
     result =   input.value.charAt(0) * input.value.charAt(2)
     input.value = result
    }else if(input.value.includes('/')){
    result =   input.value.charAt(0) / input.value.charAt(2)
        input.value = result
    }
})