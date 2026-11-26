const form = document.getElementById('productForm');
const list = document.getElementById('productList');
const message = document.getElementById('message');
async function loadProducts() {
  list.textContent = 'Loading products...';
  try { const response = await fetch('/api/products'); if (!response.ok) throw new Error('Could not load products'); const products = await response.json(); list.replaceChildren();
    if (!products.length) { list.textContent = 'No products available.'; return; }
    products.forEach(product => { const card = document.createElement('article'); card.className = 'product-card'; const title = document.createElement('h3'); title.textContent = product.name; const id = document.createElement('p'); id.className='muted'; id.textContent=`Product ID: ${product.id}`; const price = document.createElement('p'); price.textContent=`Price: ₹${product.price}`; const rating = document.createElement('p'); rating.textContent=`Rating: ${product.rating} / 5 ★`; card.append(title,id,price,rating); list.appendChild(card); });
  } catch(error) { list.textContent = error.message; }
}
form.addEventListener('submit', async event => { event.preventDefault(); message.className=''; const payload={name:document.getElementById('name').value.trim(),price:document.getElementById('price').value,rating:document.getElementById('rating').value};
  try { const response=await fetch('/api/products',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); const result=await response.json(); if(!response.ok) throw new Error(result.message||'Unable to add product'); message.textContent=result.message; message.className='success'; form.reset(); await loadProducts(); } catch(error) { message.textContent=error.message; message.className='error'; }
});
loadProducts();
