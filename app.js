const burgerImg = document.getElementById("burger-img");
const menuAppearing = document.getElementById("appear-menu");


burgerImg.addEventListener("click", () => {
    menuAppearing.classList.toggle("appear");
});