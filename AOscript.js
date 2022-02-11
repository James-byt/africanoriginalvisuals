

function myFunctionV2() 
{
  document.getElementById("Vidid2").style.display = "block";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Focus2").focus({preventScroll:false});
  
}

function myFunctionV1() 
{
  document.getElementById("Vidid1").style.display = "block";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Focus1").focus({preventScroll:false});
}
function myFunctionV3() 
{
  document.getElementById("Vidid3").style.display = "block";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid4").style.display = "none";
  document.getElementById("Focus3").focus({preventScroll:false});
}
function myFunctionV4() 
{
  document.getElementById("Vidid4").style.display = "block";
  document.getElementById("Vidid2").style.display = "none";
  document.getElementById("Vidid1").style.display = "none";
  document.getElementById("Vidid3").style.display = "none";
  document.getElementById("Focus4").focus({preventScroll:false});
}

function myFunctionD1() {
  var x = document.getElementById("FilmDrop");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

window.onclick = function() {
  var x = document.getElementById("FilmDrop");
  if (x.className == "dropdown-menu") {
    x.style.display = "none";
  }
}

function myFunctionV2() {
  var x = document.getElementById("Vidid2");
  var y = document.getElementById("Vidid1");
  if (x.className === "video2" ) {
    x.className += "responsive";
	y.className += "responsive";
  } else {
    x.className = "video2";
    y.className = "video1";
  }   
}

function validateForm() {
  
  if () {
	  document.getElementById("btnSend").disabled = true;
    alert("Name must be filled out");
	
    return false;
  }
}
/*
	function myFunction() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "Dropdown" ) {
    x.className += "responsive";
  } else {
    x.className = "Dropdown";	 
  }
}
*/


