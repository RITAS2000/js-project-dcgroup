document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const dropdown = document.getElementById('dropdown-menu');
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-link');
  
    // Показ/приховування дропдауну для десктопів
    menuBtn.addEventListener('click', () => {
      dropdown.classList.toggle('show');
    });
  
    // Відкрити мобільне меню
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  
    // Закрити мобільне меню
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  
    // Закрити меню при кліку по лінку
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  
    // Закрити дропдаун при кліку поза ним
    document.addEventListener('click', e => {
      if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  });
  