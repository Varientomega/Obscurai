/* ObscurAI Cash App config. Cashtag intentionally empty: Cash App buttons are removed until the owner supplies a new cashtag.
   To re-enable: set the tag, then add <a data-cashapp data-amount="49" hidden>…</a> buttons and include this script. */
window.OBX_CASHAPP_TAG = "";
(function () {
  function apply() {
    var els = document.querySelectorAll("[data-cashapp]");
    var t = window.OBX_CASHAPP_TAG;
    for (var k = 0; k < els.length; k++) {
      if (!t) { els[k].hidden = true; els[k].removeAttribute("href"); continue; }
      els[k].hidden = false;
      els[k].setAttribute("href", "https://cash.app/$" + t + "/" + els[k].getAttribute("data-amount"));
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
})();
