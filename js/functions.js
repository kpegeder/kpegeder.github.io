$(document).ready(function () {
  const loadMore = document.getElementById("load-more-projects");
  // console.log($(".h_gallery_item"));
  $(".h_gallery_item").slice(0, 6).slideDown();
  loadMore.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("hi");
    $("div:hidden").slice(0, 6).slideDown();
    if ($("div:hidden").length == 0) {
      loadMore.hide();
    }
  });
});
