const text = `Hello. I’m Fullstack developer Lloyd Jefferson.`;
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById('typed-text').textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
window.onload = typeWriter;
