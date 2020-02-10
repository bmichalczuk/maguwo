(function() {
    const navbtn = document.querySelector(".nav__toggle");
    const helpbtn = document.querySelector(".help__toggle");
    
    function toggleParentClass(el, toggledClass) {
        const parent = el.parentNode;
        parent.classList.toggle(toggledClass);
    }  

    navbtn.addEventListener("click",() => {toggleParentClass(navbtn, "nav--opened")})
    helpbtn.addEventListener("click",() => {toggleParentClass(helpbtn, "help--opened")})
})();




