
// Protegendo o calculo do escopo global com uma função
function calculoCpf() {

    // Cpf ficticio aleatório
    let cpfInteiro = '705.484.450-52';
    let cpfLimpo = cpfInteiro.replace(/\D+/g, ''); // esse é um método que tira tudo que não for um número vai ser substituido por... (nada)
    let cpfCortado = cpfLimpo.slice(0, -2);

    // Converter a string num array de números
    let cpfArray = Array.from(cpfCortado).map(Number);

    //Multiplicador do primeiro digito começando do 0
    let multiplicador = 10;
    //Salvando os resultados num array vazio
    let resultados = [];

    // Cálculo de cada array do CPF
    for (let i = 0; i < cpfArray.length; i++) {
        let resultado = cpfArray[i] * (multiplicador - i);
        resultados.push(resultado);
    }

    // Soma dos resultados
    let soma = resultados.reduce((ac, val) => ac + val, 0); // aqui pegamos o valor de cada array do cpf mais o acumulador

    // Realiza a conta do governo
    let digitoVerificador1 = (11 - (soma % 11)) % 11;

    if (digitoVerificador1 > 9) {
        digitoVerificador1 = 0;
    }

    const cpfdigito1 = cpfCortado + digitoVerificador1;

    // Primeiro digito descoberto... agora vamos pegar o segundo digito

    let cpfArray2 = Array.from(cpfdigito1).map(Number);

    let multiplicador2 = 11;
    let resultados2 = [];

    // Cálculo de cada array do CPF
    for (let i = 0; i < cpfArray2.length; i++) {
        let resultado2 = cpfArray2[i] * (multiplicador2 - i);
        resultados2.push(resultado2);
    }

    // Soma dos valores
    let soma2 = resultados2.reduce((ac, val) => ac + val, 0);

    let digitoVerificador2 = (11 - (soma2 % 11)) % 11;

    if (digitoVerificador2 > 9) {
        digitoVerificador2 = 0;
    }

    const cpfdigito2 = cpfdigito1 + digitoVerificador2;

    //Formatando as pontuações do CPF
    const cpfGeradoFormatado = `${cpfdigito2.slice(0, 3)}.${cpfdigito2.slice(3, 6)}.${cpfdigito2.slice(6, 9)}-${cpfdigito2.slice(9, 11)}`;

    //Condição para comparar o CPF original com o da conta que realizamos
    if (cpfLimpo === cpfdigito2) {
        console.log(`O CPF: ${cpfGeradoFormatado} é válido :`, true);
    } else {
        console.log(`O CPF: ${cpfGeradoFormatado} não é válido :`, false);
    }
};

calculoCpf();