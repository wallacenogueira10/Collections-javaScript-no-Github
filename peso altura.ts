import PromptSync = require('prompt-sync');
const prompt = PromptSync();

const imc = (peso: number, altura: number) => {
    return peso / (Math.pow(altura, 2));
}

console.log('Digite seu peso: ');
const peso = Number(prompt('>> '));
console.log('Digite sua altura: ');
const altura = Number(prompt('>> '));

const imcResult = imc(peso, altura);

console.log(`Seu IMC é ${Math.round(imcResult)}`);