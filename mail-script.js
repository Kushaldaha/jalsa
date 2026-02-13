const mailbox = document.getElementById('mailbox');
const letterPreview = document.getElementById('letter-preview');
const letterOverlay = document.getElementById('letter-overlay');
const closeLetter = document.getElementById('close-letter');

mailbox.addEventListener('click', () => {
    mailbox.classList.toggle('active');
});

letterPreview.addEventListener('click', (e) => {
    e.stopPropagation();
    letterOverlay.style.display = 'flex';
});

closeLetter.addEventListener('click', () => {
    letterOverlay.style.display = 'none';
});