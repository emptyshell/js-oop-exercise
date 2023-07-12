export default class Footer {
    #copyright;

    constructor(copyright) {
        this.#copyright = copyright;
    }

    get copyright() {
        return this.#copyright;
    }

    footer() {
        const footer = document.createElement("footer");
        const p = document.createElement("p");

        p.innerText = this.#copyright;

        footer.className = "footer";
        footer.appendChild(p);

        return footer;
    }
}