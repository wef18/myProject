$(function(){ 
  var url = 'http://tianchengapi.applinzi.com' 
  $.ajax({
    url: url + '/sale',
    success: function(result) {
      var html = ''
      for(var p of result.lbItems){
        html += `<div class='sale_bg' style='background:url(${p.img_url}) no-repeat'></div>`
      }
      $(".sale_nav").prepend(html)

      //品牌抢购
      var html = ''
      for(var p of result.ppItems){
        html += `<li>
        <a href="javascript:">
          <div class="img"><img src="${p.pic}" alt=""></div>
          <div class="item">
            <p class="item_title">${p.title}</p>
            <p class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em>
            </p>
            <span>已售：</span><span class="n">12</span>
          </div>
          <button>立即抢购</button>
        </a>
      </li>`
      }
      $(".sale_center>ul").html(html)
      //郑州
      var html = '<ul class="left_hand">'
      for(var p of result.myList.slice(0,2)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += `</ul>
               <ul class="right_hand">`
      for(var p of result.myList.slice(2,8)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".one_list>.one_item>div:nth-child(2)").html(html)
      //洛阳
      var html = '<ul class="left_hand">'
      for(var p of result.myList.slice(8,10)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += `</ul>
               <ul class="right_hand">`
      for(var p of result.myList.slice(10,16)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".one_list>.one_item>div:nth-child(3)").html(html)
      //开封
      var html = '<ul class="left_hand">'
      for(var p of result.myList.slice(16,18)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += `</ul>
               <ul class="right_hand">`
      for(var p of result.myList.slice(18,24)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".one_list>.one_item>div:nth-child(4)").html(html)

      //登封
      var html = '<ul class="left_hand">'
      for(var p of result.myList.slice(24,26)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += `</ul>
               <ul class="right_hand">`
      for(var p of result.myList.slice(26,32)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".one_list>.one_item>div:nth-child(5)").html(html)

      //北京
      var html = '<ul class="right_hand">'
      for(var p of result.myList.slice(16,22)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += `</ul>
      <ul class="left_hand">`
      for(var p of result.myList.slice(22,24)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".two_list>.one_item>div:nth-child(2)").html(html)

      //上海
      var html = '<ul class="right_hand">'
      for(var p of result.myList.slice(8,14)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += `</ul>
      <ul class="left_hand">`
      for(var p of result.myList.slice(14,16)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".two_list>.one_item>div:nth-child(3)").html(html)


      //浙江
      var html = '<ul class="right_hand">'
      for(var p of result.myList.slice(0,6)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += `</ul>
      <ul class="left_hand">`
      for(var p of result.myList.slice(6,8)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".two_list>.one_item>div:nth-child(4)").html(html)

      //三亚
      var html = '<ul class="right_hand">'
      for(var p of result.myList.slice(6,12)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += `</ul>
      <ul class="left_hand">`
      for(var p of result.myList.slice(12,14)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".two_list>.one_item>div:nth-child(5)").html(html)

      //云南
      var html = '<ul class="right_hand">'
      for(var p of result.myList.slice(20,26)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div>
          <p class="right_price">
            <i>¥ ${p.price.toFixed(2)}</i>
            <span>${p.title}</span>
          </p>
        </div>
      </li>`
      }
      html += `</ul>
      <ul class="left_hand">`
      for(var p of result.myList.slice(26,28)){
        html += `<li>
        <a href="javascript:;"><img src="${p.pic}" alt=""></a>
        <div class="left_msg">
          <h5>¥ ${p.price.toFixed(2)}起</h5>
          <p>${p.title}</p>
          <span>${p.subtitle}</span>
        </div>
      </li>`
      }
      html += '</ul>'
      $(".two_list>.one_item>div:nth-child(6)").html(html)
    }
  })
  //轮播图效果
  var index = 0
  function play(){
    index++
    if(index > 4){
      index = 0
    }
    $(".sale_nav div.sale_bg").eq(index).fadeIn(2000).siblings(".sale_bg").fadeOut(2000);
  }
  var timer = setInterval(play,6000);
  //当鼠标进入时停止
  $(".sale_nav").mouseover(()=>{//mouseover()鼠标进入
    // console.log(0)
    clearInterval(timer);
  })
  //当鼠标移出时继续轮播
  $(".sale_nav").mouseout(()=>{//mouseout()鼠标移出
    timer = setInterval(play,6000);
  })

  $(".one_list>.one_item>p span:first-child~span").click(function(){
    var $span = $(this);
    $span.addClass("as").siblings().removeClass("as");
    $(".one_list .item_box").eq($(this).index()-1).show().siblings("div").hide();
  })
  $(".two_list>.one_item>p span:first-child~span").click(function(){
    var $span = $(this);
    $span.addClass("as").siblings().removeClass("as");
    $(".two_list .item_box").eq($(this).index()-1).show().siblings("div").hide();
  })
})