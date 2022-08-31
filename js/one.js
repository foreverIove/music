var img=document.getElementById("img")
   var arr=['../img/lb1.png','../img/lb2.png','../img/lb3.png','../img/lb4.png','../img/lb5.png',]
   var index=0
   setInterval(function(){
    img.src=arr[index]
    index++;
    if(index>arr.length-1){
        index=0;
    }
   },1300);
   