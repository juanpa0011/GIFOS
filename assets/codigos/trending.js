// ARROWS - Gallery - Trending //

let arrright = document.getElementById('right');
let arrleft = document.getElementById('left');

arrright.addEventListener ('mouseover',() => {
    arrright.src="./assets/imgs/svg/arrow/right/button-slider-right-hover.svg";
});
arrright.addEventListener ('mouseleave',() => {
    arrright.src="./assets/imgs/svg/arrow/right/button-slider-right.svg";
});

arrleft.addEventListener ('mouseover',() => {
    arrleft.src="./assets/imgs/svg/arrow/left/button-slider-left-hover.svg";
});
arrleft.addEventListener ('mouseleave',() => {
    arrleft.src="./assets/imgs/svg/arrow/left/button-slider-left.svg";
});

// ARROWS - End //

// PLUS BTN - Header //

let btnPlus = document.getElementById('creategift');

btnPlus.addEventListener('mouseover', () => {
    btnPlus.src="./assets/imgs/svg/plusbtn/CTA-crear-gifo-hover.svg"
})
btnPlus.addEventListener('mouseleave', () => {
    btnPlus.src="./assets/imgs/svg/plusbtn/button-crear-gifo.svg"
})
btnPlus.addEventListener('focus', () => {
    btnPlus.src="./assets/imgs/svg/plusbtn/CTA-crear-gifo-active.svg"
})

// PLUS BTN - End //

// FOOTER SVGs //

let facebook = document.getElementById('facebook');
let twitter = document.getElementById('twitter');
let insta = document.getElementById('insta');

facebook.addEventListener ('mouseover',() => {
    facebook.src="./assets/imgs/svg/facebook/icon_facebook_hover.svg";
});
facebook.addEventListener ('mouseleave',() => {
    facebook.src="./assets/imgs/svg/facebook/icon_facebook.svg";
});

twitter.addEventListener ('mouseover',() => {
    twitter.src="./assets/imgs/svg/twitter/icon_twitter-hover.svg";
});
twitter.addEventListener ('mouseleave',() => {
    twitter.src="./assets/imgs/svg/twitter/icon_twitter.svg";
});

insta.addEventListener ('mouseover',() => {
    insta.src="./assets/imgs/svg/insta/icon_instagram-hover.svg";
});
insta.addEventListener ('mouseleave',() => {
    insta.src="./assets/imgs/svg/insta/icon_instagram.svg";
});

// FOOTER SVGs - End //

// HEADER - Sticky Code //

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById('sticky');
let nav = document.getElementById('nav');

// Get the offset position of the navbar
let sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}