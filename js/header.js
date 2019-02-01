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
  $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
  $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
  // $('#header').load('header.html');
   $('#footer').load('footer.html');
  $.ajax({
    url: "header.html",
    type: "get",
    success: function(res){
      $(res).replaceAll("#header")
      var $input = $(".header>div>div>button").click(function(){
        var $btn = $(this);
        var kwords=$btn.prev().val();
        if(kwords.trim()!=="")
        // console.log(123)
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
      // $(".header>.header_two>ul li").click(function(){
      //   var $li = $(this);
      //   $li.addClass("checked").siblings().removeClass("checked");
      // })  
      $(document).ready(function () {
        $('.header>.header_two>ul li a').each(function () {
          if ($($(this))[0].href == String(window.location))
          $(this).addClass('active_nav').attr('href', 'javascript:void(0);');
        });
      })
      if (localStorage.getItem('name')&&localStorage.getItem('pass')){
        $(".header_one>div:last-child").html("欢迎"+localStorage.name)
        console.log($(".header_one>div:last-child"))
      }
    }
  })
})