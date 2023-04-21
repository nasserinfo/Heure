
var textarea=document.getElementById("text");
var result=document.getElementById("text1");
var select=document.getElementById("select");

textarea.addEventListener("input",()=>{
    make_result();
});
select.addEventListener("change",()=>{
    make_result();
});

function make_result(){
    if( select.value=="encode"){
        result.value=btoa(textarea.value)
    }else{
        result.value=atob(textarea.value)
    }
};