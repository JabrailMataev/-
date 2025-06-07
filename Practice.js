let btn = document.body.querySelector('button')
let father = document.body.querySelector('div')
let p = document.createElement('p')
  p.textContent = 'Товар Приобретен!'
  p.className = 'poped'

btn.addEventListener('click', ()=>{
  father.append(p)

  p.addEventListener('click', ()=>{
  p.remove()
  del.remove()
})
})

