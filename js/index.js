$(function(){
  var url = 'http://tianchengapi.applinzi.com'
  $.ajax({
    url: url + "/index",
    type:"get",
    dataType:"json",
    success:function(result){
      // console.log(result);
      /* 轮播图 */
      var html = "";
      for(var p of result.lbItems){
        html += `<li>
        <a href="javascript:;">
          <div style="background: url(${p.img_url}) center no-repeat"></div>
        </a>
      </li>`
      }
      html += `<img class="lb_left" src="img/left.png" alt="">
      <img class="lb_right" src="img/right.png" alt="">`
      $(".lunbo").html(html)
      $(".lunbo .lb_left").click(function(){
        index--
        if(index < 0)
        index = 3
        $(".lunbo li").eq(index).fadeIn(500).siblings().fadeOut(500);
        $(".dot li").eq(index).addClass("b").siblings().removeClass("b");
      })
      $(".lunbo .lb_right").click(function(){
        index++
        if(index > 3)
        index = 0
        $(".lunbo li").eq(index).fadeIn(500).siblings().fadeOut(500);
        $(".dot li").eq(index).addClass("b").siblings().removeClass("b");
      })

      /* 特价特卖 */
      var html = "";
      for(var p of result.listItems.slice(0,8)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:first-child .layer_body ul:nth-child(1)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(8,16)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:first-child .layer_body ul:nth-child(2)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(16,24)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:first-child .layer_body ul:nth-child(3)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(24,32)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:first-child .layer_body ul:nth-child(4)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(32,40)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:first-child .layer_body ul:nth-child(5)");
      li.innerHTML=html;


      /* 热门乐园 */
      var html = "";
      for(var p of result.listItems.slice(32,40)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(2) .layer_body ul:nth-child(1)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(24,32)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(2) .layer_body ul:nth-child(2)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(16,24)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(2) .layer_body ul:nth-child(3)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(8,16)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(2) .layer_body ul:nth-child(4)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(0,8)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(2) .layer_body ul:nth-child(5)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(40)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(2) .layer_body ul:nth-child(6)");
      li.innerHTML=html;

      /* 主题乐园 */
      var html = "";
      for(var p of result.listItems.slice(36)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(3) .layer_body ul:nth-child(1)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(0,8)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(3) .layer_body ul:nth-child(2)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(8,16)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(3) .layer_body ul:nth-child(3)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(32,40)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(3) .layer_body ul:nth-child(4)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(16,23)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(3) .layer_body ul:nth-child(5)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(30,38)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(3) .layer_body ul:nth-child(6)");
      li.innerHTML=html;

      /* 周边乐园 */
      var html = "";
      for(var p of result.listItems.slice(30,38)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(4) .layer_body ul:nth-child(1)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(25,32)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(4) .layer_body ul:nth-child(2)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(7,15)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(4) .layer_body ul:nth-child(3)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(35)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(4) .layer_body ul:nth-child(4)");
      li.innerHTML=html;

      var html = "";
      for(var p of result.listItems.slice(20,28)){
        html += `<li>
        <a href="javsscript:;">
          <div><img src="${p.img_url}" alt=""></div>
          <div class="brief">${p.details}</div>
        </a>
        <div class="pro_infor">
            <span class="price">
              <i>¥</i><em>${p.price.toFixed(2)}</em><i>起</i>
            </span>
            <span>满意度99%</span>
          </div>
      </li>`;
      }
      var li = document.querySelector("#mian_center .center>div:nth-child(4) .layer_body ul:nth-child(5)");
      li.innerHTML=html;
    }
  });
  // 轮播图
  var index = 0
  function play(){
    index++
    if(index > 4){
      index = 0
    }
    $(".lunbo li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
    $(".dot li").eq(index).addClass("b").siblings().removeClass("b");
  }
  $(".dot li").click(function(){
    var $li = $(this)
    $li.addClass("b").siblings().removeClass("b");
    $(".lunbo li").eq($li.index()).fadeIn(500).siblings().fadeOut(500);
  })

  var timer = setInterval(play,4000);
  //当鼠标进入时停止
  $(".lunbo").mouseover(()=>{//mouseover()鼠标进入
    clearInterval(timer);
    $(".lunbo>img").show();
  })
  //当鼠标移出时继续轮播
  $(".lunbo").mouseout(()=>{//mouseout()鼠标移出
    timer = setInterval(play,4000);
    $(".lunbo>img").hide();
  })
  //分类点击事件
  $(".tabs_special li").click(function(){
    var $li = $(this);
    $li.addClass("ick").siblings().removeClass("ick");
    $(".ul_special").eq($(this).index()).show().siblings().hide();
  })
  $(".tabs_hot li").click(function(){
    var $li = $(this);
    $li.addClass("ick").siblings().removeClass("ick");
    $(".ul_hot").eq($(this).index()).show().siblings().hide();
  })
  $(".tabs_theme li").click(function(){
    var $li = $(this);
    $li.addClass("ick").siblings().removeClass("ick");
    $(".ul_theme").eq($(this).index()).show().siblings().hide();
  })
  $(".tabs_rim li").click(function(){
    var $li = $(this);
    $li.addClass("ick").siblings().removeClass("ick");
    $(".ul_rim").eq($(this).index()).show().siblings().hide();
  })
})
