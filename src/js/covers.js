const coversSection = document.querySelector('#covers');
const coversLists = document.querySelectorAll('.covers-list');

document.addEventListener('DOMContentLoaded', () => {
  const coversLists = document.querySelectorAll('.covers-list');
  coversLists.forEach(list => {
    list.innerHTML += list.innerHTML;
  });
});

if (coversSection) {
  const optionsCovers = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observerCovers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        coversSection.classList.add('animate');
      } else {
        coversSection.classList.remove('animate');
      }
    });
  }, optionsCovers);

  observerCovers.observe(coversSection);
} else {
  console.error('Element with id "covers" not found in the DOM.');
}
