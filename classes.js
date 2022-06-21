"use strict";
// assim os dados estão publicos, porém a gente pode avisar que eles são private
class movie {
    constructor(nome, custo) {
        this.nome = nome;
        this.custo = custo;
    }
}
const filme = new movie('A volta dos que não foram', 2000);
console.log(filme);
