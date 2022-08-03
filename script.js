button = document.getElementById('bt')

button.onclick = () => {
    input = document.getElementById('value')
    value = input.value
    value.replace(',', '.')
    value = Number(value)

    value = value + (value * 0.6)
    value = Math.round(value)
    value = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    
    div = document.getElementById('cont')
    console.log(div);

    div.innerText = `Valor do produto = ${value}`
}