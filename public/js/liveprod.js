
let laptopList;

async function liverapi() {
    let x = await fetch("http://localhost:5000/homepage/livercareapi")
    
    laptopList = await x.json()
    
    console.log(laptopList)
    display(laptopList)
}

liverapi()
    function display(list){
        document.getElementById("laptop").innerHTML = ""
        var larea = document.getElementsByClassName("lArea");
       list.map(function(item){
           var div = document.createElement("div");
           div.setAttribute("id", "mainDiv");
           
         var imgdiv=document.createElement("div")
         imgdiv.setAttribute("id","imagediv")
         var textdiv=document.createElement("div")
         textdiv.setAttribute("id","textdiv")
         var maindiv=document.createElement("div")
         maindiv.setAttribute("id","maindiv")

           var img = document.createElement("img");
           img.setAttribute("id", "image")
          // img.addEventListener("click", goto)
           img.setAttribute("src", item.image)
           
           var name = document.createElement("p");
           name.setAttribute("id", "name")
           name.textContent = item.name;
           
           var t=document.createElement("p")
           t.setAttribute("class","sd")
           t.textContent=item.descp

           var priceD = document.createElement("div");
           priceD.setAttribute("id", "priceD")
           var price = document.createElement("p");
           price.setAttribute("id", "price");
           price.textContent = "₹" +" "+ item.originalP;

           var disco=document.createElement("p")
           disco.setAttribute("id","discount")
           disco.textContent=item.ds+"%Off"
           var cutP = document.createElement("p");
           cutP.setAttribute("id", "cutP");
           var button=document.createElement("button") 
            button.innerText="Add To Cart"
            button.setAttribute("id","btn")
            button.onclick=function(){
                alert("Product added to cart")
                scartfun(item)
            }
            var btndiv = document.createElement("div");

           if(item.cutP!==undefined){
            cutP.textContent = "₹" + " " + item.cutP;
           }
           

            priceD.append(price, cutP, disco)
            btndiv.append(button)
        //    console.log(item)
           imgdiv.append(img)
           textdiv.append(name,t,priceD,btndiv)
      
           maindiv.append(imgdiv,textdiv)
           div.append(maindiv)
          
        // document.querySelector("body").append(div);
        document.querySelector("#laptop").append(div)
        // console.log(item)
       })
       
    }
    
    var countR1 = 0
    document.getElementById("radio1").addEventListener("click", check1)
    function check1(){
        countR1++
        if(countR1%2==1){
            var arr = laptopList;
            var arr = arr.filter(function(item){
                return item.originalP<=500;
            })
            // console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR2 = 0
    document.getElementById("radio2").addEventListener("click", check2)
    function check2(){
        countR2++
        console.log(countR1)
        if(countR2%2==1){
            var arr = laptopList;
            var arr = arr.filter(function(item){
                return item.originalP>=500 && item.originalP<850;
            })
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR3 = 0
    document.getElementById("radio3").addEventListener("click", check3)
    function check3(){
        countR3++
        if(countR3%2==1){
            var arr = laptopList;
            var arr = arr.filter(function(item){
                return item.originalP>=850 && item.originalP<1300;
            })
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR4 = 0
    document.getElementById("radio4").addEventListener("click", check4)
    function check4(){
        countR4++
        if(countR4%2==1){
            var arr = laptopList;
            var arr = arr.filter(function(item){
                return item.originalP>= 1300 && item.originalP<=10000;
            })
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR5 = 0
    document.getElementById("radio5").addEventListener("click", check5)
    function check5(){
        countR5++
        if(countR5%2==1){
            var arr = laptopList;
            var arr = arr.filter(function(item){
                return item.originalP>= 10000 ;
            })
            display(arr)
        }else{
            display(laptopList)
        }
    }
   
    var countR6 = 0
    document.getElementById("radio6").addEventListener("click", check6)
    function check6(){
        countR6++
        if(countR6%2==1){

            var arr = laptopList;
            var arr = arr.filter(function(item){

                var temp1 =item.name; 
                var value = document.getElementById("radio6").value;

                for(var i=0; i<10; i++){
                    var temp = "";
                    for(var j=i; j<i+ value.length; j++){
                        temp+= temp1[j]
                    }
                    if(value== temp){
                        return item;
                    }
                }
            })
            console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }
   
    var countR7 = 0
    document.getElementById("radio7").addEventListener("click", check7)
    function check7(){
        countR7++
        if(countR7%2==1){
            var arr = laptopList;
            var arr = arr.filter(function(item){

                var temp1 =item.name; 
                var value = document.getElementById("radio7").value;

                for(var i=0; i<10; i++){
                    var temp = "";
                    for(var j=i; j<i+ value.length; j++){
                        temp+= temp1[j]
                    }
                    if(value== temp){
                        return item;
                    }
                }
            })
            console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR8 = 0
    document.getElementById("radio8").addEventListener("click", check8)
    function check8(){
        countR8++
        if(countR8%2==1){

            var arr = laptopList;
            var arr = arr.filter(function(item){

                var temp1 =item.name; 
                var value = document.getElementById("radio8").value;

                for(var i=0; i<10; i++){
                    var temp = "";
                    for(var j=i; j<i+ value.length; j++){
                        temp+= temp1[j]
                    }
                    if(value== temp){
                        return item;
                    }
                }
            })
            console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR9 = 0
    document.getElementById("radio9").addEventListener("click", check9)
    function check9(){
        countR9++
        if(countR9%2==1){

            var arr = laptopList;
            var arr = arr.filter(function(item){

                var temp1 =item.name; 
                var value = document.getElementById("radio9").value;

                for(var i=0; i<10; i++){
                    var temp = "";
                    for(var j=i; j<i+ value.length; j++){
                        temp+= temp1[j]
                    }
                    if(value== temp){
                        return item;
                    }
                }
            })
            console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR10 = 0
    document.getElementById("radio10").addEventListener("click", check10)
    function check10(){
        countR10++
        if(countR10%2==1){

            var arr = laptopList;
            var arr = arr.filter(function(item){

                var temp1 =item.name; 
                var value = document.getElementById("radio10").value;

                for(var i=0; i<10; i++){
                    var temp = "";
                    for(var j=i; j<i+ value.length; j++){
                        temp+= temp1[j]
                    }
                    if(value== temp){
                        return item;
                    }
                }
            })
            console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }

    var countR11 = 0
    document.getElementById("radio11").addEventListener("click", check11)
    function check11(){
        countR11++
        if(countR11%2==1){

            var arr = laptopList;
            var arr = arr.filter(function(item){

                var temp1 =item.name; 
                var value = document.getElementById("radio11").value;

                for(var i=0; i<10; i++){
                    var temp = "";
                    for(var j=i; j<i+ value.length; j++){
                        temp+= temp1[j]
                    }
                    if(value== temp){
                        return item;
                    }
                }
            })
            console.log(arr)
            display(arr)
        }else{
            display(laptopList)
        }
    }
    
    function sort(){
        var selected = document.getElementById("sort").value;
        var all = laptopList;
        if(selected == "low"){
            all = all.sort(function(a, b){
                // console.log(a, b)
                return a.originalP - b.originalP
            })
        }
        if(selected == "high"){
            all = all.sort(function(a, b){
                // console.log(a, b)
                return b.originalP - a.originalP
            })
        }
        // if(selected == "ori"){
        //     all = laptopList
        // }
        // console.log(laptopList)
        display(all)
    }
    
    
    function goto(){
        window.location.href = "productDetaiQuraa.html"
    }

    
// Slide every slideDelay seconds
const slideDelay = 3000;

const dynamicSlider = document.getElementById("slider");

var curSlide = 0;
window.setInterval(()=>{
  curSlide++;
  if (curSlide === dynamicSlider.childElementCount) {
    curSlide = 0;
  }

  // Actual slide
  dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
}, slideDelay);
  

// selva cart section
//var scartarray=JSON.parse(localStorage.getItem("scart")) || []
function scartfun(item){
    
    
   
    async function addProduct(){
        
        let data={
            
            image:item.image,
            name: item.name,
            descp: item.descp,
            originalP: item.originalP,
            cutP: item.cutP,
            ds:item.ds
        }
      
        data = JSON.stringify(data)
        console.log(data);

       let response=await fetch("http://localhost:5000/homepage/d", {

            method:"POST",

            body:data,

            headers:{
                "Content-Type":"application/json"
            }

        });

        let d=await response.json();

        console.log(d);
    }


addProduct()

}


