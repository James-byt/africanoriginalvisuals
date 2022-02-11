	function myFunction() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "Dropdown" ) {
    x.className += "responsive";
  } else {
    x.className = "Dropdown";	 
  }
}
