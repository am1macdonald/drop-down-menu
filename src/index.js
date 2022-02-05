import "./stylesheets/reset.css"
import "./stylesheets/temp.sass"
import image from "./assets/internet.png"
import { DropDownMenu } from "./classes/dropDown";

let dropDown = document.getElementById('nav-menu');

new DropDownMenu(dropDown);
