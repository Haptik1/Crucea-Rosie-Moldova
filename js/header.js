let navLink1 = document.querySelector(".link-1");
let navLink2 = document.querySelector(".link-2");
let navLink3 = document.querySelector(".link-3");
let navLink4 = document.querySelector(".link-4");

let hArrow = document.querySelector(".link-1");
hArrow.onclick = function() {
 navLink1.classList.toggle("show1");
}

let cfArrow = document.querySelector(".link-2");
cfArrow.onclick = function() {
 navLink2.classList.toggle("show2");
}

let ungArrow = document.querySelector(".link-3");
ungArrow.onclick = function() {
 navLink3.classList.toggle("show3");
}

let mArrow = document.querySelector(".link-4");
mArrow.onclick = function() {
 navLink4.classList.toggle("show4");
}