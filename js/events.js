
$(document).ready(function(){
  
  getIt();
frameIt();
pressIt();
submitIt();
})

function getIt(){
  $("p").on("click", function(){
    window.alert("Hey!");
    });
  }
  
function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}

function pressIt(){
  $("input").on("keydown", function(e){
    if (e.which === 71){
      window.alert("G was pressed.");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    window.alert("Your form is going to be submitted now.");
  });
 }