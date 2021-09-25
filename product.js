export default class Product {
    constructor(code, name, amount, cost){
       this._code  = code;
       this._name = name.toUpperCase();
       this._amount = amount;
       this._cost = cost;
    }

    //Lectura

    getCode(){
        return Number(this._code);
    }

    getName(){
        return this._name;
    }

    getAmount(){
        return this._amount;
    }

    getCost(){
        return this._cost;
    }

    getTotalCost(){
        return this._amount * this._cost;
    }

    //Escritura

    setCode(code){
        this._code = code;
        return this._code;
    }

    setName(name){
        this._name = name;
        return this._name;
    }

    setAmount(amount){
        this._amount = amount;
        return this._amount;
    }

    setCost(cost){
        this._cost = cost;
        return this._cost;
    }

    infoHtml(){
        return `<div>
                    <p>Código: ${this.getCode()}</p>
                    <p>Nombre: ${this.getName()}</p>
                    <p>Cantidad: ${this.getAmount()}</p>
                    <p>Costo Individual: $${this.getCost()}</p>
                    <p>Costo Total: $${this.getTotalCost()}</p>
                </div>`;
    }
}