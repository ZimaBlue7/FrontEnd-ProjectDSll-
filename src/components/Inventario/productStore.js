
const productsArray = [
    {
        id: "1",
        title: "Martillo",
        price: 17000
    },
    {
        id: "2",
        title: "Bisturi",
        price: 4500
    },
    {
        id: "3",
        title: "Caja Clavos",
        price: 9400
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };