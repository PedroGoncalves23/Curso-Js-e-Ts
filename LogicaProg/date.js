const data = new Date();
console.log(data.getDate());
console.log(data.getMonth() + 1); // MÊS COMEÇA DO ZERO
console.log(data.getFullYear());


function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}



function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
}

const dataBr = formataData(data);
console.log(dataBr);