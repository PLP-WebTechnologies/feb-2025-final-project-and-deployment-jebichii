const products = [
    {
        id: 1,
        name: "2x4 Premium Lumber",
        price: 8.99,
        image: "https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "lumber",
        description: "High-quality construction grade lumber, kiln-dried for stability."
    },
    {
        id: 2,
        name: "Portland Cement (94 lb)",
        price: 12.99,
        image: "https://images.pexels.com/photos/4491918/pexels-photo-4491918.jpeg",
        category: "concrete",
        description: "Type I/II Portland cement suitable for general construction."
    },
    {
        id: 3,
        name: "Heavy-Duty Power Drill",
        price: 159.99,
        image: "https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "tools",
        description: "20V cordless drill with brushless motor."
    },
    {
        id: 4,
        name: "Construction Screws (5 lb)",
        price: 29.99,
        image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
        category: "hardware",
        description: "Corrosion-resistant coating, ideal for decking."
    }
];

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Display featured products on homepage
const featuredProductsContainer = document.getElementById('featuredProducts');
if (featuredProductsContainer) {
    products.forEach(product => {
        featuredProductsContainer.innerHTML += createProductCard(product);
    });
}