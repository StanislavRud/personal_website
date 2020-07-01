let persent = document.querySelectorAll('.skill_per');

let progress = () => {
    for (let i = 0; i < persent.length; i++) {
        persent[i].style.width = persent[i].getAttribute('per') + '%';

    }
}

window.addEventListener("scroll", progress);


let prevSlideButton = document.querySelector('.prevSlide');
let nextSlideButton = document.querySelector('.nextSlide');
let img = document.querySelector('.myWorks');
let arrImg = ["url(./img/elem1.jpg)", "url(./img/elem2.jpg)", "url(./img/elem3.jpg)", "url(./img/elem4.jpg)", "url(./img/elem5.jpg)","url(./img/elem6.jpg)","url(./img/elem7.jpg)" ];
let currentImg = 0;

let points = document.querySelector('.slide_points');
let div = document.createElement('div');



window.onload = function create_points () {
    for (let i = 0; i < arrImg.length; i++){
        let div = document.createElement('div');
        div.className = 'point';
        points.appendChild(div)*[i];
    }
    points.firstElementChild.classList.add('select');
};

function clickNext () {
    if (currentImg >= arrImg.length - 1) {
        currentImg = 0;
    } else
        currentImg++;

    img.style.backgroundImage = arrImg[currentImg];
    paint_doter()
}

function paint_doter() {
    let doter = document.querySelectorAll('.point');
    doter[currentImg].classList.add('select');
    if (currentImg === 0){
        doter[arrImg.length - 1].classList.remove('select');
        doter[1].classList.remove('select');
        // doter[0].classList.remove('select');
    } else if (currentImg === 3) {
        doter[0].classList.remove('select');
        doter[currentImg - 1].classList.remove('select');
    }
    else {
        doter[currentImg - 1].classList.remove('select');
        doter[currentImg + 1].classList.remove('select');
    }

}


function clickPrev (){
    if (currentImg < 1) {
        currentImg = arrImg.length - 1;
    } else
        currentImg--;
    img.style.backgroundImage = arrImg[currentImg];
    paint_doter()
}


let sliderStart = setInterval(clickNext, 7000);

let stop_slider = () => {
    clearInterval(sliderStart);
}

let resume_slider = () => {
    sliderStart = setInterval(clickNext, 7000);
}




img.addEventListener('mouseover', stop_slider);
img.addEventListener('mouseout', resume_slider);
nextSlideButton.addEventListener('mouseover', stop_slider);
prevSlideButton.addEventListener('mouseover', stop_slider);
nextSlideButton.addEventListener('mouseout', resume_slider);
prevSlideButton.addEventListener('mouseout', resume_slider);

nextSlideButton.addEventListener('click', clickNext);
prevSlideButton.addEventListener('click', clickPrev);
