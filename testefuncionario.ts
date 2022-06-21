//Type Alias
type funcionario = {
nome:string; 
profissao:string;
 salario:number;
}
const funcionarios: funcionario[] = [{
    nome: "Matheus Fonteles", profissao: "Dev", salario: 8000 
}, {
    nome: "Matheus Fonteles", profissao: "Senior", salario: 8000 
}, {
    nome: "Matheus Fonteles", profissao: "junior", salario: 8000 
}
];

function verProfissao(funcionarios: funcionario[]) {
    for(let funcionario of funcionarios){
        console.log('profissão do funcionário: ' + funcionario.profissao)
    }
   
};
verProfissao(funcionarios)

