/* Scroll fade */
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

document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    modalTitle.textContent = item.dataset.title;
    modalDesc.textContent = item.dataset.desc;
    modal.style.display = 'flex';
  });
});

document.getElementById('closeModal').onclick = () => {
  modal.style.display = 'none';
};

/* Theme toggle */
const toggle = document.getElementById('themeToggle');
toggle.onclick = () => {
  document.body.classList.toggle('light');
};
