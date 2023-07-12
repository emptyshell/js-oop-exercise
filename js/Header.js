export default class Header {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    header() {
        const header = document.createElement('header');
        header.className = "header";
        const h1 = document.createElement('h1');
        h1.innerText = this.#name;
        header.appendChild(h1);

        return header;
    }
}