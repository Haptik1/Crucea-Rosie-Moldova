var elem = document.querySelector('#nav-links > ul');
var element = document.querySelector('#nav-link > a');
var element2 = document.querySelector('#nav-link2 > a');
var element3 = document.querySelector('#nav-link3 > a');
var element4 = document.querySelector('#nav-link4 > a');
var search = document.querySelector('#search-box > i');


function myFunction(x) {
    if (x.matches) { 
        window.onscroll = function() {scrollFunction()};
        document.getElementById("logo").style.display = "block";
        document.getElementById("banner-area").style.display = "block";
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("hero-image").style.marginTop = "100px";
        elem.style.top = "52px"
        elem.style.left = "150px"
        document.getElementById("list").style.height = "48px";
        element.style.lineHeight = "48px"
        element2.style.lineHeight = "48px"
        element3.style.lineHeight = "48px"
        element4.style.lineHeight = "48px"
        element.style.fontSize = "15px"
        element2.style.fontSize = "15px"
        element3.style.fontSize = "15px"
        element4.style.fontSize = "15px"
        element.style.borderRight = "0"
        element.style.borderLeft = "0"
        element2.style.borderRight = "0"
        element3.style.borderRight = "0"
        element4.style.borderRight = "0"
        document.getElementById("search-box").style.marginTop = "60px";
        search.style.fontSize = "22px"
        search.style.borderRight = "0"
        search.style.borderLeft = "0"
        search.style.height = "100%"
        search.style.lineHeight = "40px"
    } else {
        window.onscroll = function() {};
        document.getElementById("logo").style.display = "none";
        document.getElementById("banner-area").style.display = "none";
        document.getElementById("navbar").style.height = "70px";
        document.getElementById("hero-image").style.marginTop = "70px";
        element.style.lineHeight = "initial"
        element2.style.lineHeight = "initial"
        element3.style.lineHeight = "initial"
        element4.style.lineHeight = "initial"
        element.style.fontSize = "18px"
        element2.style.fontSize = "18px"
        element3.style.fontSize = "18px"
        element4.style.fontSize = "18px"
        element.style.borderRight = "1px solid #2c2a2a"
        element.style.borderLeft = "1px solid #2c2a2a"
        element2.style.borderRight = "1px solid #2c2a2a"
        element3.style.borderRight = "1px solid #2c2a2a"
        element4.style.borderRight = "1px solid #2c2a2a"
        document.getElementById("search-box").style.marginTop = "initial";
        search.style.fontSize = "27px"
        search.style.borderRight = "0"
        search.style.borderLeft = "0"
        search.style.height = "initial"
        search.style.lineHeight = "70px"
        
    }
  }
  
  var x = window.matchMedia("(min-width: 1201px)")
  myFunction(x) 
  x.addListener(myFunction) 

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.display = "none";
      document.getElementById("banner-area").style.display = "none";
      document.getElementById("navbar").style.height = "70px";
      elem.style.top = "initial"
      elem.style.left = "initial"
      document.getElementById("list").style.height = "70px";
      element.style.lineHeight = "70px"
      element2.style.lineHeight = "70px"
      element3.style.lineHeight = "70px"
      element4.style.lineHeight = "70px"
      element.style.fontSize = "18px"
      element2.style.fontSize = "18px"
      element3.style.fontSize = "18px"
      element4.style.fontSize = "18px"
      element.style.borderRight = "1px solid #2c2a2a"
      element.style.borderLeft = "1px solid #2c2a2a"
      element2.style.borderRight = "1px solid #2c2a2a"
      element3.style.borderRight = "1px solid #2c2a2a"
      element4.style.borderRight = "1px solid #2c2a2a"
      document.getElementById("search-box").style.marginTop = "initial";
      search.style.fontSize = "27px"
      search.style.borderRight = "1px solid #2c2a2a"
      search.style.borderLeft = "1px solid #2c2a2a"
      search.style.height = "initial"
      search.style.lineHeight = "70px"
    } else {
      document.getElementById("logo").style.display = "block";
      document.getElementById("banner-area").style.display = "block";
      document.getElementById("navbar").style.height = "100px";
      elem.style.top = "52px";
      elem.style.left = "150px";
      document.getElementById("list").style.height = "48px";
      element.style.lineHeight = "48px"
      element2.style.lineHeight = "48px"
      element3.style.lineHeight = "48px"
      element4.style.lineHeight = "48px"
      element.style.fontSize = "15px"
      element2.style.fontSize = "15px"
      element3.style.fontSize = "15px"
      element4.style.fontSize = "15px"
      element.style.borderRight = "0"
      element.style.borderLeft = "0"
      element2.style.borderRight = "0"
      element3.style.borderRight = "0"
      element4.style.borderRight = "0"
      document.getElementById("search-box").style.marginTop = "60px";
      search.style.fontSize = "22px"
      search.style.borderRight = "0"
      search.style.borderLeft = "0"
      search.style.height = "100%"
      search.style.lineHeight = "40px"
    }
  }

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