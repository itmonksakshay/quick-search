$("#input").on("keyup",function(){
     var inputValue = $( "#input" ).val();
$.ajax({
  method: "GET",
  url: "http://localhost:4000/server?search="+inputValue,
}) .done(function( msg ) {
      var json_obj = msg;
     var output="";
    for (var i=0 ;i<json_obj.length;i++) 
            {
                output +="<h2>" + json_obj[i].name + "</h2><h3>" + json_obj[i].detail+ "</h3>";
                
            }
            $('#search-result').html(output);
  });

});
