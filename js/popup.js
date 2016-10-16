var obj = new Object();

function clickHandler(e) {
  obj.category = document.getElementById('category').value;
  obj.description = document.getElementById('description').value;
  JSON.stringify(obj);
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.captureVisibleTab(null, function(dataUrl) {
    var currentDate = new Date();
    chrome.tabs.getSelected(null, function(tab) {
      obj.url = tab.url;
    });
    obj.name = "Sean Hofer";
    obj.timestamp = ((currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + " @ " + currentDate.getHours() + ":" + currentDate.getMinutes() + currentDate.getSeconds());
    obj.email = "seansmail@email.fake";
    obj.image = dataUrl;
  });
    document.getElementById('submit').addEventListener('click', clickHandler);
});
