
document.addEventListener('mousemove', (event) => {
    const light = document.querySelector('.light');
    const { clientX: x, clientY: y } = event;
    
    // Update position of the light element
    light.style.transform = `translate3d(${x - light.offsetWidth / 2}px, ${y - light.offsetHeight / 2}px, 0)`;
});