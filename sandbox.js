var elements = document.querySelectorAll('.portfolio-column-img')
console.log(elements.length);


function one(){

    for(var a = 0;a<elements.length;a++){
        if(!elements[a].classList.contains('frontend')){
            elements[a].setAttribute("class","hiddenclass");
            
        }
        
    }
}



function two(){

    for(var a = 0;a<elements.length;a++){
        if(!elements[a].classList.contains('backend')){
            elements[a].setAttribute("class","hiddenclass");
            
        }
        
    }
}



function three(){

    for(var a = 0;a<elements.length;a++){
        if(!elements[a].classList.contains('fullstack')){
            elements[a].setAttribute("class","hiddenclass");
        }
        
    }
}

function back(){
    location.reload();
}



var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("portfolio-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}