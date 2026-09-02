document.querySelectorAll('.catalog-item').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const category = item.dataset.category;

        if (!category) return;

        window.location.href = `produtos.html?categoria=${encodeURIComponent(category)}`;
    });
});