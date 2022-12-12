//lay du lieu
const btn = document.querySelectorAll("input")
// console.log(btn)
btn.forEach(function(input,index){

    // console.log(input,index)
    input.addEventListener("click",function(event)
    {
        var inputItem = event.target
        var product1 = inputItem.parentElement.parentElement

        var productImg = product1.querySelector("img").src
        var productName = product1.querySelector("H3").innerText
        var productPrice = product1.querySelector("H4").innerText
        // console.log(productPrice,productName,productImg)

        addcart(productPrice,productName,productImg)
    })
})
//add du lieu vao gio hang
function addcart(productPrice,productName,productImg)
{
    var addtr = document.createElement("tr")

    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll('.title')
        if(productT[i].innerHTML == productName){
            alertE="Sản phẩm này đã có trong giỏ hàng!"
            alert(alertE)
            return
        }
    }

    var trcontent = ' <tr><td style="display:flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" name="" id="" value="1" min="0"></td><td><span class="delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable =document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
    
    
}
//delete du lieu
function deleteCart()
{ 
    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var productD = document.querySelectorAll(".delete")
        productD[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemD = cartDelete.parentElement.parentElement
            cartItemD.remove()
            carttotal()
        })
        
    }
}



//tinh tong gia tien
function carttotal(){
    var cartItem =document.querySelectorAll("tbody tr")
    // console.log(cartItem.length)
    var totalC=0
    for(var i=0; i<cartItem.length;i++){
         var inputValue = cartItem[i].querySelector("input").value
         var productPrice = cartItem[i].querySelector(".prices").innerHTML
         totalA = inputValue*productPrice*1000
         totalC +=totalA
    }
    var carttotalA= document.querySelector(".price-total span")
    var carttotalB=document.querySelector("#more .fa-shopping-bag")
    carttotalA.innerHTML=totalC.toLocaleString('de-DE')
    carttotalB.innerHTML=totalC.toLocaleString('de-DE')
    // console.log(carttotalB)
    inputchange()
    
    
}

function inputchange(){
    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}

const cartbtn = document.querySelector(".fa-times-circle")
const cartshow = document.querySelector(".fa-shopping-bag")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})