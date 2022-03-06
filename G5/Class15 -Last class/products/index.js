const productsUrl = "https://fakestoreapi.com/products";

// const fetchProductsWithThen = (apiUrl) => {
//   fetch(apiUrl)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

const results = document.getElementById("results");

const fetchProducts = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  printAllProducts(data, results);
};

window.addEventListener("load", () => {
  fetchProducts(productsUrl);
});

const printAllProducts = (productsArray, elemenetToPrint) => {
  productsArray.forEach((product) => printProduct(product, elemenetToPrint));
};

const printProduct = (product, element) => {
  console.log(product);
  //   element.innerHTML += `
  //     <div class="card" style="width: 18rem;">
  //     <img class="card-img-top" src="${product.image}" alt="Card image cap">
  //     <div class="card-body">
  //       <h5 class="card-title">${product.title}</h5>
  //       <p class="card-text">${product.description}</p>
  //       <a href="#" class="btn btn-primary">Buy</a>
  //     </div>
  //   </div>
  //     `;

  const { image, title, description } = product;

  element.innerHTML += `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>
  `;
};
