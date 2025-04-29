let x = 0;
let velocidad = 0;
let tiempo = 0;
let posInicial = 0;
let startTime = 0;
let corriendo = false;
let tiempoActual = 0;
let carroImg;

function preload() {
  carroImg = loadImage("img/redbull1.png"); // Aquí asumiendo la imagen está en 'img/carro.png'
}

function setup() {
  createCanvas(1480, 250); // Solo crea el canvas aquí
  background(250);
  textSize(16);
}

function draw() {
  stroke(0);
strokeWeight(2);
line(posInicial, height / 2 + 50, width + 30, height / 2 + 50);

// Marcas de medición cada 50 píxeles
let espacioEntreMarcas = 50;
let numMarcas = Math.floor((width - posInicial) / espacioEntreMarcas);
textSize(12);
fill(0);

for (let i = 0; i <= numMarcas; i++) {
  let xMarca = posInicial + i * espacioEntreMarcas;

  stroke(0);
  strokeWeight(1);
  line(xMarca, height / 2 + 45, xMarca, height / 2 + 55);

  // Ahora toma en cuenta la posición inicial en la etiqueta
  noStroke();
  let distanciaEnMetros = posInicial + i * espacioEntreMarcas;
  text(`${distanciaEnMetros.toFixed(0)} m`, xMarca - 10, height / 2 + 70);
}

  if (corriendo) {
    tiempoActual = (millis() - startTime) / 1000;

    if (tiempoActual <= tiempo) {
      x = posInicial + velocidad * tiempoActual;
      background(250);

      // Dibuja el carro
      image(carroImg, x - 100, height / 2 - 15, 100, 60);

      // Posición
      fill(50, 50, 200);
      text(`Distancia = ${x.toFixed(2)} m`, x + 110, height / 2 - 20);

      // Tiempo
      fill(0);
      textSize(18);
      text(`Tiempo: ${tiempoActual.toFixed(2)} s`, 20, height - 20);
    } else {
      corriendo = false;
    }
  }
}

function iniciarMRU() {
  velocidad = parseFloat(document.getElementById('velocidad').value) || 0;
  tiempo = parseFloat(document.getElementById('tiempo').value) || 0;
  posInicial = parseFloat(document.getElementById('posInicial').value) || 0;
  startTime = millis();
  corriendo = true;
}





