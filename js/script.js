
var allProducts = document.querySelectorAll(".containerproducts .product-item")

var div = document.querySelector("#div1")

var btn = document.querySelector("#btn1")
var btnreset = document.querySelector("#btnreset")
// btnresetModel = document.querySelector("#btnresetModel")

var pricecontent=document.querySelector("#divshowtotal")
 var totalPrice = 0


 allProducts.forEach(function (item){
    item.onclick = function () {

        totalPrice += +(item.getAttribute("price"))
        
        div.innerHTML += item.textContent + " <br/> "

        if (div.innerHTML != "" ){
            btn.style.display = "block"
            btnreset.style.display="block"
          //  btn.style.backgroundColor =  "rgb(0, 111, 139);"
            btn.style.color = "white"
            btnreset.style.color="white"
            btn.style.width = "200px"
            btnreset.style.width = "200px"

        }

    }
 })
 btnreset.onclick = function(){
  div.innerHTML= "";
  pricecontent.innerHTML = ""
  totalPrice=0
}


 btn.onclick = function () {
  pricecontent.innerHTML= "TOTAL :" + totalPrice +"$" +" <br/> "
//totalPrice.innerHTML+=+(totalPrice)   // console.log(totalPrice)
 }


  
  
  





