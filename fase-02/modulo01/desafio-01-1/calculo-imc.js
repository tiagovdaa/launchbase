const nome = 'Tiago';
const peso = 110;
const altura = 1.78;
const sexo = 'M';

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`);
} else {
    console.log(`${nome} você não está acima do peso`);
}