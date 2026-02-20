const list = document.querySelector('.works__list');
const nextBtn = document.querySelector('.works__btn--next');
const prevBtn = document.querySelector('.works__btn--prev');

nextBtn.addEventListener('click', () => {
  list.scrollBy({ left: 400, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  list.scrollBy({ left: -400, behavior: 'smooth' });
});
