import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/product.js";

let renderArea = document.querySelector("#card-area");
const BASE_URL = "http://127.0.0.1:5500/data/products.json";

fetch(BASE_URL).then((res)=> res.json()).then((data)=> {
  data.map(products => {
     renderArea.innerHTML += cardComponent(products);
   })
});
