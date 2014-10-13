var resize_content = function() {
  var content = document.getElementById('content');
  content.style.width  = (window.document.documentElement.clientWidth  - 16) + 'px'
  content.style.height = (window.document.documentElement.clientHeight - 16) + 'px'
}

window.onresize = resize_content;
window.onload = function() {
  resize_content();
  var webview = document.getElementById("webview");

  webview.addEventListener('contentload', function(){
    webview.executeScript({ code: '[].forEach.call(document.querySelectorAll("[data-chrome-app=show]"), function(element){element.classList.remove("hidden")})' });
    webview.executeScript({ code: '[].forEach.call(document.querySelectorAll("[data-chrome-app=hidden]"), function(element){element.classList.add("hidden")})' });
  });

  webview.addEventListener('newwindow', function(e) {
    window.open(e.targetUrl);
  });
};
