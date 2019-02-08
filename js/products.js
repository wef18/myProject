// 发送数据请求的方法
var pno = 0;
function rts(num){
  var url = 'http://tianchengapi.applinzi.com'
  var num = num
  var kwords=decodeURIComponent(location.search.split("=")[1]);
  $.ajax({
    url: url + "/products",
    type:"get",
    data:{kwords,pno,num},
    dataType:"json",
    success:function(output){
      // console.log(output)
      var {products} = output;
      if(products.length == 0){
        var html = `<div style="text-align: center;line-height: 100px;font-size: 25px">抱歉！没有查找到您要的商品...</div>`
        $(".product").html(html);
        $(".paging").hide()
      }else{
        var html = "<ul>";
        for(var p of products){
          var {lid,img_url,title,subtitle,price,type1} = p;
          html += `<li class="product_wrap">
          <div class="product_left">
            <a href="javascript:;">
              <img src="${img_url}" alt="">
            </a>
          </div>
          <div class="product_middle">
            <a href="javascript:;">${title}</a>
            <p>${subtitle}</p>
            <span>可分期</span><i>${type1}</i>
          </div>
          <div class="product_right">
            <div>
              <span><i>¥</i><em>${price.toFixed(2)}</em>起</span>
            </div>
            <a href="javascript:;">查看详情</a>
          </div>
        </li>`
        }
        html += "</ul>"
        $(".product").html(html);
      } 
      var {pno,pageCount}=output; 
      var html = `<a href="javascript:;" class="${pno==0 ? 'disabled':''}">上一页</a>`
      for(var i=0;i<pageCount;i++){
        html += `<a href="javascript:;" class="${pno==i ? 'd':''}">${i+1}</a>`
      }
      html += `<a href="javascript:;" class="${pno==pageCount-1?'disabled':''}">下一页</a>`
      $(".paging>div").html(html);
    }
  })
}
$(function(){
  //当页面加载调用rts方法并传参数
  rts(0)
    function loadPage(no=0){
      pno = no
    }loadPage();
    $(".condition_nav li").click(function(){
      //当点击不同排序方法时，调用rts传不同实参到方法中
      var $li = $(this)
      $li.addClass("m").siblings().removeClass("m");
      if($li.index()==0){
        //没次点击不同排序时，把pno的值变为 0
        pno = 0
        rts(0)
      }else if($li.index()==1){
        pno = 0
        rts(1)
      }else if($li.index()==2){
        pno = 0
        rts(2)
      }
    })
    $(".paging>div").on("click","a:not(.disabled):not(.active)",function(e){
      e.preventDefault();
      var $li = $(".condition_nav li") 
      var $a=$(this);
      var a = $a.html()
      if($(".condition_nav li:nth-child(1)").is(".m")){
        if($a.is(":first-child")){
          loadPage(pno-1);
          rts(0)
        }else if($a.html()==="下一页"){
          loadPage(pno+1);
          rts(0)          
        }else if(a){
          loadPage(pno=a-1);
          rts(0)          
        }    
      }else if($(".condition_nav li:nth-child(2)").is(".m")){
        if($a.is(":first-child")){
          loadPage(pno-1);
          rts(1)
        }else if($a.html()==="下一页"){
          loadPage(pno+1);
          rts(1)          
        }else if(a){
          loadPage(pno=a-1);
          rts(1)
        } 
      }else if($(".condition_nav li:nth-child(3)").is(".m")){
        if($a.is(":first-child")){
          loadPage(pno-1);
          rts(2)
        }else if($a.html()==="下一页"){
          loadPage(pno+1);
          rts(2)          
        }else if(a){
          loadPage(pno=a-1);
          rts(2)          
        } 
      }
    })
})