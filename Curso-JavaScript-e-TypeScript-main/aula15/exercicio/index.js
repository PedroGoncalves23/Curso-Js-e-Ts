const n1 = Number(prompt("Digite um número:"))


document.body.innerHTML += `<h1>Seu número é ${n1}</h1>`

document.body.innerHTML += `<p>Raiz quadrada: ${n1 ** 0.5} </p>`

document.body.innerHTML += `<p>É NaN? ${Number.isNaN(n1)} </p>`

document.body.innerHTML += `<p>${Number.isInteger(n1)} </p>`

document.body.innerHTML += `<p>Arredondando para baixo: ${Math.floor(n1)} </p>`

document.body.innerHTML += `<p>Arredondando para cima: ${Math.ceil(n1)} </p>`

document.body.innerHTML += `<p>Com duas casas decimais: ${n1.toFixed(2)}</p>`




