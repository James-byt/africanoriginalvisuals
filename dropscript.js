
	function dropmain() {
  let myDropnav = document.getElementById("myDropnav");
  
  if (myDropnav.className === "Maindrop" ) {
    myDropnav.className += "godown";
  } else {
    myDropnav.className = "Maindrop";	 
  }
}