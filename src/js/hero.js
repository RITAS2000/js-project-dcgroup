function printTextAnimated(elementId, text, delay) {
  let i = 0;
  const outputElement = document.getElementById(elementId);
  outputElement.style.whiteSpace = 'pre-line';

  function printChar() {
    if (i < text.length) {
      outputElement.textContent += text.charAt(i);
      i++;
      setTimeout(printChar, delay);
    }
  }

  printChar();
}

printTextAnimated(
  'typed-text',
  'Hello.\nI’m Fullstack developer Lloyd Jefferson.',
  50
);
