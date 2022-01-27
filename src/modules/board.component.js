export class BoardComponent {
    constructor() {
        window.addEventListener("scroll", getElementInViewPort);
    }
}

function getElementInViewPort() {
    const boardBalloon = document.querySelector('#js-board-balloon');
    const boardBalloonCats = document.querySelector('#js-board-balloon-cats');
    const cloudLeft = document.querySelector('#js-cloud-left');
    const cloudRight = document.querySelector('#js-cloud-right');
    const clock = document.querySelector('#js-clock');
    toggleAnimation(boardBalloon, 'bounce-in-left');
    toggleAnimation(boardBalloonCats, 'bounce-in-right');
    toggleAnimation(cloudLeft, 'bounce-in-left');
    toggleAnimation(cloudRight, 'bounce-in-right');
    toggleAnimation(clock, 'bounce-in-left');
}

function toggleAnimation(el, className) {
    const windowHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;
    const elementVisible = 0;
    if (elTop < windowHeight - elementVisible) {
      el.classList.remove('u-hidden');
      el.classList.add(className);
    } else {
      el.classList.add('u-hidden');
      el.classList.remove(className);
    }
}

