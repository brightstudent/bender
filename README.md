# Bender

## Leuke dingen!
In deze functie heb ik meerdere dingen geleerd:
1. "Random" gedrag te genereren met behulp van de `Math.floor(Math.random() * max`. 
2. Vervolgens heb ik geleerd om dat te combineren met een Array. Zoadat ik een willekeurige stijling kan aanroepen.

```Javascript
function randomize() {
  let bgmode = ["regular", "bling", "old"];
  let bendermode = ["none", "goud", "roest"];
  let random = Math.floor(Math.random() * bgmode.length);
  body.classList.remove(...bgmode);
  body.classList.add(bgmode[random]);
  bender.classList.remove(...bendermode);
  bender.classList.add(bendermode[random]);
}
```
Deze functie zorgt ervoor dat niet 2 functie tegelijk worden uitgevoerd. Bender kan slapen OF lopen, maar geen beide.</br>
* Als je op de slapen klikt, dan worden alle waardes verwijderd en wordt de `value="slapen"` toegevoegd. 
* Als je op de lopen klikt, dan worden alle waardes verwijderd en wordt de `value="lopen"` toegevoegd.
* Als je nog een keer op dezelfde knop kilkt, dan wordt de huidige waarde verwijderd.

De knoppen worden met de methode `querySelectorAll()` opgehaald. Er wordt speciefiek gevraagd naar een `button` met de atribute `name="stijl"`. Alle buttons hebben een `value`. deze value is de `class` die toegevoegd wordt aan Bender wanneer een van die knoppen is geklikt.  

```HTML
 <button name="stijl" class="loopknop" value="lopen">Lopen</button>
 <button name="stijl" class="slaapknop" value="slapen">Slapen</button>
```
```Javascript
const stijlButtons = document.querySelectorAll('button[name="stijl"');

function handleStijlButton(event) {
  //Als je nog een keer op dezelfde knop kilkt, dan wordt de huidige waarde verwijderd.
  if (bender.classList.contains(event.target.value)) {
    bender.classList.remove(event.target.value);
  } 
  // Als je op de slapen klikt, dan worden alle waardes verwijderd en wordt de `value="slapen"` toegevoegd. 
  // Als je op de lopen klikt, dan worden alle waardes verwijderd en wordt de `value="lopen"` toegevoegd.
  else {
    stijlButtons.forEach((stijlButton) => {
      bender.classList.remove(stijlButton.value);
    });
    bender.classList.add(event.target.value);
  }
};

stijlButtons.forEach((stijlButton) => {
  stijlButton.addEventListener("click", handleStijlButton);
});
````

function armenIndeLucht() {
  bender.classList.toggle("happy");
  console.log("Bender is raising his arms");
}

function togglePlay() {
  isPlaying ? zingen.pause() : zingen.play();
}

zingen.onplaying = function () {
  isPlaying = true;
};
zingen.onpause = function () {
  isPlaying = false;
};

function dragStart() {
  console.log("draging...");
  setTimeout(() => this.classList.add("slepen"), 0);
}

function dragEnd() {
  console.log("los");
  foto.classList.remove("slepen");
}

function dragOver(e) {
  e.preventDefault();
  console.log("in place!");
  bender.classList.add("happy");
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  console.log("leave");
  bender.classList.remove("happy");
}

function dragDrop(e) {
  console.log("drop");
  e.preventDefault();
  const burp = new Audio("sounds/burping.wav");
  setTimeout(() => burp.play(), 1000);
  setTimeout(() => bender.classList.remove("happy"), 1000);

  dropzone.appendChild(foto);
}

function backDrop(e) {
  e.preventDefault();
  console.log("teruggezet");
  biertje.appendChild(foto);
  foto.classList.remove("slepen");
  bender.classList.remove("happy");
}

function backdragOver(e) {
  e.preventDefault();
  console.log("in place!");
}

randomKnop.addEventListener("click", randomize);
stijlButtons.forEach((stijlButton) => {
  stijlButton.addEventListener("click", handleStijlButton);
});

/* -------------------------------------------------------------------------- */
/*                               Arrow Functions                              */
/* -------------------------------------------------------------------------- */

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  document.documentElement.style.setProperty("--regular", color);
});
bgpicker.addEventListener("input", () => {
  let color = bgpicker.value;
  document.documentElement.style.setProperty("--bg-regular", color);
});

slider.addEventListener("input", () => {
  let number = slider.value;
  document.getElementById("schaal").innerHTML =
    "Schaal " + (number * 100 + 20) + "%";
  document.documentElement.style.setProperty("--scale", number);

  if (number != 0.2) {
    bender.classList.remove("zwaai");
  } else {
    bender.classList.add("zwaai");
  }
});

bgfoto.addEventListener("input", () => {
  let url = bgfoto.value;
  console.log("aan");
  document.documentElement.style.setProperty("--foto", "url(" + url + ")");
});
