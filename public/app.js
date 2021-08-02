var inputValue='',timer='';
$("#input").on("keyup",function(){

  inputValue = $( "#input" ).val();
  console.log("keyup");
  timer = setTimeout(doneTyping, 2000); 
});

$('#input').on('keydown',function(){
  console.log("down");
  clearTimeout(timer);
  
})

function doneTyping(){

  $.ajax({
    method: "GET",
    url: "http://localhost:4000/server?search="+inputValue,
  }) .done(function( msg ) {
        var json_obj = msg;
       var output="";
      for (var i=0 ;i<json_obj.length;i++) {
                  output +="<h2>" + json_obj[i].name + "</h2><h3>" + json_obj[i].detail+ "</h3>";
                  
              }
              $('#search-result').html(output);
    });

}
