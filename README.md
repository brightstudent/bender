# Bender

## Leuke dingen!
### Math.random() & Array's
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
### querySelectorAll() & Attributes 

Deze functie zorgt ervoor dat niet 2 functie tegelijk worden uitgevoerd. Bender kan slapen OF lopen, maar geen beide.</br>
* Als je op de slapen klikt, dan worden alle waardes verwijderd en wordt de `value="slapen"` toegevoegd. 
* Als je op de lopen klikt, dan worden alle waardes verwijderd en wordt de `value="lopen"` toegevoegd.
* Als je nog een keer op dezelfde knop kilkt, dan wordt de huidige waarde verwijderd.

De knoppen worden met de methode `querySelectorAll()` opgehaald. Er wordt speciefiek gevraagd naar een `button` met de attribute `name="stijl"`. De buttons hebben ook een attribute `value`. Deze value is de `class` die toegevoegd wordt aan Bender wanneer een van knoppen is geklikt.  

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


Ik heb bij het maken van Bender ook arrow functions ontdekt! 
```javascript
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
```
