$(document).ready(function(){
  $("#get_color").on("click", function(event) {
    event.preventDefault();
    $.ajax({
      url: "/color",
      type: "POST",
      dataType: "json",
      success: function (response) {
        elem = $("#color_me").children()[response.cell_num];
        $(elem).css("background-color", response.color);
      }
    })
  })
})

      
