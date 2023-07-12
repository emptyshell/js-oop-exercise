import Header from "./Header.js";
import Footer from "./Footer.js";
import Product from "./Product.js";
import ProductsWrapper from "./ProductsWrapper.js";

console.log('Loaded!');


//todo create a product list fetch products from https://dummyjson.com/products
async function getProducts() {
    try {
        const products = await fetch("https://dummyjson.com/products");
        const productsJSON = await products.json();

        if(productsJSON && productsJSON.products) {
            const productList = new Array();
            productsJSON.products.forEach(element => {
                const product = new Product(
                    element.title,
                    element.description,
                    element.images[0],
                    element.brand,
                    element.category,
                );
                productList.push(product);
            });

            const wrapper = new ProductsWrapper(productList);
            wrapper.listProducts(document.getElementById('container'));
        }
    } catch (error) {
        throw error;
    }
}

//todo add product wrapper here

const header = new Header("Some Shop");
const footer = new Footer("Valentin & Students @ Beetroot");
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(header.header());
document.body.appendChild(container);
document.body.appendChild(footer.footer());

getProducts();