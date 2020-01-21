
const contact = () => {

    console.log("rendering container page contents")

    const container = document.getElementById('root')

    let contactDiv = document.createElement('div')
    let contactContent = document.createElement('p')

    contactContent.appendChild(document.createTextNode('Phone: 999-999-9999'))
    contactDiv.appendChild(document.createElement('br'))

    contactContent.appendChild(document.createTextNode('Email: imaginaryRestuarant@imaginary.com'))
    contactDiv.appendChild(document.createElement('br'))

    contactContent.appendChild(document.createTextNode('Address: 1234 Imaginary Drive'))
    contactContent.appendChild(document.createElement('br'))

    contactDiv.appendChild(contactContent)
    container.appendChild(contactDiv)
}

export default contact;