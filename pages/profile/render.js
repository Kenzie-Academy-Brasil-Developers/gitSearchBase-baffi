
const prefile = localStorage.getItem('prefile')


const getUser = () => {

  const baseUrl = `https://api.github.com`
  const myHeaders = {
    'content-Type': 'aplication/json'
  }
  
  // funcao de requisição
  fetch(`${baseUrl}/users/${prefile}`, {
    method: 'GET',
    headers: myHeaders
  })
    .then(res => res.json())
    .then(res => {
      render(res)
      console.log(res);
     
    })
}
getUser()



function render(elt) {
  const header = document.querySelector('.header-render')  
    const card = creatPrefile(elt)
    header.appendChild(card)

}

const creatPrefile = (elm) => {

  const divPrefile = document.createElement('div')
  const div = document.createElement('div')
  const img = document.createElement('img')
  const divInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const span = document.createElement('span')
  const divButton = document.createElement('div')
  const buttonEmail = document.createElement('button')
  const buttonUsuario = document.createElement('button')

  divPrefile.classList.add('div-prefile')
  img.src = elm.avatar_url
  divInfo.classList.add('div-info-prefile')
  h3.innerText = elm.login
  span.classList.add('span-prefile')
  span.innerText = elm.bio
  divButton.classList.add('div-button-prefile')
  buttonEmail.classList.add('button-email')
  buttonEmail.innerText = elm.email
  buttonUsuario.classList.add('button-usuario')
  buttonUsuario.innerText = 'Trocar de usuario'


  divInfo.append(h3, span)
  div.append(img, divInfo)
  divButton.append(buttonEmail, buttonUsuario)
  divPrefile.append(div, divButton)

  return divPrefile

}




// **************requisicao repositorio*****************


const getRepo = () => {

  const baseUrl = `https://api.github.com/users/users/`
  const myHeaders = {
    'content-Type': 'aplication/json'
  }
  
  // funcao de requisição
  fetch(`${baseUrl}/repos`, {
    method: 'GET',
    headers: myHeaders
  })
    .then(res => res.json())
    .then(res => {
  
      //  
      // console.log(res);
      // return res
    })
}
getRepo()



function renderRepo(arr) {
  const ul = document.querySelector('.list-card')

  arr.forEach(elt => {
    const card = creatRepo(elt)

    ul.appendChild(card)
  })
}

const creatRepo = (elm) => {

  const liCard = document.createElement('li')
  const divCard = document.createElement('div')
  const divInfo = document.createElement('div') 
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  const divButtonCard = document.createElement('div')
  const buttonRepo = document.createElement('button')
  const buttonDemo = document.createElement('button')

  liCard.classList.add('div-cards')
  divCard.classList.add('div-cards-two')
  divInfo.classList.add('div-info-cards')
  h3.innerText = elm
  p.innerText = elm
  divButtonCard.classList.add = ('div-button-cards')
  buttonRepo.classList.add('button-repositorio')
  buttonDemo.classList.add('button-demo')
  

  divInfo.append(h3, p)
  divButtonCard.append(buttonRepo, buttonDemo)
  divCard.append(divInfo, divButtonCard)
  li.append(divCard)

  return li

}
