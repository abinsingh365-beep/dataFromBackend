fetch("http://localhost:4000/products")
.then(res => res.json())
.then(data => {

let container = document.getElementById("products");

data.forEach(product => {

container.innerHTML += `
<div class="card">
<img src="${product.image}">
<h3>${product.title}</h3>
<p> ${product.price}</p>
</div>
`;

});

});
