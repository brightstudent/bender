# Bender

## Leuke dingen!
### Array's & Math.random() 
In deze functie heb ik twee dingen geleerd:
1. "Random" gedrag genereren door `Math.floor(Math.random() * max)` te gebruiken. 
2. Random gebruiken in combinatie met arrays om een willekeurige stijling te kiezen uit een lijst.

```Javascript
function randomize() {
  let bgmode = ["regular", "bling", "old"];
  let random = Math.floor(Math.random() * bgmode.length);
  
  body.classList.remove(...bgmode);
  body.classList.add(bgmode[random]);
}
```
### Attributes & querySelectorAll()  

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
### Arrow functions & setProperty()

Ik heb bij het maken van Bender ook arrow functions ontdekt! Deze heb ik voor de inputs gebruikt, om bepaalde waardes op te halen en veranderen.

#### Voorbeeld 1:

In de eerste functie heb ik een `input` met de type `color`. Deze gebruik ik om een willekeurige kleur te kiezen. De gekozen kleur wordt in de variable `color` gedrukt, vervolgens wordt de `setProperty()` om een waarde in de root aan te passen.
```HTML
<button class="colorbtn">Kleur<input id="bgpicker" type="color"></button>
```
```javascript
bgpicker.addEventListener("input", () => {
  let color = bgpicker.value;
  document.documentElement.style.setProperty("--bg-regular", color);
});
```
