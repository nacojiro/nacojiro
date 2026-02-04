/* Fade on scroll */
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fades.forEach(el => observer.observe(el));

/* Modal */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    modalTitle.textContent = item.dataset.title;
    modalDesc.textContent = item.dataset.desc;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

/* Theme toggle */
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});
