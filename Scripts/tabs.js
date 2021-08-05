function openVerticalTab(evt, tabName) {
  var i, maintabcontent, maintablinks;
  tabcontent = document.getElementsByClassName("maintabcontent");
  for (i = 0; i < maintabcontent.length; i++) {
    maintabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("maintablinks");
  for (i = 0; i < maintablinks.length; i++) {
    maintablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}