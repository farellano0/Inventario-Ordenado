import Inventory from "./inventory.js";
import Product from "./product.js";

class App {
    constructor(){
        this.inventory = new Inventory();
        this.btnAdd = document.getElementById('btnRegister');
        this.btnDlt = document.getElementById('bntDelete');
        this.btnSrch = document.getElementById('bntSrch');
        this.btnList = document.getElementById('btnList');
        this.btnListInver = document.getElementById('btnListInverse');
        this.btnInsert = document.getElementById('btnInsert');

        this.actions = document.getElementById('actions')

        this.btnAdd.addEventListener('click', this.addProduct)
    }

    addProduct = () => {
        let product = this._createProduct();

        if(!product){
            this.actions.innerHTML = "";
            return this.actions.innerHTML += 'No se registró el producto. Todos los campos son requeridos.';
        }

        let added = this.inventory.add(product);
        console.log(added);

        if(!added){
            this.actions.innerHTML = "";
            return this.actions.innerHTML = "No se registró el producto. Producto ya Registrado.";
        } 
        
        this.actions.innerHTML = "";
        return this.actions.innerHTML = `Se agrego nuevo producto. El producto ${product.getCode()} fue registrado con éxito.`;
    }

    //Private

    _createProduct(){
        let inpCode = document.querySelector('#txtCode');
        let inpName = document.querySelector('#txtName');
        let inpAmount = document.querySelector('#txtAmount');
        let inpCost = document.querySelector('#txtCost');

        let code = inpCode.value;
        let name = inpName.value;
        let amount = inpAmount.value;
        let cost = inpCost.value;

        if(code && name && amount && cost){
            inpCode.value = '';
            inpName.value = '';
            inpAmount.value = '';
            inpCost.value = '';

            return new Product(code, name, amount, cost);
        }

        return false;
    }

}

new App();
