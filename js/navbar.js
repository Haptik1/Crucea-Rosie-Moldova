let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"fa-xmark");
    }else {
      searchBox.classList.replace("fa-xmark" ,"bx-search");
    }
  });


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

var element = document.querySelector('#nav-link > a');
var element2 = document.querySelector('#nav-link2 > a');
var element3 = document.querySelector('#nav-link3 > a');
var element4 = document.querySelector('#nav-link4 > a');
element.style.borderRight = "1px solid #2c2a2a";
element.style.borderLeft = "1px solid #2c2a2a";
element2.style.borderRight = "1px solid #2c2a2a";
element3.style.borderRight = "1px solid #2c2a2a";
element4.style.borderRight = "1px solid #2c2a2a";