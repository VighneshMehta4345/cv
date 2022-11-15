// JS created By Thread beet solutions
// Novenber 2022
// https://threadbitsolution.com/

// for Datepicker
$(function () {
  $("#datepicker").datepicker();
});

// for Mobile Footer Modal
$(document).ready(function () {
  // if ($(window).width() <= 767) {
  //   $(".footerButtonWrapper").css({"display": "block", "transition": "all 2s ease"});
  // } else {
  //   $(".footerButtonWrapper").css("display", "none");
    
  // }
  $(".footerButtonWrapper").css("display", "none");
  
  // if ($(window).width() <= 767) {
  //     $("#callusModalToggle").modal('show');
  //  }
  //  else {
  //     $("#callusModalToggle").modal('hide');
  //  }
});

// for Read more button
function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// for footer popup hide
function hideFooter() {
  $(".footerButtonWrapper").css("display", "none");
  $(".footerWrapper").css("margin-bottom", "0px");
}
