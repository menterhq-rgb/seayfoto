// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const items = document.querySelectorAll('.portfolio-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    modalImage.src = item.dataset.full;
    modal.classList.add('open');
  });
});

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('open');
});
