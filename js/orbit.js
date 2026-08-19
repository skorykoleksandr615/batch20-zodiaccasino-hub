(function () {
  var head = document.getElementById("orbitHead");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("constelNav");

  function onScroll() {
    if (!head) return;
    if (window.scrollY > 8) head.classList.add("is-solid");
    else head.classList.remove("is-solid");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var more = document.querySelector("[data-more-reels]");
  var grid = document.getElementById("reelGrid");
  if (more && grid) {
    more.addEventListener("click", function () {
      var open = grid.classList.toggle("is-open");
      more.textContent = open ? "Show less" : "Show more";
    });
  }
})();
