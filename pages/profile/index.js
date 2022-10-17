/* Desenvolva sua lógica aqui...*/

const baseUrl = `https://api.github.com`
const myHeaders = {
    'content-Type': 'aplication/json'
}

const getAllUsers = () => {
    // funcao de requisição
    fetch(`${baseUrl}/users`,{
        method:'GET',
        headers: myHeaders
    })
    .then(res => res.json())
    .then(res => {
        render(res)

        return res
    })
}
getAllUsers()