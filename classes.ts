// assim os dados estão publicos, porém a gente pode avisar que eles são private

class movie {
    nome: string;
    custo: number;

    constructor(nome: string, custo: number){
        this.nome = nome;
        this.custo= custo;
    }

}

const filme = new movie('A volta dos que não foram', 2000)

console.log(filme)