const CACHE_NAME = 'static-v1';
const BASE_PATH = self.location.pathname.replace(/service-worker\.js$/, '');
const BASE_PATH = base.endsWith('/') ? base : base + '/';

const FILES_TO_CACHE = [
  '',
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
  'downloads/ppt_2025-07-27-agm.pdf',
  'offline.html'  // Optional fallback
];

function getCacheUrl(path) {
  return new URL(path, self.location).href;
}

self.addEventListener('install', event => {
  console.log('🛠️ Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(FILES_TO_CACHE.map(path => {
        const url = getCacheUrl(path);
        return fetch(url).then(res => {
          if (res.ok) {
            return cache.put(url, res.clone());
          } else {
            console.warn('❌ Failed to fetch for cache:', url, res.status);
          }
        }).catch(err => {
          console.warn('❌ Error fetching:', url, err);
        });
      }));
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          console.log('🧹 Deleting old cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResp => {
      if (cachedResp) {
        return cachedResp;
      }
      return fetch(event.request).then(networkResp => {
        if (
          networkResp &&
          networkResp.ok &&
          networkResp.type === 'basic'
        ) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResp.clone()).catch(() => {});
          });
        }
        return networkResp;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match(getCacheUrl('offline.html'));
        }
      });
    })
  );
});
