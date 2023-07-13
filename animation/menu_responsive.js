const open = document.querySelector("#open");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu_responsive_id")

function menu_open(){
    if(open.style.display="block"){
        open.style.display="none";
        close.style.display="block";
        menu.style.display="block";
    }
}


function menu_close(){
    if(close.style.display="block"){
        open.style.display= "block";
        close.style.display= "none";
        menu.style.display="none";
    }
}

open.addEventListener('click', menu_open);
close.addEventListener('click', menu_close);