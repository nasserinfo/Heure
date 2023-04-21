function updatedate(){ 
    document.getElementById("setTime").innerHTML=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    document.getElementById("setDate").innerHTML=new Date().getDate()+"/"+parseInt(new Date().getMonth()+1)+"/"+new Date().getFullYear();
}
setInterval(updatedate,100);

function getColor(){
    localStorage.setItem("Color",document.getElementById("setColor").value);
    document.getElementById("time").style.background=localStorage.getItem("Color");
    document.getElementById("body").style.background=localStorage.getItem("Color");
}

document.getElementById("setColor").value = localStorage.getItem("Color");
document.getElementById("time").style.background =localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");