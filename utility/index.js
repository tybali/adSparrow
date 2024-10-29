export const nextUtility = {

  toTitleCase(str) {
    return str
      .toLowerCase() 
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },
  stickyNav() {
    // const header = document.getElementById("header-sticky");

    // // Add an event listener to the window's scroll event
    // window.addEventListener("scroll", function () {
    //   // Check the scroll position
    //   if (window.scrollY > 50) {
    //     // If the scroll position is greater than 250, add the "sticky" class
    //     header.classList.add("sticky");
    //   } else {
    //     // Otherwise, remove the "sticky" class
    //     header.classList.remove("sticky");
    //   }
    // });
  },
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
};
