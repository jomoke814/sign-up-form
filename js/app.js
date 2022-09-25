const showBtn = document.querySelector("#show-form")
const closeBtn = document.querySelector(".pop-up .close-btn")

showBtn.addEventListener('click', function() {
    document.querySelector('.pop-up').classList.add("active");
})

closeBtn.addEventListener('click', function() {
    document.querySelector('.pop-up').classList.remove("active");
})