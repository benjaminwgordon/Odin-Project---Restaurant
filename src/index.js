
import home from './home.js';
import header from './header.js';
import footer from './footer.js';
import navBar from './navBar.js';
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
    while (container.firstChild) {
        container.remove(container.firstChild)
    }
}

render()
