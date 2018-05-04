//Business logic
var Number;
function display (){
        $('.number').text('');
  for (var i = 1; i <= number; i++){
  	console.log(i)
    if ((i % 3 == 0) && (i % 5 == 0)) {
      $('.number').append('pingpong<br/>');
    }
    else if (i % 5 == 0) {
      $('.number').append('pong<br/>');
    }
    else if (i % 3 == 0) {
      $('.number').append('ping<br/>');
    }
    else {
      $('.number').append( i.toString() + "<br/>");
    }
  };
  }

  // user interface logic
$(document).ready(function(){
$("form").submit(function(event){
number = $("input#number").val();
display();
event.preventDefault();
});

});
