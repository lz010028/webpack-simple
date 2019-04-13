function Number() {
    let div = document.createElement('div')
    div.innerHTML = 200
    div.setAttribute('id', 'number')

    document.body.appendChild(div)
}

export default Number
