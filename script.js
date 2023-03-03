let mune = document.getElementById("mune")
let btn = document.getElementById("btn")
let icon = document.querySelector(".fa-solid")


  btn.addEventListener('click', cc )

  function cc (){
      mune.classList.toggle("active");
      icon.classList.toggle("fa-xmark");
 }














let a1 = document.getElementById('a1')
 let a2 = document.getElementById('a2')
 let a3 = document.getElementById('a3')
 let a4 = document.getElementById('a4')
 let a5 = document.getElementById('a5')


 let animation = document.querySelector('.animation')

 a1.addEventListener('click', aa1)
 a2.addEventListener('click', aa2)
 a3.addEventListener('click', aa3)
 a4.addEventListener('click', aa4)
 a5.addEventListener('click', aa5)

   
 function aa1 () {
     animation.classList.add('animation1')
     animation.classList.remove('animation2')
     animation.classList.remove('animation3')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
     animation.classList.remove('animation6')
 }
 function aa2 () {
    animation.classList.add('animation2')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')
    animation.classList.remove('animation6')

 }
 function aa3 () {
    animation.classList.add('animation3')
    animation.classList.remove('animation1')
    animation.classList.remove('animation2')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')
    animation.classList.remove('animation6')

 }
 function aa4 () {
    animation.classList.add('animation4')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation2')
    animation.classList.remove('animation5')
    animation.classList.remove('animation6')

 }
 function aa5 () {
    animation.classList.add('animation5')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation2')
    animation.classList.remove('animation6')

 }
 function aa6 () {
  animation.classList.add('animation6')
  animation.classList.remove('animation1')
  animation.classList.remove('animation3')
  animation.classList.remove('animation4')
  animation.classList.remove('animation2')
  animation.classList.remove('animation5')

}
   

//  SELECT SECTION FOR scroll navbar change
let one = document.querySelector('.header')
 let two = document.querySelector('.Emergence')
 let three = document.querySelector('.qq')
 let four = document.querySelector('.kaftera')
 let five = document.querySelector('.lop')
 let six = document.querySelector('.branch1')
 let seven = document.querySelector('.raiso')
   





 let change = {
  aa1:  function aa1 () {
     animation.classList.add('animation1')
     animation.classList.add('animation0')
     
    animation.classList.remove('animation2')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')
    animation.classList.remove('animation6')
  },
  aa2:  function aa2 () {
     animation.classList.add('animation2')
     animation.classList.remove('animation1')
     animation.classList.remove('animation3')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
     animation.classList.remove('animation0')
  },
  aa3:  function aa3 () {
     animation.classList.add('animation3')
     animation.classList.remove('animation1')
     animation.classList.remove('animation2')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
  },
  aa4: function aa4 () {
     animation.classList.add('animation4')
     animation.classList.remove('animation1')
     animation.classList.remove('animation3')
     animation.classList.remove('animation2')
     animation.classList.remove('animation5')
  },
  aa5: function aa5 () {
     animation.classList.add('animation5')
   animation.classList.remove('animation1')
   animation.classList.remove('animation3')
   animation.classList.remove('animation4')
   animation.classList.remove('animation2')
  },
  aa6: function aa6 () {
    animation.classList.add('animation6')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation2')
    animation.classList.remove('animation5')
  
  },
   squre1: function squre1(){
    squre.classList.add('squre1')
    squre.classList.remove('squre2')
    squre.classList.remove('squre3')
    squre.classList.remove('squre4')
  squre.classList.remove('squre5')
  squre.classList.add('smooth-zigzag-anim-1')
  squre.classList.remove('smooth-zigzag-anim-2')
  squre.classList.remove('smooth-zigzag-anim-3')
    
  },
  squre2:function squre2(){
    squre.classList.add('squre2')
    squre.classList.remove('squre1')
    squre.classList.remove('squre3')
    squre.classList.remove('squre4')
  squre.classList.remove('squre5')
  squre.classList.add('smooth-zigzag-anim-3')
  squre.classList.remove('smooth-zigzag-anim-1')
  squre.classList.remove('smooth-zigzag-anim-2')
  },
  squre3: function squre3(){
    squre.classList.add('squre3')
    squre.classList.remove('squre2')
    squre.classList.remove('squre1')
    squre.classList.remove('squre4')
  squre.classList.remove('squre5')
  squre.classList.add('smooth-zigzag-anim-2')
  squre.classList.remove('smooth-zigzag-anim-1')
  squre.classList.remove('smooth-zigzag-anim-3')
  },
  squre4:  function squre4(){
    squre.classList.add('squre4')
    squre.classList.remove('squre2')
    squre.classList.remove('squre1')
    squre.classList.remove('squre3')
    squre.classList.remove('squre5')
    squre.classList.add('smooth-zigzag-anim-1')
    squre.classList.remove('smooth-zigzag-anim-3')
    squre.classList.remove('smooth-zigzag-anim-2')
  },
  squre5:  function squre5(){
    squre.classList.add('squre5')
    squre.classList.remove('squre2')
    squre.classList.remove('squre1')
    squre.classList.remove('squre4')
    squre.classList.remove('squre3')
    squre.classList.add('smooth-zigzag-anim-2')
    squre.classList.remove('smooth-zigzag-anim-1')
    squre.classList.remove('smooth-zigzag-anim-3')

  }
}

