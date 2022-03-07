const body = document.querySelector('body');
const contrast = document.querySelector('.contrast');
const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const textTodos = document.querySelectorAll('.todo__content--li');
const ok = document.querySelectorAll('.todo__content-tools-button--ok')


let font = 15
const fontSizeUp = () => {
        if(font>=35) return
    font +=5
    for(textTodo of textTodos )
        textTodo.style.fontSize = font + 'px'
}

const fontSizeDown = () => {
    if(font<=10) return
    font -=5
    for(textTodo of textTodos )
        textTodo.style.fontSize = font + 'px'
}

const done = (e) => {
    e.target.classList.toggle('done')
    e.path[2].classList.toggle('done')

}

const darkMode = () =>{
    if(body.getAttribute("data-mode") === "light"){
        body.setAttribute("data-mode", "dark")
    }else{
        body.setAttribute("data-mode", "light")
    }
}


sizeUp.addEventListener('click', fontSizeUp)
sizeDown.addEventListener('click', fontSizeDown)
ok.forEach(e => e.addEventListener('click', done))
contrast.addEventListener('click', darkMode)