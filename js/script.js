const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const quantity = document.querySelectorAll(".quantity");
const total = document.querySelector(".total");
const prices = document.querySelectorAll(".unit-price");
const productCards = document.querySelectorAll(".product-card");
const heart = document.querySelectorAll(".fa-heart");

let elem =[0,1,2]

for (const i of elem) {
    plusButtons[i].addEventListener("click", function() {
        quantity[i].innerHTML++;
        updateTotal()
    });
    
    minusButtons[i].addEventListener("click", function() {
        if (quantity[i].innerHTML > 0) {
            quantity[i].innerHTML--;
            updateTotal()
        }
    });
    
    deleteButtons[i].addEventListener("click", function() {
        productCards[i].style.display = "none";
        quantity[i].innerHTML=0;
        updateTotal()
    });
    
    heart[i].addEventListener("click", function() {
        if (heart[i].style.color === "red") {
            heart[i].style.color = "black";
        } else {
            heart[i].style.color = "red";
        }
    });
}


function updateTotal() {
    let totalNum = 0    
    for(let i=0;i<prices.length;i++) {        
        let indPrice = parseInt(prices[i].innerHTML.replace("$", ""));
        totalNum+= indPrice * parseInt(quantity[i].innerHTML)
    }
    console.log(totalNum);
    
    total.innerHTML = totalNum +"$";
}
