self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch('/img/1.jpg')
  );
});