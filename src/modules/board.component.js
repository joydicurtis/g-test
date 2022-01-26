export class BoardComponent {
    constructor() {
        window.addEventListener("scroll", getElementInViewPort);
    }
}

function getElementInViewPort() {
    const boardBalloon = document.querySelector('#js-board-balloon');
    const boardBalloonCats = document.querySelector('#js-board-balloon-cats');
    toggleAnimation(boardBalloon, 'bounce-in-left');
    toggleAnimation(boardBalloonCats, 'bounce-in-right');
}

function toggleAnimation(el, className) {
    const windowHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elTop < windowHeight - elementVisible) {
      el.classList.remove('u-hidden');
      el.classList.add(className);
    } else {
      el.classList.add('u-hidden');
      el.classList.remove(className);
    }
}

