$(document).ready(function () {
    $(function(){
        $('.dropdown').hover(function() {
            $(this).addClass('open');
        },
        function() {
            $(this).removeClass('open');
        });
    });
});

/* acordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*toggle*/
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  dots:true,
  centerMode: true,
  });
});



window.onload = function (e) {


  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  var a3 = document.getElementById("a3");




  function animate() {


      setTimeout(function () {
          a2.addClass("active");
      }, 3400);

      setTimeout(function () {
  a3.addClass("active");
      }, 6800);		

      
      setTimeout(function () {
          a2.removeClass("active");
          a3.removeClass("active");
      }, 10200);     
      

      setTimeout(function () {
          animate();
      }, 10200);			


  }

  animate();



};
