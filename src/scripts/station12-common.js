import { getData } from "./station12.js";
var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;