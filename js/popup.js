var obj = new Object();

function clickHandler(e) {
  obj.category = document.getElementById('category').value;
  obj.description = document.getElementById('description').value;
  submission(JSON.stringify(obj));
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.captureVisibleTab(null, function(dataUrl) {
    var currentDate = new Date();
    chrome.tabs.getSelected(null, function(tab) {
      obj.url = tab.url;
    });
    obj.timestamp = ((currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + " @ " + currentDate.getHours() + ":" + currentDate.getMinutes() + currentDate.getSeconds());
    obj.email = "seansmail@email.fake";
    obj.image = dataUrl;
    obj.status = 0;
  });
  document.getElementById('submit').addEventListener('click', clickHandler);
});

function submission(object) {
  var url = "http://bully-report-system.azurewebsites.net/";
  var params = object;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      alert("Thanks! Your report has been processed.");
    }
  }
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(params);

}
