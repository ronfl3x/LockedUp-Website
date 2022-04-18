const navBtn = document.querySelector(".nav-btn");
const navUl = document.querySelector(".nav-ul");
const navItems = document.querySelectorAll(".nav-ul-li");


//main toggle

navBtn.addEventListener('click', () => {
    toggle();
});

//toggle on item click if menu is open

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navBtn.classList.contains('open')){
            toggle();
        }
    })
})

function toggle() {
    navBtn.classList.toggle("open");
    navUl.classList.toggle("open");
}