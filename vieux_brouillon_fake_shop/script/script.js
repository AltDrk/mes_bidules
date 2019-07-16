/* $(document).ready(function(){
$('window').scroll(function(){
  var scroll = $(window).scrollTop();
    $('#toSlide').toggleClass('slideInactive');
  });
}); */




  $(document).ready(function(){

    $(window).on("scroll",function() {

        if($(this).scrollTop() >= 1700) 

            $('#toSlide').addClass('slideInactive');
        else
            $('#toSlide').removeClass('slideInactive');
        
    })
})

// recupérer scrollTop value
/*$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
   let scrollToDiv = $('#toSlide').offset().top
    console.log(scrollTop);
    console.log(scrollToDiv);
    
  }); */
  

  let navbar = document.getElementsByClassName("navbar");
let sticky = navbar.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.nav li').click(function(){
  $('.nav-item').removeClass('active');
  $(this).addClass('active');
})