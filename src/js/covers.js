document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.covers-list-wrapper');
  wrappers.forEach(wrapper => {
    const list = wrapper.querySelector('.covers-list');
    if (list) {
      const clone = list.cloneNode(true);
      clone.classList.add('duplicate');
      wrapper.appendChild(clone);
    }
  });
});

const coversSection = document.querySelector('#covers');

if (coversSection) {
  const optionsCovers = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observerCovers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Section is in view');
        coversSection.classList.add('animate');
      } else {
        console.log('Section is out of view');
        coversSection.classList.remove('animate');
      }
    });
  }, optionsCovers);

  observerCovers.observe(coversSection);
} else {
  console.error('Element with id "covers" not found in the DOM.');
}
