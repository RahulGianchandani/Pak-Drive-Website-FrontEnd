document.addEventListener("DOMContentLoaded",
function(event){ 




 

  var scrollbtn = document.getElementById("scrolltotop")

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollbtn.style.display = "block";
    } else {
      scrollbtn.style.display = "none";
    }

  }

  
  
}) ;