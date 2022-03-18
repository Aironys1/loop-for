let texto = '';

for(let i=0; i<=10;i++ ) {
    texto = texto + i + '<br/>';
}

document.getElementById('numeros').innerHTML = texto;



let carros = ['Ferrari', 'Fusca','Palio','Corolla','Lamborghini', 'Gol'];

let html = '<ul>';

for (let i in carros) {
    html += '<li>' + carros[i] + '</li>';
}
html += '</ul>';


document.getElementById('frota').innerHTML = html;