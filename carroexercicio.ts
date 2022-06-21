class carro{
velocidadeAtual:number = 0;
    
    constructor(public nome: string, private velocidadeMax: number) {
    }

    acelerar(){
        if(this.velocidadeAtual <= this.velocidadeMax){
            const aceleracao = 5;
            this.velocidadeAtual += aceleracao;
            console.log("vrumvrum, a velocidade atual é: " + this.velocidadeAtual);}
        
    }

    frenar(){
        if(this.velocidadeAtual <= this.velocidadeMax) {
            const frenagem = 5;
            this.velocidadeAtual -= frenagem;
            console.log("derrapada doida, quase bateu, a velocidade atual é : " + this.velocidadeAtual);
            
        }
    }
}

const newCar = new carro ("veloster", 230)

newCar.acelerar()
newCar.acelerar()
newCar.acelerar()
newCar.frenar()

//carro.velocidadeMax = 250              -> Não pode mais alterar o valor de 230kmH que foi setado ao veloster, pois a velocidadeMax é private 
//HERANÇA 

class camaro extends carro{

    constructor() {
        super('Camaro' , 300)
    }
}

const Camaro = new camaro();

Camaro.acelerar();
Camaro.acelerar()
