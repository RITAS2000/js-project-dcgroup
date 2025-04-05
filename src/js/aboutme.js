import Accordion from 'accordion-js';
import "accordion-js/dist/accordion.min.css";
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';


// Initialisiere accordion-js
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionContent = document.querySelectorAll('.accordion-content');


accordionItems.forEach(item =>
    item.addEventListener("click", () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains("active")) {
            activeContent.classList.remove("active");
        } else {
            accordionContent.forEach(element => {
                element.classList.remove("active");
                element.style.maxHeight = '0';
            });

            accordionItems.forEach(element => element.classList.remove("active"));

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
       }

    })

);