let progress = () => {
    let mainMenu = document.querySelectorAll('a.main_menu');
    let persent = document.querySelectorAll('.skill_per');
    if (pageYOffset > 20) {

        for (let i = 0; i < persent.length; i++) {
            persent[i].style.width = persent[i].getAttribute('per') + '%';
        }
        document.querySelector('header').style.backgroundColor = 'white';
        mainMenu.forEach(m => m.classList.add('black'));
        document.querySelector('nav').classList.add('min');


    } else {
        document.querySelector('nav').classList.remove('min');
        document.querySelector('header').style.backgroundColor = 'transparent';
        for (let i = 0; i < persent.length; i++) {
            persent[i].style.width = 0;
        }

        mainMenu.forEach(m => m.classList.remove('black') )
    }
}

window.addEventListener("scroll", progress);

let activeToggleMenu = document.querySelector('.menu-toggler');

let addClassActive = () => {
    activeToggleMenu.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');

}

let downloadCv = () => {
    window.open('./CV_RudStanislav_Front_end2.pdf');
};

document.querySelector('button.downloadCv').addEventListener('click', downloadCv);

let contactMe = () => {
    window.location.hash='#contact';
}

document.querySelector('button.contactMe').addEventListener('click', contactMe);



activeToggleMenu.addEventListener("click", addClassActive);

let closeMenu = ()=> {
    activeToggleMenu.classList.remove('active');

    document.querySelector('nav').classList.remove('active');


}

document.querySelectorAll('a.main_menu').forEach(n => n.addEventListener('click', closeMenu));


let prevSlideButton = document.querySelector('.prevSlide');
let nextSlideButton = document.querySelector('.nextSlide');
let slideImg = document.querySelector('.myWorks');
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

    slideImg.style.backgroundImage = arrImg[currentImg];
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
    slideImg.style.backgroundImage = arrImg[currentImg];
    paint_doter()
}


let sliderStart = setInterval(clickNext, 7000);

let stop_slider = () => {
    clearInterval(sliderStart);
}

let resume_slider = () => {
    sliderStart = setInterval(clickNext, 7000);
}

slideImg.addEventListener('mouseover', stop_slider);
slideImg.addEventListener('mouseout', resume_slider);
nextSlideButton.addEventListener('mouseover', stop_slider);
prevSlideButton.addEventListener('mouseover', stop_slider);
nextSlideButton.addEventListener('mouseout', resume_slider);
prevSlideButton.addEventListener('mouseout', resume_slider);
nextSlideButton.addEventListener('click', clickNext);
prevSlideButton.addEventListener('click', clickPrev);
