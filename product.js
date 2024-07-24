fetch(`https://dummyjson.com/products`)
.then(response => response.json())
.then(res => {
    const data = res.products;
    let rows = "";
    data.forEach(pro => {
        rows += `<tr><td>${pro.id}</td>
                <td>${pro.title}</td>
              <td>${pro.description}</td>
                <td>${pro.category}</td>
                <td>${pro.price}</td>
                <td>${pro.discountPercentage}</td>
                <td>${pro.rating}</td>
                <td>${pro.stock}</td>
                <td>${pro.warrantyInformation}</td>
                <td>${pro.shippingInformation}</td>
                <td><img src="${pro.thumbnail}" style =" height: 100px;"/></td>
             
                </tr>`
        
    });
    document.getElementById("proData").innerHTML = rows;

})
.catch(error => console.log(error.message))
