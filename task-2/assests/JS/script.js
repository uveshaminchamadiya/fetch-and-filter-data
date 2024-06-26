const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

const getData = async () => {
    const res = (await fetch(apiUrl));
    const data = res.json()
    return data
}

const renderProducts = (products) => {
    const cards = document.getElementById('cards');
    const cardFragment = document.createDocumentFragment();

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <a href='${product.url}' target='_black'><img src="${product.thumbnailUrl}"></img><h3>${product.title}</h3></a>`;

        cardFragment.appendChild(card);
    });

    cards.appendChild(cardFragment);
}

const init = async () => {
    const products = await getData();
    renderProducts(products)
}

init()