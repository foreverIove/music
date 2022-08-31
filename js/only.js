$('.top-left-left').click(function(){
   var $onleft= $('.on-left')
   $onleft.css('position','absolute')
   $onleft.css('height','100%')


})
$('#btn2').click(function(){
    $('.on-left').css('height','0')
})



// 图标旋转
var xz=document.getElementById("xz");
var audio = document.getElementById("mm");  
var timer;
var i=false;
var index=0;
//#region 
// xz.addEventListener('click',function(){
    
//     i=!i;
   
//     if(!i){
//        console.log(i)
//         audio.pause();
//     }else{
//         audio.play();
//     }
//         clearInterval(timer);
//     var timer=setInterval(function(){
        
//         if(i){
//        index++;
//         xz.style.transform="rotate"+"("+ index +"deg"+")";
//         }else{
//             clearInterval(timer);
//         }
//     // 点击播放/暂停图片时，控制音乐的播放与暂停
    
//     },10);
    
// })
//#endregion 

var i=0
    
var $arr=['./img/mp.mp3','./img/mp2.mp3','./img/xzq.mp3']
 var $arr1=['未知-莫名我就喜欢你','汪苏泷-勇气','薛之谦-天外来物']
var timers
$('.down').click(function(){
a=true

    $('#zt') .css('left','-45px')

// 默认播放按钮时开启的
    clearInterval(timers);
     timers=setInterval(function(){
        audio.play()
        if(audio.play()){
       index++;
        xz.style.transform="rotate"+"("+ index +"deg"+")";
        }else{ 
            clearInterval(timer);
        }
       
        // if(a==false){
        
        // }
    // 点击播放/暂停图片时，控制音乐的播放与暂停
    
    },10);
 $('.mp3').attr('src',$arr[i])
 $('.mp3').attr('autoplay','autoplay')
 $('.f-t-center').html($arr1[i])
 i++;
 if(i>($arr.length-1)){
     i=0;
     console.log(i)
 }
})
// 开始暂停
var a=false;
// 播放按钮
$('.zt').click(function(){
    // console.log(this)
    a=!a;
    // console.log(a)
    if(!a){
        // 点击暂停！a=true
        console.log(456)
        $('#zt') .css('left','0')
        audio.pause();
    }else{
        // 点击播放
        console.log(123)
        audio.play();
        $('#zt') .css('left','-45px')
    }
    //#region 
    // if(a){
    //     // index++;
    //     //  xz.style.transform="rotate"+"("+ index +"deg"+")";
    //      }else{
    //          clearInterval(timer);
             
    //      }
        //  转起来
        //#endregion
    clearInterval(timers)
         timers=setInterval(function(){
            
            if(a){
           index++;
            xz.style.transform="rotate"+"("+ index +"deg"+")";
            }else{
                // $('#zt') .css('left','2px')
                clearInterval(timers);
            }
        // 点击播放/暂停图片时，控制音乐的播放与暂停
        
        },10);
        // 点击切换按钮right: (0.05/40rem);
        // $('#zt') .css('left','2px')
        // $('#zt').toggleClass('an')
    //   a=!a
})
// 无效弹窗
$('#accordion li').click(function(){
    alert('当前功能无效哦')
})