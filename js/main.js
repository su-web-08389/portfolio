console.log('main.js 読み込まれてます');

document.addEventListener('DOMContentLoaded', () => {
  const fadeTargets = document.querySelectorAll('.js-fade');
  console.log('js-fade要素数:', fadeTargets.length);

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  });

  fadeTargets.forEach(target => {
    fadeObserver.observe(target);
  });
});