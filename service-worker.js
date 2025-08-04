const CACHE_NAME = 'static-v1';

// Dynamically detect base path (e.g. "/" or "/website/")
const BASE_PATH = self.location.pathname.replace(/service-worker\.js$/, '');

// List of files to cache, relative to base path
const FILES_TO_CACHE = [
  '',                        // This means base path root, e.g. "/website/" or "/"
  'about-us.html',
  'vision-mission.html',
  'governing-body.html',
  'our-members.html',
  'view-announcements.html',
  'events.html',
  'mom.html',
  'new-resident-guide.html',
  'general-guidelines.html',
  'useful-links.html',
  'download-center.html',
  'projects.html',
  'feedback.html',
  'volunteer.html',
  'contact-us.html',
  'faq.html',
  'search.html',
  'event-calendar.html',
  'layout.js',
  'notices.json',
  '19thagm-1.jpg',
  '19thagm-2.jpg',
  '19thagm-3.jpg',
  '19thagm-4.jpg',
  '19thagm-5.jpg',
  '19thagm-6.jpg',
  'Community_Development.jpg',
  'Electrical_Pole_Reno.jpg',
  'Image-1.jpg',
  'Image-2.jpg',
  'Image-3.jpg',
  'img-1.jpg',
  'img-2.jpg',
  'img-3.jpg',
  'img-4.jpg',
  'img-5.jpg',
  'khutipujo-1.jpg',
  'new-security-room.jpg',
  'notice_board.jpg',
  'stp-maintenance-service.jpg',
  'working-drain-cleaning.jpg',
  'downloads/mom_2025-05-25-ec.pdf',
  'downloads/community-hall-reservation.pdf',
  'downloads/mom_2025-06-29-ec.pdf',
  'downloads/mom-2024-12-22-gb.pdf',
  'downloads/new-membership-form.pdf',
  'downloads/relative-occupants.pdf',
  'downloads/rent-form.pdf',
  'downloads/ppt_2025-07-27-agm.pdf'
];

// Helper to prepend base path safely
function getCacheUrl(path) {
  return BASE_PATH + path;
}

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const cachePromises = FILES_TO_CACHE.map(path => {
        const url = getCacheUrl(path);
        return fetch(url).then(response => {
          if (response.ok) {
            console.log('Caching:', url);
            return cache.put(url, response);
          } else {
            console.warn('Failed to fetch:', url, response.status);
          }
        }).catch(err => console.warn('Cache error:', url, err));
      });
      return Promise.all(cachePromises);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cachedResp => {
      if (cachedResp) {
        console.log('Serving from cache:', event.request.url);
        return cachedResp;
      }
      console.log('Fetching from network:', event.request.url);
      return fetch(event.request).then(networkResp => {
        if (
          networkResp &&
          networkResp.ok &&
          networkResp.type === 'basic'
        ) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResp.clone());
          });
        }
        return networkResp;
      }).catch(() => {
        return new Response('Offline page not available.', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});
