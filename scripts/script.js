// Bender en zijn achtergrond aanpassen

var body = document.querySelector("body");
var bender = document.querySelector(".bender");
var randomKnop = document.querySelector(".randomknop");

function randomize() {
  var bgmode = ["regular", "bling", "old"];
  var bendermode = ["none", "goud", "roest"];
  var random = Math.floor(Math.random() * bgmode.length);

  body.classList.remove(...bgmode);
  body.classList.add(bgmode[random]);
  bender.classList.remove(...bendermode);
  bender.classList.add(bendermode[random]);

  document.getElementById("modus").innerHTML =
    "Dit is de " + bgmode[random] + " modus";

  console.log("background mode", bgmode[random], "Bender", bendermode[random]);
}

randomKnop.addEventListener("click", randomize);

// zodat slapen en lopen niet door elkaar gaan.

var stijlButtons = document.querySelectorAll('button[name="stijl"');

function handleStijlButton(event) {
  if (bender.classList.contains(event.target.value)) {
    bender.classList.remove(event.target.value);
    dropzone.classList.remove("gone");
  } else {
    stijlButtons.forEach((stijlButton) => {
      bender.classList.remove(stijlButton.value);
    });
    bender.classList.add(event.target.value);
    biertje.appendChild(foto);
    dropzone.classList.add("gone");
  }
}

stijlButtons.forEach((stijlButton) => {
  stijlButton.addEventListener("click", handleStijlButton);
});

// Bender kliken om zijn armen omhoog te tillen.

function armenIndeLucht() {
  bender.classList.toggle("happy");
  console.log("Bender is raising his arms");
}

bender.addEventListener("dblclick", armenIndeLucht);

// Bender gaat tellen

var telKnop = document.querySelector(".telknop");
var counting = new Audio("sounds/counting.wav");

var isPlaying = false;

function togglePlay() {
  isPlaying ? counting.pause() : counting.play();
}

counting.onplaying = function () {
  isPlaying = true;
};
counting.onpause = function () {
  isPlaying = false;
};

telKnop.addEventListener("click", togglePlay);

// ------------- Bier geven aan Bender ------------- //

var foto = document.querySelector("img");
var dropzone = document.querySelector(".positie");

foto.addEventListener("dragstart", dragStart);
foto.addEventListener("dragend", dragEnd);

function dragStart() {
  console.log("draging...");
  setTimeout(() => this.classList.add("slepen"), 0);
}

function dragEnd() {
  console.log("los");
  foto.classList.remove("slepen");
}

dropzone.addEventListener("dragover", dragOver);
dropzone.addEventListener("dragenter", dragEnter);
dropzone.addEventListener("dragleave", dragLeave);
dropzone.addEventListener("drop", dragDrop);

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
  var burp = new Audio("sounds/burping.wav");
  setTimeout(() => burp.play(), 1000);
  setTimeout(() => bender.classList.remove("happy"), 1000);

  dropzone.appendChild(foto);
}

// backdroppen van de bier

var biertje = document.querySelector("#biertje");

biertje.addEventListener("drop", backDrop);
biertje.addEventListener("dragover", backdragOver);

function backDrop(e) {
  e.preventDefault();
  console.log("het werkt!");
  biertje.appendChild(foto);
  foto.classList.remove("slepen");
  bender.classList.remove("happy");
}

function backdragOver(e) {
  e.preventDefault();
  console.log("in place!");
}

// voor de verborgen knop op bender om zijn kleur te veranderen

var colorInput = document.querySelector("#bendcolor");

colorInput.addEventListener("input", () => {
  var color = colorInput.value;
  document.documentElement.style.setProperty("--regular", color);
});

// achtergrondkleur aanpassen met een knop in de regular modus

var bgpicker = document.querySelector("#bgpicker");

bgpicker.addEventListener("input", () => {
  var color = bgpicker.value;
  document.documentElement.style.setProperty("--bg-regular", color);
});

// slider om Bender te schalen bij 0.2 gaat hij zwaaien met class zwaai

var slider = document.querySelector("#slider");

slider.addEventListener("input", () => {
  var number = slider.value;
  document.getElementById("schaal").innerHTML =
    "Schaal " + (number * 100 + 20) + "%";
  document.documentElement.style.setProperty("--scale", number);

  if (number != 0.2) {
    bender.classList.remove("zwaai");
  } else {
    bender.classList.add("zwaai");
  }
});

// soor een img url te plaasten in de text box verandert de achtergrond in Bling modus

var bgfoto = document.querySelector("#bgfoto");

bgfoto.addEventListener("input", () => {
  var url = bgfoto.value;
  console.log("aan");
  document.documentElement.style.setProperty("--foto", "url(" + url + ")");
});
