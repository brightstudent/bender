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
    setTimeout(() => bender.classList.remove("lopen"), 8100);
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
var counting = new Audio("_eff/counting.wav");

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
  var burp = new Audio("_eff/burping.wav");
  setTimeout(() => burp.play(), 1000);
  setTimeout(() => bender.classList.remove("happy"), 1000);

  dropzone.appendChild(foto);
}

// backdroppen van de bier

var biertje = document.querySelector(".biertje");

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

var colorInput = document.querySelector("#bendcolor");

colorInput.addEventListener("input", () => {
  var color = colorInput.value;
  document.documentElement.style.setProperty("--regular", color);
  // document.documentElement.style.setProperty('--roest', color);
});

var bgpicker = document.querySelector("#bgpicker");

bgpicker.addEventListener("input", () => {
  var color = bgpicker.value;
  document.documentElement.style.setProperty("--bg-regular", color);
  // document.documentElement.style.setProperty('--roest', color);
});

var slider = document.querySelector("#slider");

// document.getElementById("hier").innerHTML = 'Schalen ' + '0.8';

slider.addEventListener("input", () => {
  var number = slider.value;
  document.getElementById("schaal").innerHTML =
    "Schaal " + (number * 100 + 20) + "%";
  document.documentElement.style.setProperty("--scale", number);

  if (number != 0.2) {
    // document.documentElement.style.removeProperty('--bg-regular');
    bender.classList.remove("zwaai");
  } else {
    // document.documentElement.style.setProperty('--bg-regular', 'red');
    bender.classList.add("zwaai");
  }
});


var pic = document.querySelector("#pic");

pic.addEventListener("input", () => {
  var url = pic.value;
//   hier.innerHTML = "datum is " + url;
  console.log('aan');
  document.documentElement.style.setProperty("--foto", "url(" + url +")");
});
