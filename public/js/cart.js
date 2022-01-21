let appendata = document.querySelector(".scustomerproduct")
let data;
async function dommy() {
    let x = await fetch("http://localhost:5000/homepage/d/api")
    data = await x.json()
    appen(data)
    var total=data.reduce(function(acc,c){
        return acc+Number(c.originalP)
      },0)
    console.log(total)

    var off=data.reduce(function(acc,c){
        return acc+Number(c.cutP)
      },0)
    var dis = (total - off)
    
    var carttotal = (total + dis);
    
    var m = {
        total:total+dis,
        DIS:dis,
    };
    //localStorage.setItem("totalprice",JSON.stringify(m))
      
    let pdiv = document.createElement("div")
    
    let totalp = document.createElement("p")
    
    totalp.setAttribute("class", "ptotal")
    
    totalp.innerHTML = `<p><div class="tcont1">Total MRP <span class="tlength">(${data.length}items)</span></div><span class="tprice1">₹${total}</span></p><p class="tcont">
     
    <div class="tcont">Shipping Charges<div<span class="tprice">₹0</span></p>
    
    <div class="tcont">Discount<div<span class="tprice2">₹${dis}</span></p>
    `
    
    
    pdiv.append(totalp)
    
    document.querySelector(".edhuku").append(pdiv)
    
    
    let carttotal1 = document.createElement("p")
    
    document.querySelector(".carttotal").innerHTML = `<div class="tcont">cart total<div<span class="tprice3">₹${carttotal}</span></p>
    
    <div class="tcont4">Amount Payable<div<span class="tprice4">₹${carttotal}</span></p>`
    
    
    
}
dommy()

function appen(x){

    x.forEach((item) => {
            
        let cdiv = document.createElement("div")
        
        cdiv.setAttribute("class", "cartdiv")
        
        let img = document.createElement("img")
        
        img.src = item.image;

        img.setAttribute("class","cimg")

        let description = document.createElement("p")

        description.setAttribute("class","ctitle")
        
        description.textContent = item.name
        
        let price = document.createElement("span")

        price.setAttribute("class","cpriceoverall")
        
        price.innerHTML = `<span class="cprice">₹${item.originalP}</span> <span class="cpriceoff">₹${item.cutP}</span>`
        
        // let priceoff = document.createElement("span")

        // priceoff.setAttribute("class","cpriceoff")
        
        // priceoff.innerHTML = `${item.cutP}`
        let qdiv = document.createElement("div")
        
        qdiv.setAttribute("class","qdiv")

        let dec = document.createElement("button")

        dec.textContent = `-`

        dec.setAttribute("class","dec")
        
        dec.onclick = function () {
            decrement()
        }
        
        let input = document.createElement("input")
        
        input.setAttribute("value", "1")

        input.setAttribute("id","quantity")
        
        let plus = document.createElement("button")
        
        plus.setAttribute("class","inc")
        plus.textContent="+"
        
        plus.onclick = function () {
            increment()
        }


        let btn = document.createElement("button")

        btn.setAttribute("class","cbtn")
        
        btn.innerText = "Remove"
        
        btn.onclick = function () {
            
            cartremove(item)
        }
    
        function decrement() {
            var textBox = document.getElementById("quantity");
            
            if (textBox.value >= 1) {
                textBox.value--;   
               }
        }
        
        function increment() {
            var textBox = document.getElementById("quantity");
            textBox.value++; 
            
        }

        qdiv.append(dec,input,plus)

        cdiv.append(img, description, price, qdiv,btn)
    
        appendata.append(cdiv)
        let hr=document.createElement("hr")
        appendata.append(hr)
    })
    
}

function cartremove(item) {
        
    async function deleteProduct(){

        const id = item._id
        
        console.log(id);

        let response=await fetch(`http://localhost:5000/homepage/d/${id}`,{
          
            method:"DELETE",

            headers:{
                "Content-Type":"application/json"
            }
        })

        let d=await response.json()

        console.log(d);
        
    }
    deleteProduct()
    window.location.reload(true)
}


