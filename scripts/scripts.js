const bigNumber = document.querySelector('div.bigNumber');
const smallNumber = document.querySelector('div.currentNumber');
const menu = [document.querySelector('li a.baner'), document.querySelector('li a.skills'), document.querySelector('li a.pictures'), document.querySelector('li a.s4'), document.querySelector('li a.s5'), document.querySelector('li a.s6')];

function changeText() {
    const scrVal = window.scrollY;
    const sectionHeight = document.querySelector('section').clientHeight;
    //console.log(sectionHeight);
    if (scrVal < sectionHeight - 200) {
        bigNumber.textContent = "01";
        smallNumber.textContent = "01";
        menu[0].classList.add("active");
        menu[1].classList.remove("active");
    } else if (scrVal < 2 * sectionHeight - 200) {
        bigNumber.textContent = "02";
        smallNumber.textContent = "02";
        menu[1].classList.add("active");
        menu[0].classList.remove("active");
        menu[2].classList.remove("active");
    } else if (scrVal < 3 * sectionHeight - 200) {
        bigNumber.textContent = "03";
        smallNumber.textContent = "03";
        menu[2].classList.add("active");
        menu[1].classList.remove("active");
        menu[3].classList.remove("active");
    } else if (scrVal < 4 * sectionHeight - 200) {
        bigNumber.textContent = "04";
        smallNumber.textContent = "04";
        menu[3].classList.add("active");
        menu[2].classList.remove("active");
    }
}

const burger = document.querySelector(".fa-bars");
const iks = document.querySelector(".menuCloser");
const slider = document.querySelector(".slider");
const times = document.querySelector(".closer");

function slide() {
    burger.classList.toggle("off");
    iks.classList.toggle("off");
    slider.classList.toggle("sliderOn");
}
times.addEventListener("click", function () {
    document.querySelector(".building").remove();
    times.remove();
})
burger.addEventListener("click", function () {
    slide();
})
iks.addEventListener("click", function () {
    slide();
})
window.addEventListener('scroll', changeText);
$('li a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})