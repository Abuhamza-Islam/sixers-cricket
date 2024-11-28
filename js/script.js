const allAddToCartBtn = document.getElementsByClassName("add-to-cart");
const ArrayOfAddtoCartBtn = Array.from(allAddToCartBtn);
// for(const btn of ArrayOfAddtoCartBtn){
//     btn.addEventListener('click', function(event){
//         console.log(event.target);
//     })
// }

// for(const btn of allAddToCartBtn){
//     console.log(btn);
// }

ArrayOfAddtoCartBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

        const name = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;

        //create div and append it to the card-added;
        let div = document.getElementById('card-added');
        let div2 = document.createElement('div');
        div2.classList.add('flex','justify-between','w-full');
        div2.innerHTML = `  <p class="w-[33%]">${name}</p>
                    <p class="w-[33%]">${price}</p>
                    <p class="w-[33%]">${category}</p>`
        div.appendChild(div2);
    //    e.target.classList.add('hidden')
    e.target.disabled = true;

    })
})

