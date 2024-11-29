const allbtn = document.getElementsByClassName("add-to-cart");

for (const btn of allbtn) {
  btn.addEventListener("click", function (event) {
    //get access name, price and category
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;

       
     
       //update budget
    const budget = getConvertedValue('budget');
    document.getElementById('budget').innerText = budget-parseInt(price);

    //cart count
    const cartCount = getConvertedValue('cart');
    if(cartCount+1 > 6){
        alert('Your limit 6 is over');
        return;
     }
     document.getElementById("cart").innerText = cartCount + 1;
     //left count
     const leftCount = getConvertedValue('left');
     if(leftCount-1 == -1){
        alert('You finish your target')
        return;
     }
     document.getElementById('left').innerText = leftCount - 1;
  
    //disabled the button
    event.target.setAttribute("disabled",false);
    //set background color on selected
    console.log(event.target.parentNode.style.backgroundColor = 'red')

    //create div and append it to the card-added;
    let div = document.getElementById("card-added");
    let div2 = document.createElement("div");
    div2.classList.add("flex", "justify-between", "w-full",'text-green-600');
    div2.innerHTML = `<p class="w-[33%]">${name}</p>
               <p class="w-[33%]">${price}</p>
               <p class="w-[33%]">${category}</p>`;
    div.appendChild(div2);

    //updated toal price
    updateTotalCost(price);
    //updated grandTotal price
    updateGrandTotal();

   
    
  });
}







function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
  if (status==undefined) {
    
    document.getElementById("grand-total").innerText = totalCost;
  } else {
     const couponCode = document.getElementById('coupon-code').value;
     if(couponCode == 'love420'){
       const discountedPrice = totalCost * (20/100);
       console.log(discountedPrice);
       document.getElementById("grand-total").innerText = totalCost-discountedPrice;
     }
     else{
        alert('Please Enter Valid Coupon Code');
     }
  }
}



function updateTotalCost(value) {
  const totalCost = getConvertedValue("total-cost");
  const sum = totalCost + parseInt(value);
  document.getElementById("total-cost").innerText = sum;
}

function getConvertedValue(id) {
  const p = document.getElementById(id).innerText;
  const convertPrice = parseInt(p);
  return convertPrice;
}
