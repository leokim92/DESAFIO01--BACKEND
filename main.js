class ProductManager {
    static ultId = 0;


    constructor () {
        this.products = [];
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("All field are mandatory");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("The code can't be the same");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(newProduct)
    }

    getProduct() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);
        if (!product) {
            return "Not Found";
        } 
        return product;
    }
}

//TESTING
//1- 
const manager = new ProductManager();

//2-
console.log(manager.getProduct());

//3-
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProduct("Test Product", "this is a test product", 350, "no img", "abc123", 11);
console.log(manager.getProduct());

//4-
manager.addProduct("Pan", "Pasta", 230, "no img", "advx412", 32);
manager.addProduct("Meat", "Cow", 1150, "no img", "poctr23AS!!", 440);

//5-
console.log(manager.getProduct());

//6-
manager.addProduct("Meat", "Cow", 1150, "no img", "poctr23AS!!", 440);

//7-
console.log("Searching product by Id: ");
console.log(manager.getProductById(2));