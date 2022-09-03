var inp = document.querySelector('.input')
var list = document.querySelector('.valyuta__list')
var valyuta = document.querySelector('.valyuta')
var javob = document.querySelector('.javob')


var btn = document.querySelector('.button-30')



btn.addEventListener('click' , function (){
    javob.textContent = (Math.round(+inp.value / +list.value) )
})

// var jami = (+inp.value * +list.value)
// console.log(jami)


