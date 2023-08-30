const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');

const focusableEl = modal.querySelectorAll('a, button, input');
const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1];

function openModal() {
    modal.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.documentElement.style.overflow = 'auto';
}
function handleTab(e) {
    const activeEl = document.activeElement;
    if (e.key == 'Tab') {
        if (e.shiftKey) {
            if (activeEl === firstEl) {
                lastEl.focus();
            }
        } else {
            if (activeEl === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
    }
}

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
dim.addEventListener('click', closeModal);

firstEl.addEventListener('keydown', handleTab);
lastEl.addEventListener('keydown', handleTab)

window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active') && e.key === 'Escape') {
        closeModal();
    }
})