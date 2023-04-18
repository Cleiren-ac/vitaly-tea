(function() {
//   "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * landing carousel indicators
   */
  let landingCarouselIndicators = select("#landing-carousel-indicators")
  let landingCarouselItems = select('#landingCarousel .carousel-item', true)

  landingCarouselItems.forEach((item, index) => {
    (index === 0) ?
    landingCarouselIndicators.innerHTML += "<li data-bs-target='#landingCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      landingCarouselIndicators.innerHTML += "<li data-bs-target='#landingCarousel' data-bs-slide-to='" + index + "'></li>"
  });

})()