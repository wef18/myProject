$(function(){
  var url = 'http://tianchengapi.applinzi.com'
  $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
  $('#footer').load('footer.html');
  //1.查找触发事件的元素  2.绑定事件处理函数
  $("input:checkbox").click(function(){  
    //查找要修改的元素
    if(this.checked){
      $(".btn button").removeAttr("disabled");
    }else{
      $(".btn button").attr("disabled","disabled");
    }
  });
  
  //input获取焦点时
  //focus()：获取   焦点时   
  $("#uname").focus(function(){
    $("#uname").next().html("以字母开头6~12位").removeClass()
  })
  $("#upwd").focus(function(){
    $("#upwd").next().html("以字母开头6~16位").removeClass()
  })
  $("#cpwd").focus(function(){
    $("#cpwd").next().html("请确认密码").removeClass()
  })
  $("#phone").focus(function(){
    $("#phone").next().html("请输入有效手机号").removeClass()
  })
  $("#email").focus(function(){
    $("#email").next().html("请输入有效邮箱").removeClass()
  })

  //input失去焦点时
  //blur() 失去焦点时
  //验证用户名
  $("#uname").blur(function(){
    var $name =  $("#uname").val();
    //		账号必须为字母+数字的组合，不能出现特殊字符
		var reg =  /^[a-z][a-z0-9]{5,11}$/;
    if(!reg.test($name)){
      $("#uname").next().removeClass().addClass("vali_fail")
    }else{
      $.ajax({
        url:url + "/checkname",
        data: {uname:$name},
        success:function(result){
          // console.log(result)
          if(result.code == 200){
            $("#uname").next().removeClass().addClass("vali_success") 
          }else if(result.code == 201){
            $("#uname").next().html("用户名已存在").removeClass().addClass("vali_fail")
          }
        }
      })
    }
  })
  

  //验证密码
  $("#upwd").blur(function(){
    var $upwd =  $("#upwd").val();
    var reg =  /^[a-z][a-z0-9]{5,15}$/;
    if(!reg.test($upwd)){
      $("#upwd").next().removeClass().addClass("vali_fail")
    }else{
      $("#upwd").next().removeClass().addClass("vali_success")
    }
  })
  //验证二次密码
  $("#cpwd").blur(function(){
    var $upwd =  $("#upwd").val();
    var $cpwp = $("#cpwd").val();
    if(!$cpwp){
      $("#cpwd").next().html("确认密码不能为空").removeClass().addClass("vali_fail")
    }else if($cpwp!==$upwd){
      $("#cpwd").next().html("两次密码不一致").removeClass().addClass("vali_fail")
    }else if($cpwp === $upwd){
      $("#cpwd").next().removeClass().addClass("vali_success")
    }
    
  })

  //验证手机号
  $("#phone").blur(function(){
    var $phone = $("#phone").val();
    var reg = /^1[3-8]\d{9}$/
    if(!reg.test($phone)){
      $("#phone").next().removeClass().addClass("vali_fail")
    }else{
      $.ajax({
        url: url + "/checkphone",
        data: {uphone:$phone},
        success:function(result){
          if(result.code == 200){
            $("#phone").next().removeClass().addClass("vali_success")
          }else if(result.code == 201){
            $("#phone").next().html("手机号已注册").removeClass().addClass("vali_fail")
          }
        }
      })
    }
  })
  

  //验证邮箱
  $("#email").blur(function(){
    var $email = $("#email").val();
    var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    if(!reg.test($email)){
      $("#email").next().removeClass().addClass("vali_fail")
    }else{
      $.ajax({
        url: url + "/checkemail",
        data: {uemail:$email},
        success:function(result){
          // console.log(result)
          if(result.code == 200){
            $("#email").next().removeClass().addClass("vali_success")
          }else if(result.code == 201){
            $("#email").next().html("邮箱已注册").removeClass().addClass("vali_fail")
          }
        }
      })
    }
  })

  //验证验证码
  $("#code").blur(function(){
    var $code = $("#code").val();
    var $verify = $(".verify").html().toLowerCase()
    if($code !== $verify){
      $("#tooltip").css("display","block");
      $("#tooltip>div button").click(function(){
        $("#tooltip").css("display","none")
      })
    }else if($code === $verify){
      $("#code").next().removeClass().addClass("vali_success")
    }
  })

  $(".form button").click(function(){
    var count = 0;
    $('#form-register>div').each(function () {
      if ($(this).find('i').hasClass('vali_success')) {
        count++;
      }
    });
    if(count == 6){
      var uname = $("#uname").val()
      var upwd = $("#upwd").val()
      var uphone = $("#phone").val()
      var uemail = $("#email").val()
      $.ajax({
        type: "POST",
        url: url + "/register",
        data: {uname,upwd,uphone,uemail},
        headers: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        success: function(result){
          if(result.code === 200){
            $("#tooltip").css("display","block");
            $("#hint_msg").html("注册成功！！")
            $("#tooltip>div button").click(function(){
              location.href = 'login.html';
            })
          }
        }
      })
    }else{
      $("#tooltip").css("display","block");
      $("#hint_msg").html("！！输入有误请重新输入")
      $("#tooltip>div button").click(function(){
        $("#tooltip").css("display","none")
      })
    }
  })
  
  //验证码
  var verify=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for(var i=0;i<10;i++){
    verify.push(i);
  }
  var are=[];
  for(var i=0;i<4;i++){
    var ify=Math.floor(Math.random()*verify.length);
    are.push(verify[ify]);
  }
  are.toString().replace(/,/g," ");
  $(".verify").html(are)
  $(".verify").click(function(){
    var are=[];
    for(var i=0;i<4;i++){
      var ify=Math.floor(Math.random()*verify.length);
      are.push(verify[ify]);
    }
    $(".verify").html(are)
  })
})