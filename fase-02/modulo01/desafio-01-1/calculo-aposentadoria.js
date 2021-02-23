const nome = 'Astolfo';
const sexo = 'M';
const idade = 65;
const contribuicao = 45;

const contribuicaoMinimaHomem = 35
const contribuicaoMinimaMulher = 30
const tempoContribuicao = idade + contribuicao;

if (sexo == 'M' && contribuicaoMinimaHomem && tempoContribuicao >= 95 || sexo == 'F' && contribuicaoMinimaMulher && tempoContribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
}