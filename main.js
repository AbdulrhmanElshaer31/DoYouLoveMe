let no = document.getElementById('no');

no.addEventListener('mousemove', () => {
    const maxX = window.innerWidth - no.offsetWidth;
    const maxY = window.innerHeight - no.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    no.style.position = 'absolute';
    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
});
