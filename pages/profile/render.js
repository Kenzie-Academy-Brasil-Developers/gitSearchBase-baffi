

function render(arr) {
    const header = document.querySelector('.header-render')
  
  
  
    arr.forEach(elt => {
      const card = creatCard(elt)
  
    //   header.appendChild(card)
    })
  }




const creatCard = (elm) => {


const divPrefile = document.createElement('div')
const div = document.createElement('div')
const img = document.createElement('img')
const divInfo = document.createElement('div')
const h3 = document.createElement('h3')
const span = document.createElement('li')
const divButton = document.createElement('div')
const buttonEmail = document.createElement('button')
const buttonUsuario = document.createElement('button')

divPrefile.classList.add('div-prefile')
img.src = elm.avatar_url
divInfo.classList.add('div-info-prefile')
h3.innerText = elm.login
span.classList.add('span-prefile')
span.innerText = elm.node_id
divButton.classList.add('div-button-prefile')
buttonEmail.classList.add('button-email')
buttonEmail.innerText = elm.html_url
buttonUsuario.classList.add('button-usuario')
buttonUsuario.innerText = 'Trocar de usuario'


divInfo.append(h3, span)
div.append(img, divInfo)
divButton.append(buttonEmail, buttonUsuario)
divPrefile.append(div, divButton )

return divPrefile

}