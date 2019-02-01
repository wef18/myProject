$(function(){
  var url = 'http://tianchengapi.applinzi.com'
  $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
  $('#footer').load('footer.html');
  if (localStorage.getItem('name')&&localStorage.getItem('pass')){
    $("#remember").attr("checked","checked")
    $("#name").val(localStorage.getItem('name'))
    $("#upwd").val(localStorage.getItem('pass'))
  }
  $("#remember").click(function(){
    if(this.checked){
      $("#remember").attr("checked","checked")
    }else{
      $("#remember").removeAttr("checked")
    }
  })
  $(".btn button").click(function(){
    var uname = $("#name").val();
    var upwd = $("#upwd").val();
    $.ajax({
      type: "POST",
      url: url+"/login",
      data: {uname,upwd},
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      success: function(result){
        if(result.code == 200){
          location.href = 'index.html';
          if($("#remember").prop("checked")){
            var uname = $("#name").val();
            var upwd = $("#upwd").val();
            localStorage.setItem("name",uname)
            localStorage.setItem("pass",upwd)
          }else{
            localStorage.removeItem("name")
            localStorage.removeItem("pass")
          }          
        }else{
          $("#tooltip").css("display","block");
          $("#hint_msg").html("用户名或密码有误！！")
          $("#tooltip>div button").click(function(){
          $("#tooltip").css("display","none")
          })
        }
      }
    })
  })
})