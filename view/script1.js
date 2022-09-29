

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:3000/orders')
    .then(res => {
        console.log(res.data[0].products);
        for(var i =0; i< res.data.length; i++) {
            addProductToOrder(res.data[i].products[0]);
        }
    })
    .catch(err => console.log(err));
})

function addProductToOrder(product) {
    var parent = document.getElementById('order-content');
    var childNode = document.createElement('div')
    childNode.id = product.title;
    //console.log(product.id);
    //console.log(imgUrl);
    var childNodeContent =
    `<h3> ${product.title} </h3>
    <div class="img-container">
        <img src="${product.imageUrl}" alt="" class="prod-images">
    </div>
    <div>
        <span>$${product.price}</span>
    </div>`;

    childNode.innerHTML = childNodeContent;
    parent.appendChild(childNode);

}