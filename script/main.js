const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click',() => {
    if(index === 0) return;
    index -= 1;

    carousel.style.transform = `translate3d(-${1440 * index}px, 0, 0)`;
});
nextButton.addEventListener('click',() => {
    if(index === 2) return; // 사진번호 0,1,2 이기 떄문에 2가 마지막
    index += 1;

    carousel.style.transform = `translate3d(-${1440 * index}px, 0, 0)`;
});
