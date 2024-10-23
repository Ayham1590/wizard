document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');

        items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });

        const totalItems = items.length * 2;
        const itemWidth = 350;
        const totalWidth = totalItems * itemWidth;
        carousel.style.width = totalWidth + 'px';
    });
});
