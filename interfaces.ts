// interface existe no typescript, não existe no Jvscrpt 

// o código de interface é interface user {aqui recebe como objeto }

interface user {
    nome: string;
    idade: number;
    negro?: boolean;
}

const users: user = {nome: "matheus fonteles",
idade: 16}

    function ifOfAge(usuarios: user){
        if(usuarios.idade > 18){
            console.log("Maior de idade")
        }
        else console.log("de menor");
        
    }



    ifOfAge(users)
