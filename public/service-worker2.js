'use strict';

let newLink = ""; //need improvement

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  let receivedObj = event.data.json();
  newLink = receivedObj.link; //need improvement
  const title = receivedObj.title;
  const options = {
    body: receivedObj.body,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

	const notificationPromise = self.registration.showNotification(title, options);
	event.waitUntil(notificationPromise);
});


self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow(newLink) //need improvement
  );
});
