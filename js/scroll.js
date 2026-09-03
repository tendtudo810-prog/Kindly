const catalogItems = document.querySelectorAll('.catalog-item[data-category]');

catalogItems.forEach((item) => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        const section = document.getElementById(category);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        window.location.href = `produtos.html?categoria=${encodeURIComponent(category)}`;
    });
});