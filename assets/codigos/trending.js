// ARROWS - Gallery - Trending //

const arrright = document.getElementById('right');
const arrleft = document.getElementById('left');
const btnPlus = document.getElementById('creategift');

const path = "./assets/imgs/svg/"

class Struct {

    HTMLelement;
    hoverSvg;
    leaveSvg;
    clickSvg;

    constructor(HTMLelement, hoverSvg, leaveSvg, clickSvg) {
        this.HTMLelement = HTMLelement;
        this.hoverSvg = path + hoverSvg;
        this.leaveSvg = path + leaveSvg;
        this.clickSvg = path + clickSvg;
        this.Init();
    }

    Init() {
        this.HTMLelement.addEventListener("mouseover",() => {
            this.HTMLelement.src = this.hoverSvg;
        });
        this.HTMLelement.addEventListener("mouseleave",() => {
            this.HTMLelement.src = this.leaveSvg;
        });
        if (this.clickSvg != "") {
            this.HTMLelement.addEventListener("click",() => {
                this.HTMLelement.src = this.clickSvg;
            });  
        }
    }
}

let structs = [];


// function HandleListeners(HTMLelement, event, source) {
//     HTMLelement.addEventListener(event,() => {
//         HTMLelement.src = source;
//     });
// }

let trendingArr = []; //All images urls are added here.
const displayAtOneTime = 3;
index = displayAtOneTime;
let displayed = []

// image1 image2 image3 image4
// OnNext()
// image4 image3 image2 image1
// image4 image3 image2
// image2 image3 image image5

// needs called InitTrending()
function InitTrending() {
    displayed = trendingArr.slice(0, 3)
}

//On next
function onNext() {
    if (trendingArr.length > displayAtOneTime) {
        displayed.reverse().pop();
        displayed.push(trendingArr[index]);
        index += 1;
        if (index > trendingArr.length - 1) {
            index = 0;
        }
    } else {
        alert("Not enough images found")
    }
}

function onPrevious() {
    if (trendingArr.length > displayAtOneTime) {
        displayed.reverse().pop();
        displayed.push(trendingArr[index]);
        index -= 1;
        if (index < 0) {
            index = trendingArr.length - 1;
        }
    } else {
        alert("Not enough images found")
    }
}


function AddAllListeners() {
    structs.push(new Struct(arrright, "arrow/right/button-slider-right-hover.svg", "arrow/right/button-slider-right.svg", ""))
    structs.push(new Struct(arrleft, "arrow/left/button-slider-left-hover.svg", "arrow/left/button-slider-left.svg", ""))
    structs.push(new Struct(btnPlus, "plusbtn/CTA-crear-gifo-hover.svg", "plusbtn/button-crear-gifo.svg", "plusbtn/CTA-crear-gifo-active.svg"))
    //structs[0].hoverSvg = path + "newpath"
}

AddAllListeners()
// arrright.addEventListener ('mouseover',() => {
//     arrright.src="./assets/imgs/svg/arrow/right/button-slider-right-hover.svg";
// });
// arrright.addEventListener ('mouseleave',() => {
//     arrright.src="./assets/imgs/svg/arrow/right/button-slider-right.svg";
// });

// arrleft.addEventListener ('mouseover',() => {
//     arrleft.src="./assets/imgs/svg/arrow/left/button-slider-left-hover.svg";
// });
// arrleft.addEventListener ('mouseleave',() => {
//     arrleft.src="./assets/imgs/svg/arrow/left/button-slider-left.svg";
// });

// ARROWS - End //

// PLUS BTN - Header //



// btnPlus.addEventListener('mouseover', () => {
//     btnPlus.src="./assets/imgs/svg/plusbtn/CTA-crear-gifo-hover.svg"
// })
// btnPlus.addEventListener('mouseleave', () => {
//     btnPlus.src="./assets/imgs/svg/plusbtn/button-crear-gifo.svg"
// })
// btnPlus.addEventListener('focus', () => {
//     btnPlus.src="./assets/imgs/svg/plusbtn/CTA-crear-gifo-active.svg"
// })

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

// LOGO Change - Width Change //

// LOGO Change End - Width Change End //

// HEADER - Sticky Code //

window.onscroll = function() {myFunction()};
let header = document.getElementById('sticky');
let nav = document.getElementById('nav');

// Get the offset position of the navbar
let sticky = nav.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}

// HEADER - Sticky Code - END //


// DARK MODE - ACTIVATE - DEACTIVATE //

const dark = document.getElementById('darkness');
console.log(dark);


// chequeo la configuracion de windows
// le paso todo lo de media que le pase en css
const configUser = window.matchMedia('(prefers-color-scheme: dark)')

// constante para local storage. la key est
// los value de  localStorage seran 'dark' y 'light'
const localSt = localStorage.getItem('theme');
if(localSt === 'dark') {
    document.body.classList.toggle('dark-theme')
}
else if (localSt === 'light') {
    document.body.classList.toggle('light-theme')
}
// los value de  localStorage seran 'dark' y 'light'

dark.addEventListener('click',() => {
    //  console.log(configUser.matches); 

    // creo un let de tema/color

    let colorTheme;
     //me dice si tiene configurado modo oscuro = true
    if (configUser.matches) {
     //entramos con modo oscuro
     //llamo a document, luego a body, le agrego/quito una clase con toggle, y esa clase sera la que acabo de cear: light-theme
    document.body.classList.toggle('light-theme')

     //veo si mi body contiene el class light-theme. Si lo tiene, voy a guardar en este colorTheme el valor 'light'. En caso contrario voy a guardar 'dark' (con operador ternario)
    colorTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark '
    }
    else {
        document.body.classList.toggle('dark-theme')

        colorTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }

    //una vez que tengo ese colorTheme, lo tengo que guardar en el local storage.  Va  a guardar con la key 'tema' que cree arriba.  Y el value va a ser 'colorTheme', la variable que cree mas arriba.
    localStorage.setItem('theme', colorTheme)
})


// ARROWS - Gallery - Trending //