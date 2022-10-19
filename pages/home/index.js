// ********************logica buscar usuario no input***************


function button() {
    let button = document.querySelector('.button-section-black')

    button.addEventListener('click', (event) => {
        event.preventDefault()

        const name = document.querySelector('.inputHome')
        const value = name.value
        getUser(value)
        window.location.replace('../../pages/profile/index.html')

    })
}

button()



async function getUser(name) {

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
            console.log(name);
            localStorage.setItem('prefile', name)
         
            
        })
}






// *****************spinner**********************

function search() {
    const button = document.querySelector('.button-section-black')

    button.addEventListener('click', () => {
        button.innerHTML = ''

        const img = document.createElement('img')
        img.src = '../../assets/spinner.svg'
        img.alt = 'spinner'
        img.classList.add('loading');

        button.appendChild(img)

        getGit(button)

    })
}

const getGit = (button) => {

    const git = fetch('https://api.github.com', {
        method: 'GET',
        headers: {
            "content-type": 'aplication/json'
        }
    })
        .then(res => res.json)
        .then(res => {
            button.innerHTML = ''
            button.innerText = 'Ver perfil no Github'

            console.log(res);
        })
    return git
}

search()





/* Desenvolva sua lógica aqui...*/
// const inputHover = () => {
//     const input = document.querySelector('.inputHome')
//     const button = document.querySelector('.button-section-black')
//     console.log(button);
//     input.addEventListener('click', (event) => {
//         event.preventDefault()

//         checkInputs()
//     })
// }
// inputHover()


// // ***********ativar input **************

// const checkInputs = (input) => {

//     var filled = true;
//     if (input === "") {
//         filled = false;
//     }
//     return filled;
// }


// const input = () => {
//     let input = document.querySelector(".inputHome");
//     let button = document.querySelector(".button-section-black");


//     input.addEventListener("keyup", function () {
//         if (checkInputs(input)) {
//             button.disabled = false;
//         } else {
//             button.disabled = true;
//         }

//     });

// }
// input()
