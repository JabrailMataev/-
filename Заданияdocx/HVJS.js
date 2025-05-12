//9 ЗАДАНИЕ

//let strg = 'apple and banana'
//
//function stringLength(string){
//for(let i = 0; i < string.length; i++){
//if(string[i] !== ' '){
//   console.log(string[i])
//}
//}
//}
//stringLength(strg)

//12 ЗАДАНИЕ

//let arr = [1,4,8,10,2]
//
//for(let i = 0; i < arr.length; i++){
//if(arr[i] === 10){
//    console.log(arr[i])
//}
//}

//13 ЗАДАНИЕ

//let user = {
//    name: prompt('Введите Имя'),
//    age: +prompt('Введите возраст'),
//    isStudent: 'Является студентом Такого-то Колледжа',
//}
//console.log(user)

//14 ЗАДАНИЕ

//function isAdult(user){
//    if(user >= 18){
//        console.log(true)
//    }else{
//        console.log(false)
//    }
//}
//
//isAdult(+prompt())

//15-16 ЗАДАНИЕ

//let div = document.body.querySelector('div')
//let btn = document.body.querySelector('button')
//let num = 0
//btn.addEventListener('click', () => {
//   console.log(num++)
//div.textContent = 'Теперь такой'
//})

//17 ЗАДАНИЕ

//let span = document.body.querySelector('span')
//
//let input = document.body.querySelector('input')
//
//input.addEventListener('keydown', () => {
//   span.textContent = input.value
//})

//18 ЗАДАНИЕ

//let myPromise = new Promise((resolve, reject) => {
//setTimeout(() => {
//resolve('Привет');
//}, 2000);
//})
//myPromise.then((value) => {
//   console.log(value);
//});

//19 ЗАДАНИЕ  

//function returnResolve() {
//  return new Promise((resolve, reject) => {
//    let arr = [2,4,67,3,2];
//    let evenFound = false;
//    
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 == 0) {
//        evenFound = true;
//        break;
//      }
//    }
//    
//    if (evenFound) {
//      resolve('Чет');
//    } else {
//      reject('Нечет');
//    }
//  });
//}
//returnResolve()
//  .then((value) => {
//    console.log(value); 
//  })
//  .catch((error) => {
//    console.log(error); 
//  });