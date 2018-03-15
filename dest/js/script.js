"use strict"
document.addEventListener("DOMContentLoaded", function(event) {
  let top = document.querySelector('.js-top');
  top.onclick = function() {
      top.classList.toggle('--animated');
    }
  });
