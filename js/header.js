window.onscroll=function(){
  var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
  if(scrollTop>=600){
    //console.log(scrollTop);
    $("#tail_after").css("display","block");
  }else{
    $("#tail_after").css("display","none");
  }
}
$(function(){
  var url = 'http://tianchengapi.applinzi.com'
  $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
  $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
  $('#footer').load('footer.html');
  $('#header').load('header.html',function(){
    $.ajax({
      url: url + "/sessiondata",
      success: function(result){
        if(result.uname){
          $(".header_one>div:last-child").html(`<span>欢迎:&nbsp;</span>${result.uname}&nbsp;&nbsp;<a href="javascript:;" title="退出登录">退出</a>`)
          $("[title='退出登录']").click(function(){
            $.ajax({
              url: url + "/logout",
              success: function(result){
                location.href = "login.html";
              }
            })
          })
        }
        var $input = $(".header>div>div>button").click(function(){
          var $btn = $(this);
          var kwords=$btn.prev().val();
          if(kwords.trim()!=="")
          location.href = `products.html?kwords=${kwords}`;
        }).prev().keyup(function(e){
          if(e.keyCode==13)
            $(this).next().click()
        });
        if(location.search.indexOf("kwords=")!=-1){
          $input.val(decodeURIComponent(location.search.split("=")[1]));
        }
        $("#tail_after>div>button").click(function(){
          var $btn = $(this);
          var kwords=$btn.prev().val();
          if(kwords.trim()!=="")
          location.href = `products.html?kwords=${kwords}`;
        }).prev().keyup(function(e){
          if(e.keyCode==13)
            $(this).next().click()
        });
        if(location.search.indexOf("kwords=")!=-1){
          $input.val(decodeURIComponent(location.search.split("=")[1]));
        } 
        $(document).ready(function () {
          $('.header>.header_two>ul li a').each(function () {
            if ($($(this))[0].href == String(window.location))
            $(this).addClass('active_nav').attr('href', 'javascript:void(0);');
          });
        })
      }
    })
  });
})