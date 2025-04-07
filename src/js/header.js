// Select DOM elements for modal and navigation interactions
const modalWindow = document.querySelector(".backdrop");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modalMenu = document.querySelector(".navi-modal-wrapper");
const modalOrderLink = document.querySelector(".modal-order-link"); 

const navigation = document.querySelector(".navi");
const menu = document.querySelector(".menu");
const itemsMenu = document.querySelector(".nav-wrapper");

// Add event listeners for modal interactions
openMenuBtn.addEventListener("click", interactionModalWindow);
closeModalBtn.addEventListener("click", interactionModalWindow);
modalMenu.addEventListener("click", interactionModalWindow);
modalOrderLink.addEventListener("click", interactionModalWindow); 

// Add event listeners for desktop/tablet navigation
menu.addEventListener("click", interactionMenu);
itemsMenu.addEventListener("click", interactionMenu);

// Function to toggle the modal window
function interactionModalWindow() {
  modalWindow.classList.toggle("is-open");
  document.body.classList.toggle("modal-open");
  const isOpen = modalWindow.classList.contains("is-open");
  openMenuBtn.setAttribute("aria-expanded", isOpen);
}

// Function to toggle the navigation (desktop/tablet)
function interactionMenu() {
  navigation.classList.toggle("is-open");
}