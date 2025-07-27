const products = [
  {name: 'Produkt 1', price: 100},
  {name: 'Produkt 2', price: 150},
  {name: 'Produkt 3', price: 200},
  {name: 'Produkt 4', price: 250},
  {name: 'Produkt 5', price: 300},
  {name: 'Produkt 6', price: 350},
  {name: 'Produkt 7', price: 400},
  {name: 'Produkt 8', price: 450},
  {name: 'Produkt 9', price: 500},
  {name: 'Produkt 10', price: 550},
  {name: 'Produkt 11', price: 600},
  {name: 'Produkt 12', price: 650},
  {name: 'Produkt 13', price: 700},
  {name: 'Produkt 14', price: 750},
  {name: 'Produkt 15', price: 800},
  {name: 'Produkt 16', price: 850},
  {name: 'Produkt 17', price: 900},
  {name: 'Produkt 18', price: 950},
  {name: 'Produkt 19', price: 1000},
  {name: 'Produkt 20', price: 1050}
];

const container = document.getElementById('products');
products.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `<h3>${p.name}</h3>
    <p>${p.price} kr</p>
    <input type="number" min="0" value="0" id="qty${i}">`;
  container.appendChild(card);
});

document.getElementById('offerForm').addEventListener('submit', e => {
  e.preventDefault();
  let total = 0;
  products.forEach((p, i) => {
    const q = parseInt(document.getElementById('qty' + i).value) || 0;
    total += q * p.price;
  });
  const lower = Math.floor(total * 0.9);
  const upper = Math.ceil(total * 1.1);
  document.getElementById('result').textContent =
    `Ungefärligt pris: ${lower}-${upper} kr`;
});
