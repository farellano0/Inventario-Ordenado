export default class Inventory {
    constructor(){
        this._inventory = new Array();
    }

    add(product){
        let code = product.getCode();
        console.log(code);
        let pos = this._findProductByCode(code);
        console.log(pos);
        

        if(pos >= 0){
            return false;
        } else {
            if(this._inventory.length < 20){
                this._inventory.push(product)
                return true;
            } else {
                return false;
            }
        }
    }

    delete(code){
        let pos = this._findProductByCode(code);
        
        if(pos < 0){
            return false;
        } else {
            for(let i = pos; i < this._inventory.length-1; i++){
                this._inventory[i] = this._inventory[i + 1]
            }
            this._inventory.pop()

            return true;
        }
    }

    search(code){
        let pos = this._findProductByCode(code);
        console.log(pos);

        if(pos < 0){
            return false;
        } else {
            return this._inventory[pos].infoHtml()
        }
    }

    //Clases privadas

    _findProductByCode(code){
        let pos = this._inventory.findIndex((product) => {
            if(product.getCode() == code){
                return true;
            }
            return null;
        })

        return pos;
    }

    _organizeArrayById(){

        for(let i=0; i<this._inventory.length; i++){
            for(let j=i+1; j<this._inventory.length; j++){
                if(this._inventory[i].getCode()>this._inventory[j].getCode()){
                    var x=this._inventory[i];
                    this._inventory[i]=this._inventory[j];
                    this._inventory[j]=x;
                }
            }
        }
        return this._inventory;
    }    
}