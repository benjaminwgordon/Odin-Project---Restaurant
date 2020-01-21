import './index.css';

import home from './home.js';
import header from './header.js';
import footer from './footer.js';
import contact from './contact.js';
import menu from './menu.js';

let currentTab = menu
const container = document.getElementById('root')


const render = () => {
    clearContents()
    header()
    navBar()
    currentTab()
    footer()
}

const clearContents = () => {
    //clean up container
    container.innerHTML = ""
}

const navBar = () => {
    let navDiv = document.createElement('div')
    navDiv.className = 'navBar'
    navTab(navDiv, home, "home")
    navTab(navDiv, contact, "contact")
    navTab(navDiv, menu, "menu")
}


const navTab = (navDiv, tab, tabName) => {
    let navButton = document.createElement('button')
    navButton.className = 'navButton'
    if (currentTab === tab) {
        navButton.classList.add('active')
    }
    navButton.innerText = tabName
    navButton.addEventListener('click', (event) => {
        currentTab = tab
        render()
    })
    navDiv.appendChild(navButton)
    container.appendChild(navDiv)
}


render()
