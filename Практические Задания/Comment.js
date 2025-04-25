let buttonGet = document.body.querySelector('button')
let divHead = document.body.querySelector('#head')
let in1 = document.body.querySelector('#input1')
let in2 = document.body.querySelector('#input2')
let par = document.body.querySelector('#one')

buttonGet.addEventListener('click', function(){

if(buttonGet && in1.value && in2.value){
  divHead.textContent = 'Дата: ** ** 20**' + ' ' + 'Name:' + ' ' + in1.value + ' ' + 'Comment:' + ' ' + '' + in2.value;

  in1.value = ''
  in2.value = ''
}


})