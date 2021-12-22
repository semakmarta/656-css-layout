(function(){



const products = [
    {
        title: "Baby Yoda",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, totam?",
        image: "img/baby-yoda.svg",
        price: 10.99
    },
    {
        title: "Banana",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, totam?",
        image: "img/banana.svg",
        price: 10.99
    },
    {
        title: "Girl",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, totam?",
        image: "img/girl.svg",
        price: 10.99
    },
    {
        title: "Viking",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, totam?",
        image: "img/viking.svg",
        price: 10.99
    }
];

function renderProducts(products) {
    const productsContainer = document.querySelector('.main-products__list');
    for (const product of products) {
        productsContainer.innerHTML = html +=
        `<article class="product-card">
        <img class="product-card__image" src="${product.image}" alt="${product.title}">
        <h3 class="product-card__h3">${product.title}</h3>
        <p class="product-card__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, totam?${product.description}</p>
        <div class="product-card__buttons">
            <button class="product-card__buttons-info button button-card">Info</button>
            <button class="product-card__buttons-buy button button-card">Buy - ${product.price}</button>
        </div>
    </article>`
    }
    
    productsContainer.innerHTML = html;
}

renderProducts(products);
})();