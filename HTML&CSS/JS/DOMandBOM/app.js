//DOM && BOM. DOM - document object model (объектная модель документа)
//BOM - BROWSER OBJECT MODEL (объектная модель браузера)
//host environment (хост окружение)
//window
//alert(), prompt(), confirm() относятся к BOM и никак не связаны с DOM

//свойства BOM:
//location
//navigator
//screen
//history


// let block = document.getElementById("block")
// let getElementsWithClassW = document.getElementsByClassName('w')
//let getElems = document.querySelector("input")
//getElems.value = 'changed input'


//Event - событие
//addEventListener - добавить слушатель события

let getElems1 = document.getElementById('txt')
let getElems2 = document.getElementById('pass')


getElems2.addEventListener('oninput', function(event) {
    console.log('123')
    let tar = event.target.value
    for(let i=0; i < tar.length; i++) {
        console.log(typeof (Number(tar[i])))
        if(typeof(Number(tar[i])) != 'number'){
            console.log('не является числом')
        } else {
            console.log('является числом')
        }
    }
})

