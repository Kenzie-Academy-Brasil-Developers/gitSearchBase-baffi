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

const checkInputs = (input) => {

    var filled = true;
    if (input === "") {
        filled = false;
    }
    return filled;

}


const input = () => {
    let input = document.querySelector(".inputHome");
    let button = document.querySelector(".button-section-black");


    input.addEventListener("keyup", function () {
        if (checkInputs(input)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }

    });

}
input()

function button() {
    let button = document.querySelector('.button-section-black')
   
    button.addEventListener('click', (event) => {
        event.preventDefault()
        // window.location.replace('../pages/profile/index.html')

    })
}

button()




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



// fetch("https://api.github.com/users"
// ).then((response) =>  response.json()).then((response) => {
// console.log(response);
// })
  
