$(function(){
  $.ajax({
    url: "footer.html",
    type: "get",
    success: function(res){
      $(res).replaceAll("#header")
    }
  })
})