// scroll
window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >=  one.offsetTop - one.offsetHeight * 0.2  &&
     scrollPosition <
       one.offsetTop + one.offsetHeight - one.offsetHeight * 0.25
        ){
           change.aa1.call()
           change.squre1.call()
 }
  }
 )
window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >=  two.offsetTop - two.offsetHeight -50 &&
     scrollPosition <
       two.offsetTop + two.offsetHeight - two.offsetHeight + 200
        ){
           change.aa2.call()
           change.squre2.call()

 }
 
  }
 )
 window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >= three.offsetTop - three.offsetHeight +400 &&
     scrollPosition <
       three.offsetTop + three.offsetHeight - three.offsetHeight * 0.5 ){
        change.aa3.call()
        change.squre3.call()

     
 }
  }
 )
 window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >= four.offsetTop - four.offsetHeight - 200 &&
     scrollPosition <
       four.offsetTop + four.offsetHeight - four.offsetHeight * 0.4){
        change.aa4.call()
        change.squre4.call()
     
 }
  }
 )
 window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >= five.offsetTop - five.offsetHeight * 0.25 &&
     scrollPosition <
       five.offsetTop + five.offsetHeight - five.offsetHeight * 0.8 ){
        change.aa5.call()
        change.squre5.call()

     
 }
  }
 )
 window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >= six.offsetTop - six.offsetHeight * 0.25 &&
     scrollPosition <
       six.offsetTop + six.offsetHeight - six.offsetHeight * 0.25 ){
        change.aa6.call()
     
 }
  }
 )
 window.addEventListener('scroll', ()=>{
 let scrollPosition = document.documentElement.scrollTop;
 if (window.scrollY >= seven.offsetTop - seven.offsetHeight * 0.25 &&
    scrollPosition <
      seven.offsetTop + seven.offsetHeight - seven.offsetHeight * 0.25
       ){
       change.aa7.call()
    
}
 }
)



let lastScrollTop;
navbar1 = document.querySelector('.navigation');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || scrollPosition;
if(scrollTop > lastScrollTop){
  navbar1.classList.add('navigation1')
// navbar.style.top='-80px';
console.log("ddddd")
}
else{
  navbar1.classList.remove('navigation1')
// navbar.style.top='0';
console.log("rrrrr")


}
lastScrollTop = scrollTop;
});
// squre
let squre = document.querySelector('.squre')
a1.addEventListener('click', squre1)
a2.addEventListener('click', squre2)
a3.addEventListener('click', squre3)
a4.addEventListener('click', squre4)
a5.addEventListener('click', squre5)

