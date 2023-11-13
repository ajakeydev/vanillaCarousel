"use strict";

let carImgs = Array.from(document.getElementsByClassName("car__photo"));
let totalImgs = carImgs.length;
let actCurNdx = 0;
let a01 = actCurNdx;
let btnPrev = document.getElementsByClassName("car__btn--prev");
let btnNext = document.getElementsByClassName("car__btn--next");
btnPrev[0].addEventListener("click", toPrev);
btnNext[0].addEventListener("click", toNext);
let panCakes = ["src", "./assets/menuPancakes01.svg"];
let parCloud = ["src", "./assets/partCloudyApp02.svg"];
let sunny = ["src", "./assets/sunnyApp02.svg"];
let a = carImgs[0];
let b = carImgs[1];
let c = carImgs[2];
let allImgs = [
  a.setAttribute(panCakes[0], panCakes[1]),
  b.setAttribute(parCloud[0], parCloud[1]),
  c.setAttribute(sunny[0], sunny[1]),
];

function carInit(a01) {
  a01 = actCurNdx;
if(a01 === (totalImgs - 3)){
  a.classList.add("active");
  b.classList.add("next");
  c.classList.add("prev");
  }
}
carInit(actCurNdx);

function toPrev(a01) {
  a01 = actCurNdx;
  if(a01 === (totalImgs - 3)){
  a.classList.remove('active');
  a.classList.add('next');
  b.classList.remove('next');
  b.classList.add('prev');
  c.classList.remove('prev');
  c.classList.add('active');
  actCurNdx = (totalImgs - 1);  
}
//console.log(actCurNdx)        // 2

// Handle the toNext() here
  // if(a01 === (totalImgs - 2) && c.className === 'active'){
  
  // }
  if(a01 === (totalImgs - 1)){
  a.classList.remove('next');
  a.classList.add('prev01');
  b.classList.remove('prev');
  b.classList.add('active');
  c.classList.remove('active');
  c.classList.add('next01');
  actCurNdx = (totalImgs - 2);
  }
  //console.log(actCurNdx) // 1
  if(a01 === (totalImgs - 2)){
    a.classList.remove('prev01');
    a.classList.add('active');
    b.classList.remove('active');
    b.classList.add('next');
    c.classList.remove('next01');
    c.classList.add('prev');
    actCurNdx = 0;
    // carInit(a01);
  }
}

function toNext(a01) {
  a01 = actCurNdx;
  if(a01 === (totalImgs - 3)){
  a.classList.remove("active");
  a.classList.add("prev01");
  b.classList.remove("next");
  b.classList.add("active");
  c.classList.remove("prev");
  c.classList.add("next01");
  actCurNdx++;               // Need to set previous button to carInit(actCurNdx);
  }
//console.log(actCurNdx)     // 1
  
// Handle the toPrev() here
  // if(a01 === (totalImgs - 1) && ){

  // }
  if(a01 === (totalImgs - 2)){
    a.classList.remove('prev01');
    a.classList.add('next');
    b.classList.remove('active');
    b.classList.add('prev');
    c.classList.remove('next01');
    c.classList.add('active');
    actCurNdx++;
  }
//console.log(actCurNdx) // 2
  if(a01 === (totalImgs - 1)){
    a.classList.remove('next');
    a.classList.add('active');
    b.classList.remove('prev');
    b.classList.add('next');
    c.classList.remove('active');
    c.classList.add('prev');
    actCurNdx = 0;
    // carInit(a01);
  }
}

