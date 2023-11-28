import { Sum } from "./example";
import * as styles from "../asset/styles/index.module.scss";
// import image from "../asset/img/largeImage.jpg";


console.log(Sum(3,2));
const root= window.document.getElementById("root");
const div= document.createElement("div");
div.className=styles.example;
root?.appendChild(div);
const img=document.createElement("img");
const image = new URL("../asset/img/largeImage.jpg?width=200", import.meta.url);
img.src=image.toString();
img.alt=" free background photos from pngtree.com";
root?.appendChild(img);

