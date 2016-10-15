document.getElementById("submit").addEventListener("click", function(){
  obj.category = document.getElementById('category').value;
  obj.description = document.getElementById('description').value;
  console.log(JSON.stringify(obj));
}
chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.captureVisibleTab(null, "png", function(image) {
          var obj = new Object();
          var currentDate = new Date();
          var c = document.getElementById("myCanvas");
          var ctx = c.getContext("2d");
          ctx.drawImage(image, 10, 10);
          obj.name = "Sean Hofer";
          obj.timestamp = ((currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + " @ " + currentDate.getHours() + ":" + currentDate.getMinutes() + currentDate.getSeconds());
          obj.email = "seansmail@email.fake";
          obj.image = c.toDataURL();
        }
      }