function squre1(){
  squre.classList.add('squre1')
  squre.classList.remove('squre2')
  squre.classList.remove('squre3')
  squre.classList.remove('squre4')
  squre.classList.remove('squre5')
}
function squre2(){
  squre.classList.add('squre2')
  squre.classList.remove('squre1')
  squre.classList.remove('squre3')
  squre.classList.remove('squre4')
  squre.classList.remove('squre5')
}
function squre3(){
  squre.classList.add('squre3')
  squre.classList.remove('squre2')
  squre.classList.remove('squre1')
  squre.classList.remove('squre4')
  squre.classList.remove('squre5')
}
function squre4(){
  squre.classList.add('squre4')
  squre.classList.remove('squre2')
  squre.classList.remove('squre1')
  squre.classList.remove('squre3')
  squre.classList.remove('squre5')
}
function squre5(){
  squre.classList.add('squre5')
  squre.classList.remove('squre2')
  squre.classList.remove('squre1')
  squre.classList.remove('squre4')
  squre.classList.remove('squre3')
}
// SLIDE
let TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });



  var vi1 = document.querySelector(".audio1");
  var vi2 = document.querySelector(".audio2");
  var vi3 = document.querySelector(".audio3");
  var vi4 = document.querySelector(".audio4");
  var vi5 = document.querySelector(".audio5");
  var vi6 = document.querySelector(".audio6");
  vi1.onplay = function() {
    vi1.classList.add('smooth-zigzag-anim-1')
    vi1.classList.remove('smooth-zigzag-anim-2')
    vi1.classList.remove('smooth-zigzag-anim-3')
};
vi2.onplay = function() {
    vi2.classList.add('smooth-zigzag-anim-2')
    vi2.classList.remove('smooth-zigzag-anim-1')
    vi2.classList.remove('smooth-zigzag-anim-3')
};
vi3.onplay = function() {
  vi3.classList.add('smooth-zigzag-anim-3')
  vi3.classList.remove('smooth-zigzag-anim-2')
  vi3.classList.remove('smooth-zigzag-anim-1')
};
vi4.onplay = function() {
  vi4.classList.add('smooth-zigzag-anim-3')
  vi4.classList.remove('smooth-zigzag-anim-2')
  vi4.classList.remove('smooth-zigzag-anim-1')
};
vi5.onplay = function() {
  vi5.classList.add('smooth-zigzag-anim-2')
  vi5.classList.remove('smooth-zigzag-anim-1')
  vi5.classList.remove('smooth-zigzag-anim-3')
};
vi6.onplay = function() {
  vi6.classList.add('smooth-zigzag-anim-1')
  vi6.classList.remove('smooth-zigzag-anim-2')
  vi6.classList.remove('smooth-zigzag-anim-3')
};


let prog1 = document.getElementById('prog1')
let prog2 = document.getElementById('prog2')
let prog3 = document.getElementById('prog3')
let prog4 = document.getElementById('prog4')
let prog5 = document.getElementById('prog5')
let prog6 = document.getElementById('prog6')
let audio7 = document.querySelector('.audio7')
let audio8 = document.querySelector('.audio8')
let audio9 = document.querySelector('.audio9')
let audio10 = document.querySelector('.audio10')
let audio11 = document.querySelector('.audio11')
let audio12 = document.querySelector('.audio12')
let pp1 = document.querySelector('.pp1')
let pp2 = document.querySelector('.pp2')
let pp3 = document.querySelector('.pp3')
let pp4 = document.querySelector('.pp4')
let pp5 = document.querySelector('.pp5')
let pp6 = document.querySelector('.pp6')



prog1.addEventListener('click', function(){
  prog1.classList.toggle('prog11')
  prog2.classList.toggle('prog1')
  prog3.classList.toggle('prog1')
  prog4.classList.toggle('prog1')
  prog5.classList.toggle('prog1')
  prog6.classList.toggle('prog1')
  audio7.classList.toggle('audio7')
  pp1.classList.toggle('ppshow')

  
})
prog2.addEventListener('click', function(){
  prog2.classList.toggle('prog11')
  prog1.classList.toggle('prog1')
  prog3.classList.toggle('prog1')
  prog4.classList.toggle('prog1')
  prog5.classList.toggle('prog1')
  prog6.classList.toggle('prog1')
  audio8.classList.toggle('audio8')
  pp2.classList.toggle('ppshow')

})
prog3.addEventListener('click', function(){
  prog3.classList.toggle('prog11')
  prog1.classList.toggle('prog1')
  prog2.classList.toggle('prog1')
  prog4.classList.toggle('prog1')
  prog5.classList.toggle('prog1')
  prog6.classList.toggle('prog1')
  audio9.classList.toggle('audio9')
  pp3.classList.toggle('ppshow')

})
prog4.addEventListener('click', function(){
  prog4.classList.toggle('prog11')
  prog1.classList.toggle('prog1')
  prog3.classList.toggle('prog1')
  prog2.classList.toggle('prog1')
  prog5.classList.toggle('prog1')
  prog6.classList.toggle('prog1')
  audio10.classList.toggle('audio10')
  pp4.classList.toggle('ppshow')

})
prog5.addEventListener('click', function(){
  prog5.classList.toggle('prog11')
  prog1.classList.toggle('prog1')
  prog3.classList.toggle('prog1')
  prog4.classList.toggle('prog1')
  prog2.classList.toggle('prog1')
  prog6.classList.toggle('prog1')
  audio11.classList.toggle('audio11')
  pp5.classList.toggle('ppshow')

})
prog6.addEventListener('click', function(){
  prog6.classList.toggle('prog11')
  prog1.classList.toggle('prog1')
  prog3.classList.toggle('prog1')
  prog4.classList.toggle('prog1')
  prog5.classList.toggle('prog1')
  prog2.classList.toggle('prog1')
  audio12.classList.toggle('audio12')
  pp6.classList.toggle('ppshow')
})


