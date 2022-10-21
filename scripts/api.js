import { render} from '../pages/profile/render.js'


let prefile = sessionStorage.getItem('prefile')





export async function getUser(name) {
  const userGet = sessionStorage.getItem('prefile')


  const baseUrl = `https://api.github.com`
  const myHeaders = {
      'content-Type': 'aplication/json'
  }
  // funcao de requisição
  const user = await fetch(`${baseUrl}/users/${name}`, {
      method: 'GET',
      headers: myHeaders
  })
      .then(res => res.json())
      .then(res => {
          console.log(res);

          if (userGet) {
              sessionStorage.removeItem('prefile')
              sessionStorage.setItem('prefile' , name)
          }else {
              sessionStorage.setItem('prefile' , name) 
          }

      })
}

export const user = () => {

  const baseUrl = `https://api.github.com`
  const myHeaders = {
    'content-Type': 'aplication/json'
  }
  console.log(prefile);
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





export async function getRepo(prefile) {

  const baseUrl = `https://api.github.com`
  const myHeaders = {
    'content-Type': 'aplication/json'
  }

  // funcao de requisição
  const data = await fetch(`${baseUrl}/users/${prefile}/repos`, {
    method: 'GET',
    headers: myHeaders
  })
    .then(res => res.json())
    .then(res => {
      renderRepo(res)

      console.log(res);
    

    })
 
}
