import Header from "./Header.js";
import Footer from "./Footer.js";

console.log('Loaded!');

//todo add product wrapper here

const header = new Header("Some Shop");
const footer = new Footer("Valentin & Students @ Beetroot");

document.body.appendChild(header.header());
document.body.appendChild(footer.footer());


