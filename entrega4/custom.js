const catalog = [{title: "T-shirt", price: 19.99, currency: "USD", availability: true, stock: 99, img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
                {title: "Blouse", price: 24.99, currency: "USD", availability: true, stock: 69, img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                ]

catalog.push ({title: "Jeans", price: 17.99, currency: "USD", availability: true, stock: 76, img: "https://images.pexels.com/photos/1804075/pexels-photo-1804075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} )   
 


// Filter
const catalogPrice = catalog.filter(title => title.price < 20)
console.table(catalogPrice)

// Find

const findProduct = catalog.find(title => title.title === "T-shirt")
console.table(findProduct)

// Some

const productExist = catalog.some(title => title.title === "Jeans")
console.log(productExist)

// Map

const productList = catalog.map (title => title.title)
console.table(productList)

// Obtain Random product

let randomProduct = Math.round((Math.random() * 2))
console.log(randomProduct)
console.log(catalog[randomProduct])




for (let i = 0; i<catalog.length; i+=1){
cards.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${catalog[i].img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${catalog[i].title}</h5>
  <p class="card-text">${catalog[i].currency} ${catalog[i].price}</p>
  <p class="card-text">${"Only"} ${catalog[i].stock} ${"items left in stock"}</p>
  <a href="#" class="btn btn-primary">Shop now</a>
</div>
</div>` }