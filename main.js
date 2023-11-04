export function Bissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}


const ano = 2020;
Bissexto(ano) ? console.log(`${ano} é um ano bissexto.`) : console.log(`${ano} não é um ano bissexto.`)





