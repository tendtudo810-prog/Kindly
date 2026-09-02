const products = [
    { name: 'Camiseta', category: 'roupas' },
    { name: 'Vestido', category: 'roupas' },
    { name: 'Bola', category: 'brinquedos' },
    { name: 'Jogo educativo', category: 'brinquedos' },
    { name: 'Tênis', category: 'calcados' },
    { name: 'Sandália', category: 'calcados' },
    { name: 'Óculos', category: 'acessorios' },
    { name: 'Relógio', category: 'acessorios' },
    { name: 'Celular', category: 'eletronicos' },
    { name: 'Fone de ouvido', category: 'eletronicos' },
    { name: 'Livro', category: 'outros' },
    { name: 'Mochila', category: 'outros' }
];

const categoryNames = {
    roupas: 'Roupas',
    brinquedos: 'Brinquedos',
    calcados: 'Calçados',
    acessorios: 'Acessórios',
    eletronicos: 'Eletrônicos',
    outros: 'Outros'
};

const params = new URLSearchParams(window.location.search);
const category = params.get('categoria');
const visibleProducts = category
    ? products.filter((product) => product.category === category)
    : products;
const productsContainer = document.getElementById('products');
const categoryTitle = document.getElementById('category-title');

if (category && categoryNames[category]) {
    categoryTitle.textContent = `Categoria: ${categoryNames[category]}`;
}

visibleProducts.forEach((product) => {
    const productCard = document.createElement('article');
    productCard.className = 'product-card';
    productCard.innerHTML = `<h2>${product.name}</h2><p>${categoryNames[product.category]}</p>`;
    productsContainer.appendChild(productCard);
});
