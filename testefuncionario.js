"use strict";
const funcionarios = [{
        nome: "Matheus Fonteles", profissao: "Dev", salario: 8000
    }, {
        nome: "Matheus Fonteles", profissao: "Senior", salario: 8000
    }, {
        nome: "Matheus Fonteles", profissao: "junior", salario: 8000
    }
];
function verProfissao(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log('profissão do funcionário: ' + funcionario.profissao);
    }
}
;
verProfissao(funcionarios);
