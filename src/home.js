
import './home.css'

const home = () => {

    console.log("rendering home page content")

    const container = document.getElementById('root')

    //render home page content

    let navPage = document.createElement('div')
    navPage.className = 'navPage'
    let heroImageDiv = document.createElement('div')
    let heroImage = document.createElement('img')
    heroImage.src = 'http://matuschlpek.com/wp-content/uploads/2015/10/interior1-644x430.jpg'
    heroImageDiv.appendChild(heroImage)
    navPage.appendChild(heroImageDiv)

    let contentDiv = document.createElement('div')
    let content = document.createElement('p')
    content.appendChild(document.createTextNode("My Imaginary Restaurant serves high quality imaginary food for discerning imaginary customers"))
    contentDiv.appendChild(content)
    navPage.appendChild(contentDiv)

    container.appendChild(navPage)

}

export default home; 