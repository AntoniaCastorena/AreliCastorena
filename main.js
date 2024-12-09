let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #20b5d8;"> Desarrollo sitios web enfoncado a Front-end y Back-end.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
