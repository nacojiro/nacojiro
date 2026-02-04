/* Fade */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
});
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

/* Cursor */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* Theme */
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light');
};
