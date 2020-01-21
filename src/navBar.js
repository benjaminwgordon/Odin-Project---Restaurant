
const navBar = () => {
    const container = document.getElementById('root')
    let navDiv = document.createElement('div')

    let homeButton = document.createElement('button')
    homeButton.innerHTML = 'Home'
    homeButton.onclick = () => {
        currentTab = home
        render()
    }
    navDiv.appendChild(homeButton)

    let contactButton = document.createElement('button')
    contactButton.innerHTML = 'Contact'
    contactButton.onclick = () => {
        currentTab = contact
        render()
    }
    navDiv.appendChild(contactButton)
    container.appendChild(navDiv)
}

export default navBar;
