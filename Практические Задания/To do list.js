let parent = document.body.querySelector('ul')
let pole = document.body.querySelector('#pole')
let add = document.body.querySelector('#add')
let err = document.body.querySelector('p')
add.addEventListener('click', () => {
    let child = document.createElement('li')
    let deleteButton = document.createElement('a')
    let check = document.createElement('a')
    check.textContent = 'O '
    deleteButton.textContent = ' удалить'

    if(pole.value === ''){
        err.textContent = 'Error'
    }else{
     err.textContent = ''
    child.append(check, pole.value, deleteButton)
    parent.append(child)
    }

    check.style.setProperty('color', 'white')
deleteButton.style.setProperty('color', 'white')
    child.style.setProperty('margin-top', '10px')
    child.style.setProperty('background-color', 'black')
    child.style.setProperty('border','10px solid lime')
    child.style.setProperty('width', '14%')
    child.style.setProperty('color', 'white')
    child.style.setProperty('font-weight', '50px')



check.addEventListener('click', () => {
 child.style.setProperty('text-decoration', 'line-through')

check.style.setProperty('color', 'black')

deleteButton.style.setProperty('color', 'black')

child.style.setProperty('border','10px solid red')

child.style.setProperty('margin-top', '10px')

child.style.setProperty('background-color', 'white')

child.style.setProperty('width', '14%')

child.style.setProperty('color', 'gray')

child.style.setProperty('font-weight', '50px')

 check.remove()
})



    deleteButton.addEventListener('click', () => {
        child.remove()
    })
    pole.value = '' 
})