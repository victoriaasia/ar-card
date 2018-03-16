"use strict"
document.addEventListener("DOMContentLoaded", function(event) {
  let top = document.querySelector('.js-top');
  let inner = document.querySelector('.js-inner');
  top.onclick = function() {
      top.classList.toggle('--animated');
      inner.classList.toggle('--animated');
    }
  });
