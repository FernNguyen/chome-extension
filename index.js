chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var audio = new Audio('notification.mp3');
    audio.play();
  },
  {
    urls: ["https://www.facebook.com/ajax/mercury/delivery_receipts.php*"]
  });
