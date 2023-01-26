function openCode(evt, language) {
  var i, tabcontent, tabbtn;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbtn = document.getElementsByClassName("tabbtn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].className = tabbtn[i].className.replace(" active", "");
  }
  document.getElementById(language).style.display = "block";
  evt.currentTarget.className += " active";
}
window.onload = function () {
            window.scrollTo(0,0);
        };
