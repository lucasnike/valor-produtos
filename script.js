button = document.getElementById('bt')

button.onclick = () => {
    input = document.getElementById('value')
    let value = input.value
    value.replace(',', '.')
    value = Number(value)

    value = value + (value * 0.6)

    let valueRounded = Math.round(value)
    value = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    valueRounded = valueRounded.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    console.log(value, valueRounded)
    
    div = document.getElementsByClassName('price')

    div[0].innerHTML = `valor exato: <span>${value}</span>`
    div[1].innerHTML = `valor inteiro: <span>${valueRounded}</span>`

    console.log(div[0].innerHTML);
}