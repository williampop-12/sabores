function filterProducts() {
  // 1. Obtener el valor del campo de búsqueda y convertirlo a minúsculas
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  // 2. Obtener todos los elementos de la lista de productos
  const productList = document.getElementById('product-list');
  const products = productList.getElementsByTagName('li'); // Obtiene todos los <li> dentro de la lista

  // 3. Iterar sobre cada producto
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    // Obtener el texto del nombre del producto (dentro del <h3>) y de la descripción (dentro del <p>)
    const productName = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
    const productDescription = product.getElementsByTagName('p')[0].textContent.toLowerCase();

    // 4. Comprobar si el término de búsqueda está en el nombre o la descripción del producto
    if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
      // Si coincide, mostrar el producto
      product.style.display = 'block'; // O 'flex' si usas flexbox como en el CSS
    } else {
      // Si no coincide, ocultar el producto
      product.style.display = 'none';
    }
  }
}

// Opcional: Permitir buscar al presionar "Enter" en el campo de búsqueda
document.getElementById('searchInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    filterProducts();
  }
});