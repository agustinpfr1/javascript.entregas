// Pizza slice number that increments when you click
let i  = parseInt(localStorage.getItem('pizzaSlice'))
let pizzaCounter = document.getElementById("pizzaCounter")
pizzaCounter.addEventListener("click", buttonClick)

function buttonClick() {
   let pizzaClick = document.getElementById('inc');
   pizzaClick.innerHTML = (i+=1);
    localStorage.setItem('pizzaSlice', pizzaClick.innerHTML);

} 

// Pizza slices per second

let upgradeNumber = 1;
let slicesPerSecond = upgradeNumber;
document.querySelector("#secondCounter").innerHTML = slicesPerSecond;
i += i + slicesPerSecond
let interval = setInterval(increment,  (1000 / slicesPerSecond));

function increment(){
i+=1;
document.getElementById('inc').innerHTML = (i);
console.log(i)
}

// Logic for the upgrades

let upgrade1 = document.querySelector("#purchaseUpgrade")
upgrade1.addEventListener("click", purchaseUpgrade)
let upgradeAmount = 0

function purchaseUpgrade() {
    let upgradeCost = 10;
    upgradeCost += (upgradeCost / 10);
    if(i >= upgradeCost) {
       i = i - upgradeCost
       document.getElementById('inc').innerHTML = i;
     let nou = document.querySelector("#upgradeQuantity1 span");
     nou = parseInt(localStorage.getItem('upgrade#'))
     nou.innerHTML++
     localStorage.setItem('upgrade#', nou.innerHTML)

    }else{
        alert("You don't have enough slices to make this purchase")
    }

}



// reset button

let reset = document.getElementById("resetButton") 
reset.addEventListener("click", resetGame)

function resetGame() {
    i = 0;
}