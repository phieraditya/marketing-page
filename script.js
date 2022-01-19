'use strict';

/////////////////////////////////////////////////////////////////
// Elements selection
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const header = document.querySelector('.header');

/////////////////////////////////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

/////////////////////////////////////////////////////////////////
// Button scrolling

/////////////////////////////////////////////////////////////////
// Page navigation

/////////////////////////////////////////////////////////////////
// Tabbed component

/////////////////////////////////////////////////////////////////
// Menu fade animation

/////////////////////////////////////////////////////////////////
// Sticky navigation

/////////////////////////////////////////////////////////////////
// Reveal sections

// Lazy loading images

/////////////////////////////////////////////////////////////////
// Slider

/////////////////////////////////////////////////////////////////
// Cookie

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
