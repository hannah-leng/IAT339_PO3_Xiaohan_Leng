"use strict";



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function visibleCheckOut(n,m) {
    // prompt(working);
    // alert(document.querySelector(".checkout" + n).style);
    document.querySelector(".checkout" + n).style.visibility = "visible";

    document.querySelector(".checkBtn-"+m).style.display = "none";
    document.querySelector(".checkBtn-"+(m+1)).style.display = "inline-block";
    setTimeout(function(){ 
        document.querySelector(".checkBtn-"+m).style.display = "none";
        document.querySelector(".checkBtn-"+(m+1)).style.display = "none";
        document.querySelector(".checkBtn-"+(m+2)).style.display = "inline-block";
    }, 1000);
}



