var number = parseInt(prompt("enter number"));
var results = "";
function display (){
  for (var i = 1; i <= number; i++){
  	console.log(i)
    if ((i % 3 == 0) && (i % 5 == 0)) {
      results += "pingpong";
    }
    else if (i % 5 == 0) {
      results += "pong";
    }
    else if (i % 3 == 0) {
      results += "ping";
    }
    else {
      results += i.toString();
    }
  };
  }
  display();
  alert(results);
  $(document).ready(function(){
    $("form #btn").submit(function(event){
      
    })
  })
