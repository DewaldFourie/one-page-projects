// Constants and Global Variables
const $navBtns = document.querySelectorAll(".slide-button");
const $slides = document.querySelectorAll(".slide");
const $navDots = document.querySelectorAll(".nav-dot");
let currentSlide = 0;

// Function to set the current slide to the ative slide.
function updateActiveSlide() {
  $slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
      slide.style.opacity = 1;
    } else {
      slide.classList.remove("active");
      slide.style.opacity = 0;
    }
  });
}

// Function to set the current dot to the selected dot
function updateActiveDot() {
    $navDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("selected");
        }
        else {
            dot.classList.remove("selected");
        }
    })
}

// Default function for automatic slide movement to the next Index
function nextSlide() {
    currentSlide = (currentSlide + 1) % $slides.length;
    updateActiveSlide();
    updateActiveDot();
}

// Function that controls which slide is active when nav buttons are used
function setCurrentSlide(navElement){
    clearInterval(slideTimer);
    if (navElement.classList.contains("left")) {
        currentSlide = (currentSlide - 1 + $slides.length) % $slides.length;
      } else {
        currentSlide = (currentSlide + 1) % $slides.length;
      }
      updateActiveSlide();
      updateActiveDot();
      slideTimer = setInterval(nextSlide, 5000);
}

// Function that controls which slide is active when nav dots are used
function setCurrentDot(index){
    clearInterval(slideTimer)
    currentSlide = index;
    updateActiveSlide();
    updateActiveDot();
    slideTimer = setInterval(nextSlide, 5000);
}

// Adding Event Listeners to the nav buttons & calling the SetCurrentSlide Function
$navBtns.forEach((nav) => {
    nav.addEventListener("click", () => {
        setCurrentSlide(nav);
  });
});

// Adding Event Listeners to the nav dots & calling the setCurrentDot Function
$navDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        setCurrentDot(index);
    })
})


updateActiveSlide();
updateActiveDot();
let slideTimer = setInterval(nextSlide, 5000);

// -------------------------------------- Drop Down Menu ------------------------------------------------ //

menuBtn = document.querySelector('.menu-icon')
menu = document.querySelector('.menu')

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('show');
})