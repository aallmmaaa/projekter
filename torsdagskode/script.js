//scroll effekt der gør at man kan swipe menuen frem for hver pølsevogn

const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (evt)=>{ //Wheel er scroll på touchpad når der sker et event
    evt.preventDefault(); // Forhindrer standard adfærden for eventet (giver os mulighed for at lave brugerdefineret adfærd)
      scrollContainer.scrollLeft += evt.deltaX += evt.deltaY;
});

//TIMER som gør at pølsevognen først skal komme frem efter 4 sekunder 

const pladsen = document.getElementById("hus");

setTimeout(function() {
  pladsen.style.display = "block";
}, 3000); 

/* Pølserækken vises langsomt */

const krop = document.querySelector("body");
const firkant = document.getElementById("kasse");
let scrollPosition;

function flytFirkant() {
    scrollPosition = Math.round(window.scrollY);
    scrollPosition = scrollPosition/8;
    firkant.style.top = scrollPosition + "px";
}

krop.onscroll = flytFirkant;

//BURGERMENU 

/* Lukke  */

/* Åbne */
function visMenu() {
  document.getElementById("nav_menu").style.display = "block";
  document.getElementById("burgermenu").style.display = "none";
  document.getElementById("burgerkryds").style.display = "block";
  document.getElementById("nav_menu").style.backgroundColor = "#FFFDF6";
}

document.getElementById("burgermenu").onclick= visMenu;

function gemMenu() {
  document.getElementById("nav_menu").style.display = "none";
  document.getElementById("burgerkryds").style.display = "none";
  document.getElementById("burgermenu").style.display = "block";
}

document.getElementById("burgerkryds").onclick= gemMenu;
