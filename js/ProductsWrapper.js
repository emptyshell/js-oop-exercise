export default class ProductsWrapper {
    #productList

    constructor(productList) {
        if (productList instanceof List) {
            this.#productList = productList
        }

        throw new Error("A list object type was expected!");
    }

    listProducts() {
        //todo Scrie logica acestei functii
        // trebuie de parcurs lista si de creat instante de obiect care vor fi adaugate la documentul html
    }
}