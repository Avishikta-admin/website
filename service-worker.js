self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      const filesToCache = [
        '/website/',
        '/website/about-us.html',
        '/website/19thagm-1.jpg',
        '/website/downloads/mom_2025-05-25-ec.pdf',  // Example of a PDF file to cache
        // Add more files as needed
      ];

      console.log('Attempting to cache the following files:', filesToCache);

      const cachePromises = filesToCache.map(url => {
        return fetch(url)
          .then(response => {
            if (response.ok) {
              console.log(`Caching: ${url}`);
              return cache.put(url, response);
            } else {
              console.log(`Failed to fetch ${url}: ${response.status}`);
            }
          })
          .catch(error => {
            console.log(`Error caching ${url}: ${error}`);
          });
      });

      return Promise.all(cachePromises).then(() => {
        console.log('All files cached successfully.');
      }).catch((error) => {
        console.log('Error caching files:', error);
      });
    })
  );
});

// Fetch event to serve cached files
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request) // Check if the file is in the cache
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log(`Serving cached file: ${event.request.url}`);
          return cachedResponse; // Return cached response
        }

        console.log(`Fetching from network: ${event.request.url}`);
        return fetch(event.request) // If not cached, fetch from the network
          .then((networkResponse) => {
            // Optionally, you can cache new responses on the fly
            if (networkResponse.ok) {
              caches.open('static-v1').then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch((error) => {
            console.log(`Network request failed for: ${event.request.url}`, error);
            // If offline and network request fails, you could serve an offline page
            return new Response('Network error occurred and offline page not available.', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});
