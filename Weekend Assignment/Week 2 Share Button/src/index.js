let shareBtn = document.getElementById("sharebt");
let shareDisplay = document.getElementById("shared");

shareBtn.onclick=function(){
    handleclick();
}

function handleclick(){
   if(shareDisplay.style.display==="none"){
    shareDisplay.style.display = "flex";
   }
   else{
    shareDisplay.style.display = "none";
   }
}