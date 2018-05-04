var number;
function display (){
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
  //https://github.com/WekesaN/PINGPONG.git
  // display();
  // alert(results);
  // $(document).ready(function(){
  //   $("form").submit(function(event){
  //     event.preventDefault()
  //     var number = parseInt($("input#number").val());
  //
  //     var results = btn(number)
  //     $("results").show()
  //   })
  // })
  // user interface logic
$(document).ready(function(){
$("form").submit(function(event){
number = $("input#number").val();
display();

event.preventDefault();
});

});
