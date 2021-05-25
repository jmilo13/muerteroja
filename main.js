const previous = document.querySelector('.next')
const container = document.querySelector('.container')

function nextElement () {
    console.log('boton next')
    container.scrollTo((container.scrollLeft + 280), 0)
}

function prevElement () {
    console.log('boton prev')
    container.scrollTo((container.scrollLeft - 280), 0)
}

window.addEventListener('keydown', (e) => {
    console.log(e)
    if(e.key==="ArrowRight"){
        nextElement()
    }
    else if(e.key==="ArrowLeft"){
        prevElement()
    }
    })
// (container.scrollLeft + 20)