// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var img8 = document.getElementById('myImg8');
var modalImg = document.getElementById("img");

var click = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
}

img1.onclick = click;
img2.onclick = click;
img4.onclick = click;
img5.onclick = click;
img6.onclick = click;
img7.onclick = click;
img8.onclick = click;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
