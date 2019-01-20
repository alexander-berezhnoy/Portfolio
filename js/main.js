$(document).ready(function() {
  $(".header").height($(window).height());
});

// $(".navbar a").click(function() {
//   $("body,html").animate(
//     {
//       scrollTop: $("#" + $(this).data("value") + " h1").offset().top
//     },
//     1000
//   );
// });

$(function() {
  $(".navbar a").on("click", function() {
    var position = $("#" + $(this).data("value")).offset().top;
    if ($(this).data("value") !== "home")
      position -= $(".navbar").outerHeight(true);
    var duration = getDuration(position);
    $("HTML, BODY").animate({ scrollTop: position }, duration);
  });
});

$(function() {
  $("button .callOnAction").on("click", function() {
    var position = $("#contact").offset().top - $(".navbar").outerHeight(true);
    var duration = getDuration(position);
    $("HTML, BODY").animate({ scrollTop: position }, duration);
  });
});

function getDuration(target) {
  var currentTop = $("html").offset().top,
    rate = 0.3,
    distance = Math.abs(currentTop - target);
  return distance * rate;
}

$(".btn-download").click(function() {
  // // hope the server sets Content-Disposition: attachment!
  window.location = "files/resume.pdf";
});
