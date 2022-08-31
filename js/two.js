$('.box div').click(function(){
    // if(confirm('当前无法打开直播间，是否跳转到QQ音乐官网？')){
    //   var $iframe=  $('.iframe')
    //     window.location.replace('https://www.baidu.com')
        
    // }
    alert('当前无法打开直播间哦')
})
// 滑动
 
 $('.header li:first').click(function(){
     
   movescroll(0)
        
       
 })
 $('.header li:eq(1)').click(function(){
     
    movescroll(600)     
        
  })
  $('.header li:eq(2)').click(function(){
     
    movescroll(1000)     
        
  })
  $('.header li:eq(3)').click(function(){
     
    movescroll(1500)     
        
  })
  $('.header li:eq(4)').click(function(){
     
    movescroll(2500)     
        
  })
    function movescroll(h){
      
        
        clearInterval(timer);
        // 瞬间回到顶部
        var $page=$('html,body')
        
        var allh=$('html').scrollTop()+$('body').scrollTop()
        // 总时间
        var time=100
        // 间隔时间
        var jgtime=1
        // 单元运动距离
      var  onewidth=h/(time/jgtime)
    //   使用定时器
      var timer=setInterval(function(){
        allh+=onewidth
        $page.scrollTop(allh)
        console.log(allh)
        if(allh>=h){
            $page.scrollTop(h) 
            clearInterval(timer)      
            
        }
      },jgtime)
    
    }
$('.header li').click(function(){
    $('.header li').css('border-bottom',' 0')
    $(this).css('border-bottom',' 5px solid  rgb(87, 157, 236)')
})
    
