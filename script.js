let canvas;

function setup() {
  let kontejner = document.getElementById('platno');
  canvas = createCanvas(600, 480); 
  canvas.parent(kontejner);
  background(255);

  Logo();
}

function draw() {
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(4);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function cist() {
  background(255);
}

function ukaz() {
  let img = document.getElementById('logoOriginal');
  img.src = aktualni.img;
  const logoBox = document.getElementById('logoBox');
  logoBox.style.display = 'flex';
  logoBox.classList.add('flash');
  setTimeout(() => logoBox.classList.remove('flash'), 300);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnNove').addEventListener('click', Logo);
  document.getElementById('btnCist').addEventListener('click', cist);
  document.getElementById('btnUkaz').addEventListener('click', ukaz);
});
