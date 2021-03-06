var obj = new Object();
var track = 0;

function submit(e) {
  obj.category = document.getElementById('category').value;
  obj.description = document.getElementById('description').value;
  submission(JSON.stringify(obj));
}

function settings(e) {
  if (track == 0) {
    document.getElementById("main").setAttribute("style", "visibility:hidden");
    document.getElementById("settingMenu").setAttribute("style", "visibility:visible");
    document.getElementById("settingMenu").style.height = "auto";
    track = 1;
  } else {
    document.getElementById("main").setAttribute("style", "visibility:visible");
    document.getElementById("settingMenu").setAttribute("style", "visibility:hidden");
    track = 0;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.captureVisibleTab(null, {format:"jpeg",quality:50}, function(dataUrl) {
    chrome.tabs.getSelected(null, function(tab) {
      obj.url = tab.url;
    });
    obj.email = document.getElementById('email').innerHTML;
    obj.image = dataUrl;
    obj.status = 0;
  });
  document.getElementById('submit').addEventListener('click', submit);
  document.getElementById('settings').addEventListener('click', settings);
});

function submission(object) {
  var url = "http://localhost:3000/api/ticket/submit";
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
