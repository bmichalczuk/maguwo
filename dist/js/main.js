"use strict";

(function () {
    var navbtn = document.querySelector(".nav__toggle");
    var helpbtn = document.querySelector(".help__toggle");

    function toggleParentClass(el, toggledClass) {
        var parent = el.parentNode;
        parent.classList.toggle(toggledClass);
    }

    navbtn.addEventListener("click", function () {
        toggleParentClass(navbtn, "nav--opened");
    });
    helpbtn.addEventListener("click", function () {
        toggleParentClass(helpbtn, "help--opened");
    });
})();