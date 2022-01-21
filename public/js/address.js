
// import navbar from "./navbar.js"

// document.querySelector("#snav").innerHTML=navbar()


// import footer from "./script/footer.js";
// let footer1=document.getElementById("footer");
// footer1.innerHTML=footer();
// import address1 from"./script/address.js"
// let add_div=document.getElementById("add_div");
// add_div.innerHTML=address1();

document.getElementById("deliver").addEventListener("click",function(){
    paymet();
})


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

//var osum=JSON.parse(localStorage.getItem("totalprice"))
//console.log(osum);

function summary(osum){
        console.log(osum.total-osum.DIS);
        document.getElementById("total").innerHTML=`₹${osum.total-osum.DIS}`;
        document.getElementById("ship").innerHTML=`₹0`;
        document.getElementById("count").innerHTML=`₹${osum.DIS}`;
        document.getElementById("cart").innerHTML=`₹${osum.total}`;
        document.getElementById("amount").innerHTML=`₹${osum.total}`;

}
function paymet(){
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phoneno").value;
    let pin=document.getElementById("pin").value;
    let city=document.getElementById("city").value;
    let adds=document.getElementById("address").value;
    if(name.length<2)
    {
        alert("Enter You Name");
    }else if(phone<=9){
        alert("Check your Number");
    }else if(pin<=5){
        alert("6 Digit PINCODE")
    }else if(city==0)
    {
        alert("Enter you CITY");
    }else if(adds<3){
        alert("Check Your Address");
    }else{
        window.location.href="http://localhost:5000/homepage/payment"
    }
}