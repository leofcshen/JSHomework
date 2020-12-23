var slideIndex; // 儲存當下顯示圖片
var sildes; //儲存所有圖片
var dots;
var captionText;
var rightArrow = document.querySelector(".rightArrow");
var leftArrow = document.querySelector(".leftArrow");
var playPauseBtn = document.getElementById("playPauseBtn");


function initGallery() {

    slideIndex = 0;

    slides = document.getElementsByClassName("imgHolder");
    slides[slideIndex].style.opacity = 1;
    captionText = document.querySelector(".captionTextHolder .captionText");
    captionText.innerHTML = slides[slideIndex].querySelector(
        ".captionText"
    ).innerHTML;
    dots = [];
    dotsContainer = document.getElementById("dotsContainer");
    for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onclick", "moveSlide(" + i + ")");
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();

rightArrow.addEventListener("click", function plusSlides(n) {
    moveSlide(slideIndex + 1);
});

leftArrow.addEventListener("click", function plusSlides(n) {
    moveSlide(slideIndex - 1);
});

function moveSlide(n) {
    var i, current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    };
    var slideTextAnimClass;
    if (n > slideIndex) {
        //往前
        if (n >= slides.length) {
            //6.7...=0
            n = 0;
        }
        moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlideAnimClass.forNext = "moveLeftNextSlide";
        slideTextAnimClass = "slideTextFromTop";
    } else if (n < slideIndex) {
        // 上一張
        if (n < 0) {
            //如果小於第一張
            n = slides.length - 1; //n = 5-1 [0,1,2,3,4]

        }
        moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
        moveSlideAnimClass.forNext = "moveRightNextSlide";
        slideTextAnimClass = "slideTextFromBottom";
    }
    if (n != slideIndex) {
        next = slides[n];
        current = slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imgHolder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex = n;
        captionText.style.display = "none";
        captionText.className = "captionText " + slideTextAnimClass;
        captionText.innerText = slides[n].querySelector(".captionText").innerText;
        captionText.style.display = "block";
    }
}
var timer = null;

function setTimer() {
    timer = setInterval(function () {
        function plusSlides(n) {
            moveSlide(slideIndex + 1);
        }
        plusSlides();
    }, 5000);
}
setTimer();

playPauseBtn.addEventListener("click", function playPauseSlides() {
    var playPauseBtn = document.getElementById("playPauseBtn");
    if (timer == null) {
        setTimer();
        playPauseBtn.style.backgroundPositionY = "0px";
    } else {
        clearInterval(timer);
        timer = null;
        playPauseBtn.style.backgroundPositionY = "-33px";
    }
});