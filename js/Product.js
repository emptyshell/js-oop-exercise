export default class Product {
    //todo add all required logic in here
    #title;
    #description;
    #images;
    #brand
    #category

    constructor(title, description, images, brand, category) {
        this.#title = title;
        this.#description = description;
        this.#images = images;
        this.#brand = brand;
        this.#category = category;
    }

    createHTML() {
        //todo add style later
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('h5');
        const brand = document.createElement('p');
        const category = document.createElement('p');
        const img = document.createElement('img');

        title.innerText = this.#title
        description.innerText = this.#description
        brand.innerText = this.#brand
        category.innerText = this.#category
        img.src = this.#images

        this.#appendHTMLElement(div, title);
        this.#appendHTMLElement(div, description);
        this.#appendHTMLElement(div, brand);
        this.#appendHTMLElement(div, category);
        this.#appendHTMLElement(div, img);
        return div;
    }

    #appendHTMLElement(element, toAppend) {
        element.appendChild(toAppend);
    }

}