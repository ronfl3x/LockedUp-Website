const button = document.querySelector(".button-to-timeline");

button.addEventListener('click', ()=>{
    window.scrollTo(0, window.innerHeight + 80)
})