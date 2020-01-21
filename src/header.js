import './header.css';

const header = () => {
    const container = document.getElementById('root')
    let headerDiv = document.createElement('div')
    headerDiv.className = 'header'
    let headerText = document.createElement('h1')
    headerText.appendChild(document.createTextNode('My Imaginary Restaurant'))
    headerDiv.appendChild(headerText)
    container.appendChild(headerDiv)
}

export default header;