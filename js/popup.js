var obj = new Object();
var track = 0;
function submit(e) {
  obj.category = document.getElementById('category').value;
  obj.description = document.getElementById('description').value;
  submission(JSON.stringify(obj));
}

function about(e){
  alert("Copyright 2016 etc.\nExtension by Sean Hofer\nPage by Michael Atanasio and Zach Shea\nBackend by Jake Ferrante");

}

function settings(e){
  if(track == 0){
    document.getElementById("main").setAttribute("style","visibility:hidden");
    document.getElementById("settingMenu").setAttribute("style","visibility:visible");
    document.getElementById("settingMenu").style.height = "auto";
    track = 1;
  }
  else{
    document.getElementById("main").setAttribute("style","visibility:visible");
    document.getElementById("settingMenu").setAttribute("style","visibility:hidden");
    track = 0;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.captureVisibleTab(null, function(dataUrl) {
    chrome.tabs.getSelected(null, function(tab) {
      obj.url = tab.url;
    });
    obj.email = "seansmail@email.fake";
    obj.image = dataUrl;
    obj.status = 0;
  });
  document.getElementById('submit').addEventListener('click', submit);
  document.getElementById('about').addEventListener('click', about);
  document.getElementById('settings').addEventListener('click', settings);
});

function submission(object) {
  var url = "http://bully-report-system.azurewebsites.net/api/ticket/submit";
  var params = object;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      alert("Thanks! Your report has been processed.");
    }
  }
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(params);

}
