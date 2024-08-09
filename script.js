//alert("Hola mundo");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hola soy María Fernanda López')
  .pauseFor(300)
  .deleteChars(20)
  .typeString('Desarrolladora <strong>Front-End</strong> Jr')
  .typeString(', dispuesta a crear tu página deseada.')
  .pauseFor(1000)
  .start();