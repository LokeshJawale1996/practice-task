const menuToggle = document.querySelector(".toggle");
const toggle = document.querySelector(".toggleDiv");
menuToggle.onclick= () => {
    toggle.classList.toggle('sizeIncrease');
}