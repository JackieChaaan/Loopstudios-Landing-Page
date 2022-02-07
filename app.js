let menu = document.getElementById("menubar");
let sidebar = document.getElementById("side-bar");
let close = document.getElementById("close");

// AOS Initialization
AOS.init({
    offset: 120,
    delay: 0,duration: 400});
    

// side bar open
menu.addEventListener('click',function(){
    sidebar.style.display = 'block';
    menu.style.display = 'none';
});

// side bar close
close.addEventListener('click',function(){
    sidebar.style.display = 'none';
    menu.style.display = 'block';
});