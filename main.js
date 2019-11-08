var cbpAnimatedHeader = (function () {
  var docElem = document.documentElement,
    header = document.querySelector(".header"),
    didScroll = false,
    changeHeaderOn = 150;

  function init() {
    scrollPage();
    window.addEventListener(
      "scroll",
      function (event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      },
      false
    );
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      header.classList.add("header-shrink");
    } else {
      header.classList.remove("header-shrink");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
})();
