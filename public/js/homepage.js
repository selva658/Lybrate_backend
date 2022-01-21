// document.querySelector("#snav").innerHTML=navbar()

// document.querySelector(".loginname").innerHTML=`${name}`

start();
function start(){
    let images=["/images/1.jpeg","/images/2.jpeg","/images/3.jpeg","/images/4.jpeg","/images/5.jpeg","/images/6.jpeg","/images/7.jpeg","/images/8.jpeg"]
    let show=document.getElementById("slideshow");
    let img=document.createElement("img");
    let count=0;
    setInterval(()=>{
        show.innerHTML=null;
        if(count==images.length)
        {
            count=0 ;
        }
        img.src=images[count];
        show.append(img);
        count++;
    },2000)
}

async function best(){
    let x=await fetch("http://localhost:5000/homepage/best")
    let y=await fetch("http://localhost:5000/homepage/newarrival")
    let z=await fetch("http://localhost:5000/homepage/money")
    let a=await fetch("http://localhost:5000/homepage/sexwell")
    let b=await fetch("http://localhost:5000/homepage/immunity")
    let c=await fetch("http://localhost:5000/homepage/weight")
    let d=await fetch("http://localhost:5000/homepage/vitamin")
    let e=await fetch("http://localhost:5000/homepage/coffee")
    let f=await fetch("http://localhost:5000/homepage/hair")

    let data=await x.json()
    let data1=await y.json()
    let data2=await z.json()
    let data3=await a.json()
    let data4=await b.json()
    let data5=await c.json()
    let data6=await d.json()
    let data7=await e.json()
    let data8=await f.json()

    webpage(data,bestProduct)
    webpage(data1,NewArrival)
    webpage(data2,money)
    webpage(data3,wellProducts)
    webpage(data4,Boosting)
    webpage(data5,Goals)
    webpage(data6,Charged)
    webpage(data7,Tea)
    webpage(data8,skin)
}
best()

function webpage(data,location){
    data.map(function (el){
        var div=document.createElement("div");
        var img=document.createElement("img");
        var p0=document.createElement("p");
        var p=document.createElement("p");
        var p1=document.createElement("p");
        var p2=document.createElement("p");
        var p3=document.createElement("p");
        img.src=el.image;
        p0.textContent=el.rate;
        p0.setAttribute("id","rating")
        p.textContent=el.name;
        var div1=document.createElement("div");
        p1.textContent=`₹${el.pnew}`;
        p2.textContent=`₹${el.pold}`;
        p3.textContent=`${el.dis}%`;
        div1.append(p1,p2,p3);
        if(el.rate==null)
        {
            div.append(img,p,div1);
        }else{
            div.append(img,p0,p,div1);
        }
        location.append(div);
    }) 
}
