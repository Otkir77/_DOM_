let text = document.querySelector('.random_num')
let body = document.querySelector('body')
let randomNum = Math.floor(Math.random() * 100)

text.innerHTML = randomNum

body.style.background = "black"
text.style.color = "red"
text.style.textAlign = "center"
text.style.fontSize = "86px"
text.style.fontWeight = "900px"
text.style.marginTop = "300px"