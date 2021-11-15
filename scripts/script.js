/* -------------------------------------------------------------------------- */
/*                                  variables                                 */
/* -------------------------------------------------------------------------- */

const body = document.querySelector("body");
const bender = document.querySelector(".bender");
const randomKnop = document.querySelector(".randomknop");
const stijlButtons = document.querySelectorAll('button[name="stijl"');
const telKnop = document.querySelector(".zingen");
const zingen = new Audio("sounds/sing.mp3");
let isPlaying = false;
const foto = document.querySelector("img");
const dropzone = document.querySelector(".positie");
const biertje = document.querySelector("#biertje");
const colorInput = document.querySelector("#bendcolor");
const bgpicker = document.querySelector("#bgpicker");
const slider = document.querySelector("#slider");
const bgfoto = document.querySelector("#bgfoto");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function randomize() {
  let bgmode = ["regular", "bling", "old"];
  let bendermode = ["none", "goud", "roest"];
  let random = Math.floor(Math.random() * bgmode.length);

  body.classList.remove(...bgmode);
  body.classList.add(bgmode[random]);
  bender.classList.remove(...bendermode);
  bender.classList.add(bendermode[random]);

  document.getElementById("modus").innerHTML =
    "Dit is de " + bgmode[random] + " modus";

  console.log("background mode", bgmode[random], "Bender", bendermode[random]);
}

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

/* -------------------------------------------------------------------------- */
/*                                EventListeners                              */
/* -------------------------------------------------------------------------- */

bender.addEventListener("dblclick", armenIndeLucht);
telKnop.addEventListener("click", togglePlay);
foto.addEventListener("dragstart", dragStart);
foto.addEventListener("dragend", dragEnd);
dropzone.addEventListener("dragover", dragOver);
dropzone.addEventListener("dragenter", dragEnter);
dropzone.addEventListener("dragleave", dragLeave);
dropzone.addEventListener("drop", dragDrop);
biertje.addEventListener("drop", backDrop);
biertje.addEventListener("dragover", backdragOver);

