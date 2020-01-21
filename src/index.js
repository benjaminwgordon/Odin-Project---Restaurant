import home from './home.js';
import header from './header.js';
import footer from './footer.js';
import contact from './contact.js';

let currentTab = home

const render = () => {
    clearContents()
    header()
    navBar()
    currentTab()
    footer()
}

const clearContents = () => {
    //clean up container
    const container = document.getElementById('root')
    container.innerHTML = ""
}

const navBar = () => {
    const container = document.getElementById('root')
    let navDiv = document.createElement('div')

    let homeButton = document.createElement('button')
    homeButton.innerHTML = 'Home'
    homeButton.addEventListener('click', (event) => {
        currentTab = home
        render()
    })
    navDiv.appendChild(homeButton)

    let contactButton = document.createElement('button')
    contactButton.innerText = 'Contact'
    contactButton.addEventListener('click', (event) => {
        currentTab = contact
        render()
    })
    navDiv.appendChild(contactButton)
    container.appendChild(navDiv)
}



render()
