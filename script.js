const apiUrl = 'https://fakestoreapi.com/products';

const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

const createProductList = (products) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.className = 'product-item';

        listItem.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" style="width:100px;"/>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        `;

        productList.appendChild(listItem);
    });
};

const handleFilterInput = (products) => {
    const filterInput = document.getElementById('filter');
    filterInput.addEventListener('input', () => {
        const query = filterInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(query)
        );
        createProductList(filteredProducts);
    });
};

const init = async () => {
    const products = await getData();
    createProductList(products);
    handleFilterInput(products);
};

init();
