import './menu.css'

const dishes = [
    'centaur', 'griffin', 'tengu', 'dragon', 'unicorn', 'giant', 'kraken'
]


const menu = () => {

    const container = document.getElementById('root')
    console.log("rendering menu page contents")

    let navPage = document.createElement('div')
    navPage.className = 'navPage'

    let menuDiv = document.createElement('div')
    navPage.appendChild(menuDiv)

    let menuItems = document.createElement('ul')

    dishes.forEach((item) => {
        let menuItem = document.createElement('li')
        menuItem.appendChild(document.createTextNode(item))
        menuItems.appendChild(menuItem)
    })

    container.appendChild(menuItems)
}

export default menu;