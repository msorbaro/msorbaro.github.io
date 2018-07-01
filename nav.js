

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

console.log(sections);

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {

      nav.find('a').removeClass('active');
      sections.removeClass('active');

      nav.find('a[href="#'+$(this).attr('class')+'"]').addClass('active');
      $(this).addClass('active');

    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

    id = "." + id.substring(1, id.length);
    // if (window.location.href != "index.html") {
    //   window.location.href = "index.html";
    // }
    console.log("id" + id)
    console.log(window.location.href.substring(window.location.href.length -13, window.location.href.length ))
    if (window.location.href.substring(window.location.href.length -13 , window.location.href.length ) === "projects.html"){
      window.location.href = "index.html";
    }
    console.log("scholled nab:");
    console.log($('.scrolled-nav').height());


    console.log("HI");
    console.log($(id).offset().top - 55);
  $('html, body').animate({
    scrollTop: $(id).offset().top - 55
  }, 500);

  return false;
});


function checkScroll(){
    var startY = $('.nav').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.nav').addClass("scrolled");
    }else{
        $('.nav').removeClass("scrolled");
    }
}

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 50) {
      $('.nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.nav').removeClass('scrolled-nav');
    }

  });

});
