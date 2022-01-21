let issues = ["Increase height", "Gain Weight", "Fever", "Leg Pain"]
let place = ["Chennai", "Mumbai", "Delhi", "Pune", "Bangulore"]
console.log('working')
let i = 0;
let time = () => {
    
    document.querySelector("#shtime").innerHTML=`<span class="stime">${Math.floor(Math.random() * 10)+1} min ago</span> ${Math.floor(Math.random() * 40)+30} year old Male from ${place[i]} just asked about <span class="sissues">${issues[i]}</span>` 
    i++;
    if (i == 4) {
        i = 0;
    }
}

setInterval(time, 2000)

// catagories

var span=document.getElementsByClassName("smultisliderspan")
var div=document.getElementsByClassName("smultisliderdiv")
var l=0;
span[1].onclick=()=>{
    l++;
    for(i of div){
        if(l==0) {
            i.style.left="0px"
        }

        if(l==1){
           i.style.left="-740px"
        }
        if(l==2){
           i.style.left="-1480px"
        }
        if(l==3){
           i.style.left="-2220px"
        }
        // if(l==4){
        //     i.style.left="-2960px"
        // }
        if(l>2){l=1}
    }
}


//place
var span1=document.getElementsByClassName("smultisliderspan1")
var div1=document.getElementsByClassName("smultisliderdiv1")
var j=0;
span1[1].onclick=()=>{
    j++;
    for(i of div1){
        if(j==0) {
            i.style.left="0px"
        }

        if(j==1){
           i.style.left="-740px"
        }
        if(j==2){
           i.style.left="-1480px"
        }
        if(j==3){
           i.style.left="-2220px"
        }
        if(j==4){
            i.style.left="-2960px"
        }
        if(j>2){j=1}
    }
}

//video
var span2=document.getElementsByClassName("smultisliderspan2")
var div2=document.getElementsByClassName("smultisliderdiv2")
var k=0;
span2[1].onclick=()=>{
    k++;
    for(i of div2){
        if(k==0) {
            i.style.left="0px"
        }

        if(k==1){
           i.style.left="-740px"
        }
        if(k==2){
           i.style.left="-1480px"
        }
        if(k==3){
           i.style.left="-2220px"
        }
        if(k==4){
            i.style.left="-2960px"
        }
        if(k>2){k=1}
    }
}

//quiz

var span3=document.getElementsByClassName("smultisliderspan3")
var div3=document.getElementsByClassName("smultisliderdiv3")
var m=0;
span3[1].onclick=()=>{
    m++;
    for(i of div3){
        if(m==0) {
            i.style.left="0px"
        }

        if(m==1){
           i.style.left="-740px"
        }
        if(m==2){
           i.style.left="-1480px"
        }
        if(m==3){
           i.style.left="-2220px"
        }
        if(m==4){
            i.style.left="-2960px"
        }
        if(m>2){m=1}
    }
}



