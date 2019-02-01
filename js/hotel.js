$(function(){
  var url = 'http://tianchengapi.applinzi.com'
  $.ajax({
    url: url + "/hotel",
    type:"get",
    dataType:"json",
    success:function(result){
      // console.log(result);
      var html = "";
      for(var p of result.hebItems){
        html += `<a href="javascript:;">
        <div>
          <img src="${p.pic}" class="img_d" alt="">
          <p class="item_tit">${p.title}</p>
        </div>
      </a>`
      }
      $(".block_item>.item_cont:first-child").html(html);

      var html = "";
      for(var p of result.szItems){
        html += `<a href="javascript:;">
        <div>
          <img src="${p.pic}" class="img_d" alt="">
          <p class="item_tit">${p.title}</p>
        </div>
      </a>`
      }
      $(".block_item>.item_cont:nth-child(2)").html(html);

      var html = "";
      for(var p of result.xmItems){
        html += `<a href="javascript:;">
        <div>
          <img src="${p.pic}" class="img_d" alt="">
          <p class="item_tit">${p.title}</p>
        </div>
      </a>`
      }
      $(".block_item>.item_cont:nth-child(3)").html(html);

      var html = "";
      for(var p of result.hzItems){
        html += `<a href="javascript:;">
        <div>
          <img src="${p.pic}" class="img_d" alt="">
          <p class="item_tit">${p.title}</p>
        </div>
      </a>`
      }
      $(".block_item>.item_cont:nth-child(4)").html(html);

      var html = "";
      for(var p of result.shItems){
        html += `<a href="javascript:;">
        <div>
          <img src="${p.pic}" class="img_d" alt="">
          <p class="item_tit">${p.title}</p>
        </div>
      </a>`
      }
      $(".block_item>.item_cont:last-child").html(html);

      var html = "";
      for(var p of result.hebItems){
        html += `<a href="javascript:;">
        <div>
          <img src="${p.pic}" class="img_d" alt="">
          <p class="item_tit">${p.title}</p>
        </div>
      </a>`
      }
      $(".block_item>.item_cont:nth-child(5)").html(html);

      var html = "";
      for(var p of result.jxItems){
        html += `<li>
        <div class="two_wrap_img">
          <img src="${p.pic}" alt="">
        </div>
        <div class="two_wrap_img_bg" style="background: url(${p.pic1});"></div>
        <div class="wrap_mask">
          <h5>${p.title}</h5>
          <p>${p.subtitle}</p>
          <a href="javascript:;">Click To View</a>
        </div>
      </li>`
      }
      $(".two_wrap ul").html(html);

      var sum = 1
      var html = "";
      for(var p of result.tsItems){
        html += `<img class="${"hot"+sum}" src="${p.pic}" alt="">`
        sum++
      }
      $(".three_hot").html(html);

      var html = "";
      for(var p of result.lbItems){
        html += `<li>
        <a href="javascript:;">
          <div style="background: url(${p.img_url}) center no-repeat;"></div>
        </a>
      </li>`
      }
      $("#lunbo>ul").html(html);
      
    }
  })
  $(".block_one_nav>li").click(function(){
    var $li = $(this);
    $li.addClass("checked_a").siblings().removeClass("checked_a");
    $(".item_cont").eq($(this).index()).show();
    $(".item_cont").eq($(this).index()).siblings().hide();
  })

  var index = 0
  function play(){
    index++
    if(index > 4){
      index = 0
    }
    $("#lunbo>ul li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
    $("#lunbo>.dot span").eq(index).addClass("b").siblings().removeClass("b");
  }

  $("#lunbo>.lb_left").click(function(){
    index--
    if(index < 0)
    index = 3
    $("#lunbo>ul li").eq(index).fadeIn(500).siblings().fadeOut(500);
    $("#lunbo>.dot span").eq(index).addClass("b").siblings().removeClass("b");
  })

  $("#lunbo>.lb_right").click(function(){
    index++
    if(index > 3)
    index = 0
    $("#lunbo>ul li").eq(index).fadeIn(500).siblings().fadeOut(500);
    $("#lunbo>.dot span").eq(index).addClass("b").siblings().removeClass("b");
  })
  $("#lunbo>.dot span").click(function(){
    var $span = $(this)
    $span.addClass("b").siblings().removeClass("b");
    $("#lunbo>ul li").eq($span.index()).fadeIn(500).siblings().fadeOut(500);
  })
  

  var timer = setInterval(play,6000);
  //当鼠标进入时停止
  $("#lunbo").mouseover(()=>{//mouseover()鼠标进入
    clearInterval(timer);
    $("#lunbo>img").show();
  })
  //当鼠标移出时继续轮播
  $("#lunbo").mouseout(()=>{//mouseout()鼠标移出
    timer = setInterval(play,6000);
    $("#lunbo>img").hide();
  })
})