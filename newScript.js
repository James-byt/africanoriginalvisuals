
function myFunctionV2() 
{
  document.getElementById("Vidid2").style.display = "block";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Vidid5").style.display = "none";
  document.getElementById("Focus2").focus({preventScroll:false});
  
}

function myFunctionV1() 
{
  document.getElementById("Vidid1").style.display = "block";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Vidid5").style.display = "none";
  document.getElementById("Focus1").focus({preventScroll:false});
}
function myFunctionV3() 
{
  document.getElementById("Vidid3").style.display = "block";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Vidid5").style.display = "none";
  document.getElementById("Focus3").focus({preventScroll:false});
  
} 

function myFunctionV4() 
{
  document.getElementById("Vidid4").style.display = "block";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Vidid5").style.display = "none";
  document.getElementById("Focus4").focus({preventScroll:false});
}

function myFunctionV5() 
{
	document.getElementById("Vidid5").style.display = "block";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Focus5").focus({preventScroll:false});
}
/*
function pauseVid() {
let vid = document.getElementById("Vidid1");
   vid.pause();
   
  alert("works!!");
}*/



   let video = document.querySelector('.pauseV1');
    let isPaused1 = false;
    let observer1 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !video.paused){
            video.pause();
            isPaused1 = true;
        }
        else if(isPaused1) {
            video.play(); 
            isPaused1=false}
        });
    }, {threshold: 1});
    observer1.observe(video);


 let vide = document.querySelector(".pauseV2") 

    let isPaused2 = false;
    let observer2 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !vide.paused){
            vide.pause();
            isPaused2 = true;
        }
        else if(isPaused2) {
            vide.play(); 
            isPaused2=false}
        });
    }, {threshold: 1});
    observer2.observe(vide);
	
 let vid = document.querySelector(".pauseV3") 

    let isPaused3 = false;
    let observer3 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !vid.paused){
            vid.pause();
            isPaused3 = true;
        }
        else if(isPaused3) {
            vid.play(); 
            isPaused3=false}
        });
    }, {threshold: 1});
    observer3.observe(vid);
	
  let vid4 = document.querySelector('.pauseV4');
    let isPaused4 = false;
    let observer4 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !vid4.paused){
            vid4.pause();
            isPaused4 = true;
        }
        else if(isPaused4) {
            vid4.play(); 
            isPaused4=false}
        });
    }, {threshold: 1});
    observer4.observe(vid4);
	
    let vid5 = document.querySelector('.pauseV5');
    let isPaused5 = false;
    let observer5 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !vid5.paused){
            vid5.pause();
            isPaused5 = true;
        }
        else if(isPaused5) {
            vid5.play(); 
            isPaused5=false}
        });
    }, {threshold: 1});
    observer5.observe(vid5);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

//popup javascritp
function toggle(){
	var trailer= document.querySelector(".trailer")
	trailer.classList.toggle("activate1")
}

function toggle2(){
	var trailer= document.querySelector(".trailer2")
	trailer.classList.toggle("activate2")
}

function toggle3(){
	var trailer= document.querySelector(".trailer3")
	trailer.classList.toggle("activate3")
}

function toggle4(){
	var trailer= document.querySelector(".trailer4")
	trailer.classList.toggle("activate4")
}

function toggle5(){
	var trailer= document.querySelector(".trailer5")
	trailer.classList.toggle("activate5")
}



