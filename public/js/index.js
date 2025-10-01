const menuIcon = document.querySelector(".menu-icon");
const ul = document.querySelector(".ul");
const menuImg = "public/img/menu.png";
const closeImg = "public/img/close.png";


menuIcon.addEventListener("click", () => {
    
    ul.classList.toggle("ativo");
    menuIcon.firstElementChild.src = ul.classList.contains('ativo') ? closeImg : menuImg;
})