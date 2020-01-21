import './footer.css'

const footer = () => {
    const container = document.getElementById('root')
    let footerDiv = document.createElement('div')
    footerDiv.className = 'footer'
    let footerContent = document.createElement('p')
    footerContent.appendChild(document.createTextNode('Made by Ben Gordon'))
    footerDiv.appendChild(footerContent)
    container.appendChild(footerDiv)
}

export default footer;