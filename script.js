
const pictureBorder = document.getElementById("image-group");
const navPeremeshka = document.getElementById("nav-content");
const PORTFOLIO_BTN = document.querySelector('.portfolio-button');
const MENU = document.getElementById('Menu');

//активное меню
MENU.addEventListener('click', (event)=> {
	MENU.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
  event.target.classList.add('active');
  
}); 


// Включение и отключение экранов  
const SCREENh = document.querySelector('.phone-off-horizontal');
const SCREENv = document.querySelector('.phone-off-vertical');
const Displeyh = document.querySelector('.slider-img-horizontal');
const Displeyv = document.querySelector('.slider-img-vertical');
let k=0;

Displeyh.addEventListener('click', (event)=>{
    if(k==0){ 
    	SCREENh.style.background ='rgba(0,0,0,0.0)';
    	k++;
    }else {
    	SCREENh.style.background ='rgba(0,0,0,1)';
    	k--;
    }
});
Displeyv.addEventListener('click', (event)=>{
    if(k==0){ 
    	SCREENv.style.background ='rgba(0,0,0,1)';
    	k++;
    }else {
    	SCREENv.style.background ='rgba(0,0,0,0)';
    	k--;
    }
});
//подсвечивание иконок профиля
pictureBorder.addEventListener('click',(event)=>{
    pictureBorder.querySelectorAll('img').forEach(element => element.classList.remove('activeBorder'));
     event.target.classList.add('activeBorder');
     
 })
//активные кнопки профиля
 PORTFOLIO_BTN.addEventListener('click', (event)=> {
    PORTFOLIO_BTN.querySelectorAll('button').forEach(el=>el.classList.remove('active-btn'));
    PORTFOLIO_BTN.querySelectorAll('button').forEach(el=>el.removeAttribute('disabled'));
    event.target.classList.add('active-btn');
    event.target.setAttribute('disabled','disabled');
  ClickPeremeshka();//подключение перемешки
  });
//перемешка иконок
 function ClickPeremeshka(){  
    let arr = [];
    pictureBorder.querySelectorAll('img').forEach( elem => {
        elem.id = Math.ceil(Math.random()*100)
        arr.push(elem.id)
        arr.sort();
    });
     for(let i of arr){
       let element = document.getElementById(i);
       pictureBorder.insertBefore(element,pictureBorder.firstChild);
     }
}
// Модальное окно
const SUBMIT = document.getElementById('btn');
const CLOSE_SUBMIT = document.getElementById('close-btn');

SUBMIT.addEventListener('click',()=>{

  const SUBJECT =document.getElementById('subject').value.toString();
  const DESCRIBE =document.getElementById('describe').value.toString();
     const EMAILRU = document.getElementById("email");
     const NAME = document.getElementById("subname");


if (NAME.reportValidity() && EMAILRU.reportValidity()  ){


  if(SUBJECT==''){
    document.getElementById('result-subject').innerText= 'Без темы';
  }else document.getElementById('result-subject').innerText= 'Тема: '+ SUBJECT;

  if(DESCRIBE ==''){
    document.getElementById('result-describe').innerText= 'Без описания';
  }else document.getElementById('result-describe').innerText= 'Описание: '+ DESCRIBE;
  

  document.getElementById('message-block').classList.remove('hidden');
  }
});

CLOSE_SUBMIT.addEventListener('click',()=>{
  document.getElementById('result-subject').innerText= '';
  document.getElementById('result-describe').innerText= '';
  document.getElementById('subject').value = "";
  document.getElementById('describe').value = "";
  document.getElementById('subname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message-block').classList.add('hidden'); 

  

});

// слайдер
let slideWidth = 100; 
const sliderList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('#prev_slide');
const btnNext = document.querySelector('#next_slide');
let pos = 0;

sliderList.style.width = slides.length * slideWidth + 'vw';

btnPrev.onclick = scrollToPrev;
btnNext.onclick = scrollToNext;

function scrollToPrev() {
  pos--;
  if (pos < 0) {
    sliderList.style.transition = null;
    sliderList.style.left = -(pos + 2) * slideWidth + 'vw';
    let cloneElem = sliderList.children[slides.length - 1].cloneNode(true);
    sliderList.insertBefore(cloneElem, sliderList.children[0]);
    sliderList.removeChild(sliderList.children[slides.length]);
    pos++;
  };
  
  setTimeout(function() {
    sliderList.style.left = -(slideWidth * pos) + 'vw';
    sliderList.style.transition = 'left 1s ease-in-out';
  });

};

function scrollToNext() {
  pos++;
  if (pos > slides.length - 1) {
    sliderList.style.transition = null;
    sliderList.style.left = -(pos - 2) * slideWidth + 'vw';
    let cloneElem = sliderList.children[0].cloneNode(true);
    sliderList.appendChild(cloneElem);
    sliderList.removeChild(sliderList.children[0]);
    pos--;
  };
  
  setTimeout(function() {
    sliderList.style.left = -(slideWidth * pos) + 'vw';
    sliderList.style.transition = 'left 1s ease-in-out';
  });
  
};
// прокрутка хедера

document.addEventListener('scroll', onScroll);

function onScroll(event) {  
	const curPosition = window.scrollY;
	const sections = document.querySelectorAll('main>a');
	const links = document.querySelectorAll('#Menu a');
  
	sections.forEach((el) => {
		if (el.offsetTop <= curPosition && (el.offsetTop + el.offsetHeight) > curPosition) {
			links.forEach((a) => {
				a.classList.remove('active');
				if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('active');
				}
			})
		}
	});
}