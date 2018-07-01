var clicked = false;

//all the over stuff for jobs
  $('.jobs .liq img').hover(function(){
    if (!clicked) {
      $(this).attr('src', './images/liquidnetA.png');
    }
  },function() {
    if (!clicked) {
      $(this).attr('src', './images/liquidnet.png');
    }
  })

  $('.jobs .amu img').hover(function(){
    if (!clicked) {
      $(this).attr('src', './images/amuletA.png');
    }
  },function() {
    if (!clicked) {
      $(this).attr('src', './images/amulet.png');
    }
  })

  $('.jobs .nsm img').hover(function(){
    if (!clicked) {
      $(this).attr('src', './images/nsmrlA.png');
    }
  },function() {
    if (!clicked) {
      $(this).attr('src', './images/nsmrl.png');
    }
  })

var p = $( ".first_position" );
var position = p.position();
console.log(position);

var p2 = $( ".first_position" );
var position2 = p2.position() ;
console.log(position);

//clicking ones
$('.liq').on('click', function(e) {
  console.log("Liquidnet clicked");
  clicked = !clicked;
  if(clicked){
    $('.liq img').attr('src', './images/liquidnetA.png');
    $('.liq').css('margin-left', position.left);
    $('.hide').css('margin-right', position2.left);
    $('.amu').css('display', "none");
    $('.nsm').css('display', "none");
    $('.amu').css('opacity', 0);
    $('.nsm').css('opacity', 0);
    $('.liq_hidden').css('display', "flex");
    setTimeout(function () {
      $('.liq_hidden').css('opacity', 1);
    }, 20);
    $('.liq h4').css('display', "none");
    $('.liq h2').css('display', "none");

  }
  else {
    $('.liq img').attr('src', './images/liquidnet.png');
    $('.liq').css('margin-left', 0);
    $('.liq_hidden').css('display', "none");
    $('.liq_hidden').css('opacity', 0);
    $('.liq h4').css('display', "block");
    $('.liq h2').css('display', "block");
    $('.amu').css('display', "block");
    $('.nsm').css('display', "block");
    setTimeout(function () {
      $('.amu').css('opacity', 1);
      $('.nsm').css('opacity', 1);
    }, 20);
  }
});
$('.amu').on('click', function(e) {
  console.log("Amulet clicked");
  clicked = !clicked;
  if(clicked){
    $('.amu img').attr('src', './images/amuletA.png');
    $('.amu').css('margin-left', position.left);
    $('.hide').css('margin-right', position2.left);

    $('.nsm').css('display', "none");
    $('.liq').css('display', "none");
    $('.nsm').css('opacity', 0);
    $('.liq').css('opacity', 0);

    $('.amu_hidden').css('display', "flex");
    setTimeout(function () {
      $('.amu_hidden').css('opacity', 1);
    }, 20);
    $('.amu h4').css('display', "none");
    $('.amu h2').css('display', "none");
  }
  else {
    $('.amu img').attr('src', './images/amulet.png');
    $('.amu').css('margin-left', 0);
    $('.nsm').css('display', "block");
    $('.liq').css('display', "block");
    $('.amu_hidden').css('display', "none");
    $('.amu_hidden').css('opacity', 0);
    $('.amu h4').css('display', "block");
    $('.amu h2').css('display', "block");
    setTimeout(function () {
      $('.liq').css('opacity', 1);
      $('.nsm').css('opacity', 1);
    }, 20);
  }
});

$('.nsm').on('click', function(e) {
  console.log("nsmrl clicked");
  clicked = !clicked;
  if (clicked) {
    $('.nsm img').attr('src', './images/nsmrlA.png');
    $('.nsm').css('margin-left', position.left);
    $('.hide').css('margin-right', position2.left);
    $('.amu').css('display', "none");
    $('.liq').css('display', "none");
    $('.amu').css('opacity', 0);
    $('.liq').css('opacity', 0);
    $('.nsm_hidden').css('display', "flex");
    setTimeout(function () {
      $('.nsm_hidden').css('opacity', 1);
    }, 20);
    $('.nsm h4').css('display', "none");
    $('.nsm h2').css('display', "none");

  }
  else {
    $('.nsm img').attr('src', './images/nsmrl.png');
    $('.nsm').css('margin-left', 0);
    $('.amu').css('display', "block");
    $('.liq').css('display', "block");
    $('.nsm_hidden').css('display', "none");
    $('.nsm_hidden').css('opacity', 0);
    $('.nsm h4').css('display', "block");
    $('.nsm h2').css('display', "block");
    setTimeout(function () {
      $('.liq').css('opacity', 1);
      $('.amu').css('opacity', 1);
    }, 20);
  }
});


$('.hide i').hover(function(){
    $(this).css('color', 'rgb(65,231, 207)');

},function() {
    $(this).css('color', 'rgb(48,84, 236)');
})


$('.amu_hidden i').on('click', function(e) {
  clicked = !clicked;
  $('.amu img').attr('src', './images/amulet.png');
  $('.amu').css('margin-left', 0);
  $('.nsm').css('display', "block");
  $('.liq').css('display', "block");
  $('.amu_hidden').css('display', "none");
  $('.amu_hidden').css('opacity', 0);
  $('.amu h4').css('display', "block");
  $('.amu h2').css('display', "block");
  setTimeout(function () {
    $('.liq').css('opacity', 1);
    $('.nsm').css('opacity', 1);
  }, 20);
});

$('.nsm_hidden i').on('click', function(e) {
  clicked = !clicked;
  $('.nsm img').attr('src', './images/nsmrl.png');
  $('.nsm').css('margin-left', 0);
  $('.amu').css('display', "block");
  $('.liq').css('display', "block");
  $('.nsm_hidden').css('display', "none");
  $('.nsm_hidden').css('opacity', 0);
  $('.nsm h4').css('display', "block");
  $('.nsm h2').css('display', "block");
  setTimeout(function () {
    $('.liq').css('opacity', 1);
    $('.amu').css('opacity', 1);
  }, 20);
});

$('.liq_hidden i').on('click', function(e) {
  clicked = !clicked;
  $('.liq img').attr('src', './images/liquidnet.png');
  $('.liq').css('margin-left', 0);
  $('.liq_hidden').css('display', "none");
  $('.liq_hidden').css('opacity', 0);
  $('.liq h4').css('display', "block");
  $('.liq h2').css('display', "block");
  $('.amu').css('display', "block");
  $('.nsm').css('display', "block");
  setTimeout(function () {
    $('.amu').css('opacity', 1);
    $('.nsm').css('opacity', 1);
  }, 20);
});
