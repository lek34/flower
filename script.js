const text = "Hayo Mana Masakan Gua";
const typewriter = document.getElementById("typewriter");

function typeWriterEffect(text, element) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100); // Adjust speed by changing 100 to a different value
    }
  }
  type();
}

typeWriterEffect(text, typewriter);
