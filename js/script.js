var allProducts = document.querySelectorAll(".card-body h5")

var content = document.querySelector("#content")

var btn = document.querySelector("#btn1")

var div = document.querySelector("#div1")

var totalPrice = 0
//  /////////////////////////////////////////////////////////////////////////////////////////
allProducts.forEach(function (item){
    item.onclick = function (){
       totalPrice += +(item.getAttribute("price"))
       content.innerHTML += item.textContent +"----"
       if (content.innerHTML != "" ){
        btn.style.display = "block";
    }
 }
 })
    btn.onclick = function () {
      document.getElementById("div1").innerHTML = totalPrice ;
    }
























    



