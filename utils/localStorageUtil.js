class localStorageUtil{
    constructor(){
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocatStorage = localStorage.getItem(this.keyName);
        if(productsLocatStorage !== null){
            return JSON.parse(productsLocatStorage);
        }
        return [];
    }
    
    putProducts(id){
    
    }


}




const localStorageUtil = new localStorageUtil();

const a = localStorageUtil.getProducts();

console.log(a);