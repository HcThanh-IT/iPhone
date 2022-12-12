// const btn = document.querySelectorAll("span i")
// //console.log(btn)
// btn.forEach(function(i,index){
//     //console.log(i,index)
//     i.addEventListener("click",function(event){
//         var iItem = event.target
//         var product = iItem.parentElement.parentElement.parentElement.parentElement
//         var productImg = product.querySelector("img").src
//         var productName = product.querySelector("H3").innerText
//         var productPrice = product.querySelector(".price").innerText
//         //console.log(productPrice,productName,productImg)
//         addcart(productPrice,productName,productImg)
//     })
// })
// //*****them thong tin vao gio hang */
// function addcart(productPrice,productName,productImg){
//     var addtr = document.createElement("tr")
//     var cartItem =document.querySelectorAll("tbody tr")
//     //console.log(cartItem.length)
//     for(var i=0;i<cartItem.length;i++){
//         var productN=document.querySelectorAll(".title-name")
//         console.log(productN)
//         if(productN[i].innerHTML===productName){
//             alert("Sản phẩm này dã có trong giỏ hàng!")
//             return
//         }
        
//     }

//     var trcontent = '<tr><td style="display:flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title-name">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" name="" id="" value="1" min="0"></td><td class="delete">Xóa</td></tr>'
//     addtr.innerHTML=trcontent
//     var cartTable =document.querySelector("tbody")
//     cartTable.append(addtr) // them addtr vao the tbody
//     console.log(cartTable)
//     cartTotal()
//     deleteCart()
// }

// //*****tinh tong gia tien */
// function cartTotal(){
//     var cartItem =document.querySelectorAll("tbody tr")
//     totalB=0
//     for(var i=0;i<cartItem.length;i++){
//         var inputValue = cartItem[i].querySelector("input").value
//         var productPrice = cartItem[i].querySelector(".price").innerHTML
//         //console.log(inputValue,productPrice)
//         totalA=inputValue*productPrice*1000
//         totalB+=totalA
//         totalC=totalB.toLocaleString('de-DE')
//         //console.log(totalC)
//     }
//     var cartTotalA = document.querySelector(".price-total span")
//     cartTotalA.innerHTML=totalC
//     console.log(cartTotalA)
// }

// //******delete card */
// function deleteCart(){
//     var cartItem =document.querySelectorAll("tbody tr")
//     for(var i=0;i<cartItem.length;i++){
//         var productD=document.querySelectorAll(".delete")
//         productD[i].addEventListener("click", function(event){
//             var cartdelete=event.target
//             var cartItemD=cartdelete.parentElement
//             cartItemD.remove()
//             cartTotal()
//             //console.log(cartItemD)
//         })
//     }
        
// }
// menu
function open_list(){
    var nav=document.querySelector(".open-list")
    console.log(nav)
    nav.classList.toggle('active')
}


// cart
const btn = document.querySelectorAll("span i")
//console.log(btn)
btn.forEach(function(i,index){
    //console.log(i,index)
    i.addEventListener("click",function(event){
        var iItem = event.target
        var product = iItem.parentElement.parentElement.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector(".card-price p").innerText
        var productPrice2 = product.querySelector(".price2").innerText
        var productPrice3=productPrice2
        //console.log(productPrice,productName,productImg,productPrice3)
        addcart(productPrice,productName,productImg,productPrice3)
    })
})
//*****them thong tin vao gio hang */
function addcart(productPrice,productName,productImg,productPrice3){
    var addtr = document.createElement("tr")
    var cartItem =document.querySelectorAll("tbody tr")
    //console.log(cartItem.length)
    for(var i=0;i<cartItem.length;i++){
        var productN=document.querySelectorAll(".title-name")
        //console.log(productN)
        if(productN[i].innerHTML==productName){
            alert("Sản phẩm này dã có trong giỏ hàng!")
            return
        }
        
    }

    var trcontent = '<tr><td style="display:flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title-name">'+productName+'</span></td><td><p><span class="price1">'+productPrice+'</span><sup>đ</sup></p></td><td><p><span class="price2">'+productPrice3+'</span></p></td><td><input style="width: 30px;outline: none;" type="number" name="" id="" value="1" min="0"></td><td class="delete">Xóa</td></tr>'
    addtr.innerHTML=trcontent
    var cartTable =document.querySelector("tbody")
    cartTable.append(addtr) // them addtr vao the tbody
    //console.log(cartTable)
    cartTotal()
    deleteCart()
}

//*****tinh tong gia tien */
function cartTotal(){
    var cartItem =document.querySelectorAll("tbody tr")
    var cartPrice =document.querySelector(".fa-shopping-bag")
    console.log(cartPrice)
    totalB=0
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".price2").innerHTML
        console.log(inputValue,productPrice)
        totalA=inputValue*productPrice*1000
        totalB+=totalA
        totalC=totalB.toLocaleString('de-DE')
        
        //console.log(totalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML=totalC
    cartPrice.innerHTML=cartItem.length
    inputChange()
    
    //console.log(cartTotalA)
}

//******delete card */
function deleteCart(){
    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productD=document.querySelectorAll(".delete")
        productD[i].addEventListener("click", function(event){
            var cartdelete=event.target
            var cartItemD=cartdelete.parentElement
            cartItemD.remove()
            cartTotal()
            //console.log(cartItemD)
        })
    }
        
}

function inputChange(){
    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue=cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }
}


const cart=document.querySelector(".cart .fancy")
const buynow=cart.querySelector("button")
buynow.addEventListener("click",function(){
    alert("Bạn đã mua hàng thành công")
})


const cartbtn = document.querySelector(".fa-times-circle")
const cartshow=document.querySelector(".cart-icon")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right="-150%"
})
