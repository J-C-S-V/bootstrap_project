const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter.typeString('The capital of the sun').pauseFor(200).start();
