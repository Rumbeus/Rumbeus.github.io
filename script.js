document.getElementById('lang-toggle').addEventListener('click', function() {
    const ruContent = document.getElementById('ru');
    const enContent = document.getElementById('en');
    const button = this;

    if (ruContent.style.display === 'none') {
        ruContent.style.display = 'block';
        enContent.style.display = 'none';
        button.textContent = '🇬🇧 English';
    } else {
        ruContent.style.display = 'none';
        enContent.style.display = 'block';
        button.textContent = '🇷🇺 Русский';
    }
});