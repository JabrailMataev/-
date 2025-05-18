//*document - точка входа в объектную модель документа (DOM)
console.log(document)

//Дерево DOM выглядет так начиная с корневого узла document: document -> <html> -> <body> -> остальное содержимое <body> (смотрите картинку DOM дерево в папке проекта)
document.documentElement //узел тега <html>
document.body //узел тега <body>
document.head //узел тега <head>

//childNodes или children - прямые дети родителя, например document.body - ребенок document.head
//Потомки - все элементы вложенные в данный элемент, включая детей, и их детей и т.д.

//********* УЗЛЫ ДОКУМЕНТА (ВКЛЮЧАЯ ПРОБЕЛЫ, ТАБУЛЯЦИИ, ТЕКСТ) ************/
//childNodes - коллекция узлов, которая выводит список всех узлов, включая текстовые узлы документа. Например:
console.log('Все узлы документа ' + document.body.childNodes)

//firstChild - возвращает первого ребенка данного узла
console.log('Первый ребенок ' + document.body.firstChild)

//lastChild - возвращает последнего ребенка данного узла
console.log('Последний ребенок ' + document.body.lastChild)

//elem.hasChildNodes() - метод позволяющий проверить наличие узлов в данном элементе
console.log('В body есть следующие элементы ' + document.body.hasChildNodes())

//childNodes возвращает массивоподоюный объект, к которому применимы циклы for и for...of
let allBodyNodes = document.body.childNodes //получаем все узлы тега <body>
for(node of allBodyNodes) {
    console.log(node) //выводим в консоль каждый узел
}

//siblings - это узлы-дети одного и того же родителя. В нашем html документе: верхнеуровневые теги <div>, <footer>, <ul>
let list = document.getElementById('list')
console.log(list.nextSibling) //возвращает следующего (правого) брата
console.log(list.previousSibling) //возвращает предыдущего (левого) брата
//Обратите внимание! Если узла не существует, то JavaScript вернет значение null. В конексте DOM значение null означает отсутствие узла в документе

//parentNode - возвращает родителя данного элемента
console.log(list.parentNode)

//********* УЗЛЫ ЭЛЕМЕНТОВ ДОКУМЕНТА (ТОЛЬКО ТЕ, ЧТО ЯВЛЯЮТСЯ ТЕГАМИ). ************/
//Добавялется слово Element
console.log(document.body.children) //Тоже что и childNodes, только в этом случае возвращаются только теги-узлы входящие в узел <body>
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
console.log(document.body.previousElementSibling)
console.log(document.body.nextElementSibling)
console.log(document.body.parentElement) //возвращает только родителя-элемента (тег), а parentNode возвращает родителя в виде любого узла


