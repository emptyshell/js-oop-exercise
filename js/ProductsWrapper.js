export default class ProductsWrapper {
    #productList

    constructor(productList) {
        this.#productList = productList;
    }

    listProducts(container) {
        const div = document.createElement('div');
        div.className = "product-wrapper";

        this.#productList.forEach(element => {
            div.appendChild(element.createHTML());
        });

        container.appendChild(div);
    }
}