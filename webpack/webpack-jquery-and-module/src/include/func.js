const $ = require("jquery");

function changeCss() {
  setTimeout(() => {
    $('.foo').css({"background-color": "#f00", "color": "#fff"});
  }, 3000);
}
function changeBorder() {
  $('.foo').css({"border": "5px solid #0ff"});
}
function changeFontSize() {
  $('.foo').css({"font-size": "2rem"});
}

export { changeCss, changeBorder, changeFontSize };