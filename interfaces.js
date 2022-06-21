"use strict";
// interface existe no typescript, não existe no Jvscrpt 
const users = { nome: "matheus fonteles",
    idade: 16 };
function ifOfAge(usuarios) {
    if (usuarios.idade > 18) {
        console.log("Maior de idade");
    }
    else
        console.log("de menor");
}
ifOfAge(users);
