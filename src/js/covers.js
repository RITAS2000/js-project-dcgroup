const coversSection = document.querySelector('#covers');

document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.covers-list-wrapper');
  wrappers.forEach(wrapper => {
    const list = wrapper.querySelector('.covers-list');
    const items = Array.from(list.children);
    if (items.length > 0) {
      const lastItemHTML = items[items.length - 1].outerHTML;

      const remainingItemsHTML = items
        .slice(0, items.length - 1)
        .map(item => item.outerHTML)
        .join('');

      list.innerHTML += lastItemHTML + remainingItemsHTML;
    }
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
