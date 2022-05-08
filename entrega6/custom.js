const catalog = [{title: "T-shirt", price: 19.99, currency: "USD", availability: true, stock: 5, img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
                {title: "Blouse", price: 24.99, currency: "USD", availability: true, stock: 18, img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                ]

catalog.push ({title: "Jeans", price: 17.99, currency: "USD", availability: true, stock: 25, img: "https://images.pexels.com/photos/1804075/pexels-photo-1804075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} )   
 


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

// DOM
for (let i = 0; i<catalog.length; i+=1){

    let domIMG = document.querySelectorAll(".card img")
    domIMG[i].setAttribute("src", `${catalog[i].img}`)
      
    let domTitle = document.querySelectorAll(".card-title")
    domTitle[i].innerHTML = `${catalog[i].title}`
    
    let domPrice = document.querySelectorAll(".card-price")
    domPrice[i].innerHTML = `${catalog[i].currency} ${catalog[i].price}`
    
    let domStock = document.querySelectorAll(".card-stock")
    if (catalog[i].stock > 0) {
domStock[i].innerHTML = `${"Only"} ${catalog[i].stock} ${"items left in stock"}`;
    }else if (catalog[i].stock === 0){
        domStock[i].innerHTML = `${"No items left in stock"}`;
    }
}

// Add to cart
let cartAmount = 0;
for (let i = 0; i<catalog.length; i+=1){

let addToCart = document.getElementsByClassName('btn')[i];

addToCart.addEventListener("click", clickButton)
if (catalog[i].stock <= 0) {
    addToCart.removeEventListener("click", clickButton)
}

function clickButton() {    
    console.log("You have added an item to cart");
    catalog[i].stock += -1;
    cartAmount = cartAmount + catalog[i].price
    console.log(cartAmount)
    console.log(catalog[i].stock)
    let domStock = document.querySelectorAll(".card-stock")
domStock[i].innerHTML = `${"Only"} ${catalog[i].stock} ${"items left in stock"}`

let cartCheckout = document.querySelector(".checkoutTotal")
cartCheckout.innerHTML = `${"Total: $"}${(cartAmount).toFixed(2)}`


if (catalog[i].stock === 0) {
    let noStock = document.getElementsByClassName('btn btn-primary')[i];
    console.log(noStock)
    noStock.classList.add("disabled");
    addToCart.disabled = true;
}

let cartCard = `<div class="card mb-3 cartCard" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${catalog[i].img}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${catalog[i].title}</h5>
      <p class="card-text card-price">${catalog[i].currency} ${catalog[i].price}</p>
    </div>
  </div>
</div>
</div>`

let cardCheckout = document.querySelector("#cartCards") 
cardCheckout.innerHTML += (cartCard)

}
}


/*
let checkoutTotal = document.querySelector(checkoutTotal) 
checkoutTotal.innerHTML = cartAmount();

function cartAmount() {



} */