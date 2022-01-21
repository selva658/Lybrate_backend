
async function addr(){
    let x=await fetch("http://localhost:5000/homepage/d/api")

    let data=await x.json()

    var total=data.reduce(function(acc,c){
        return acc+Number(c.originalP)
      },0)

    var off=data.reduce(function(acc,c){
        return acc+Number(c.cutP)
      },0)
    var dis = (total - off)

    let osum={
        total:total+dis,
        DIS:dis,
    }
    summary(osum);
}
addr()
    var z;
function summary(osum){
        document.getElementById("total").innerHTML=`₹${osum.total-osum.DIS}`;
        document.getElementById("ship").innerHTML=`₹0`;
        document.getElementById("count").innerHTML=`₹${osum.DIS}`;
        document.getElementById("cart").innerHTML=`₹${osum.total}`;
        document.getElementById("amount").innerHTML=`₹${osum.total}`;
        z=osum.total
        return z

}
var count=0;
promo(osum);
function promo(osum){
let cont=document.getElementById("code").value;
if(cont=="masai30"){
    count++;
  if(count==1)
  {
    z=Math.floor(z*0.7);
    document.getElementById("amount").innerHTML=`₹${z}`;
    console.log(z);
  }
}

}
function proceed(){
    setTimeout(()=>{
        alert("Your Order is Placing")
        setTimeout(()=>{
            alert("Your Order is Confirmed")
        })
        setTimeout(() => {
            let data=document.body;
            data.style.background="white";
            data.innerHTML=`<img id="image" src="/images/order.jpeg"/>`
            data.img.style.border="1px solid red";
        }, 3000);
        setTimeout(() => {
            window.location.href="http://localhost:5000/homepage/home"
        }, 5000);
    },1000)
  
}