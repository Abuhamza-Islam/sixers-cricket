function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}
