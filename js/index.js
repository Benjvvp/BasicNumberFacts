let facts = document.getElementById('facts')
let factT = document.getElementById('fact')
let numberi = document.getElementById('numberInput')

numberi.addEventListener('input', getFact)

function getFact() {
    let number = numberi.value;

    fetch('http://numbersapi.com/'+ number)
    .then(response => response.text())
    .then(data => {
        if(number != ''){
            factT.innerText = data;
        }
    })
    .catch(err => console.log(err));
}