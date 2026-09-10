const catalogItems = document.querySelectorAll('.catalog-item[data-category]');
const catalogArea = document.querySelector('.back');

let isDragging = false;
let hasMoved = false;
let suppressClick = false;
let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;

if (catalogArea) {
    catalogArea.addEventListener('pointerdown', (event) => {
        if (!event.target.closest('.catalog-item')) {
            return;
        }

        isDragging = true;
        hasMoved = false;
        startX = event.clientX - offsetX;
        startY = event.clientY - offsetY;
        catalogArea.classList.add('is-dragging');
        catalogArea.setPointerCapture(event.pointerId);
    });

    catalogArea.addEventListener('pointermove', (event) => {
        if (!isDragging) {
            return;
        }

        offsetX = event.clientX - startX;
        offsetY = event.clientY - startY;
        hasMoved = Math.abs(offsetX) > 4 || Math.abs(offsetY) > 4;
        catalogArea.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });

    catalogArea.addEventListener('pointerup', (event) => {
        isDragging = false;
        catalogArea.classList.remove('is-dragging');
        catalogArea.releasePointerCapture(event.pointerId);

        if (hasMoved) {
            suppressClick = true;
            setTimeout(() => {
                suppressClick = false;
            }, 0);
        }
    });
}

catalogItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (suppressClick) {
            return;
        }

        const category = item.dataset.category;
        const section = document.getElementById(category);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        window.location.href = `produtos.html?categoria=${encodeURIComponent(category)}`;
    });
});