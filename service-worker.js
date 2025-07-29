self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      const filesToCache = [
        '/website/',            // Home page (assumes you want index.html or similar)
        '/website/about-us.html',
        '/website/vision-mission.html',
        '/website/governing-body.html',
        '/website/our-members.html',
        '/website/view-announcements.html',
        '/website/events.html',
        '/website/mom.html',
        '/website/new-resident-guide.html',
        '/website/general-guidelines.html',
        '/website/useful-links.html',
        '/website/download-center.html',
        '/website/projects.html',
        '/website/feedback.html',
        '/website/volunteer.html',
        '/website/contact-us.html',
        '/website/faq.html',
        '/website/search.html',
        '/website/event-calendar.html',
        '/website/layout.js',  // Correct path for JS file inside the website folder
        '/website/notices.json',  // Correct path for JSON file inside the website folder
        '/website/19thagm-1.jpg',
        '/website/19thagm-2.jpg',
        '/website/19thagm-3.jpg',
        '/website/19thagm-4.jpg',
        '/website/19thagm-5.jpg',
        '/website/19thagm-6.jpg',
        '/website/Community_Development.jpg',
        '/website/Electrical_Pole_Reno.jpg',
        '/website/Image-1.jpg',
        '/website/Image-2.jpg',
        '/website/Image-3.jpg',
        '/website/img-1.jpg',
        '/website/img-2.jpg',
        '/website/img-3.jpg',
        '/website/img-4.jpg',
        '/website/img-5.jpg',
        '/website/khutipujo-1.jpg',
        '/website/new-security-room.jpg',
        '/website/notice_board.jpg',
        '/website/stp-maintenance-service.jpg',
        '/website/working-drain-cleaning.jpg',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        '/website/downloads/community-hall-reservation.pdf',
        '/website/downloads/mom_2025-05.-2025-ec.pdf',
        '/website/downloads/mom_2025-06-29-ec.pdf',
        '/website/downloads/mom-2024-12-22-gb.pdf',
        '/website/downloads/new-membership-form.pdf',
        '/website/downloads/relative-occupants.pdf',
        '/website/downloads/rent-form.pdf',
        '/website/downloads/ppt_19thagm_27072025.pdf'
      ];

      // Log each file before attempting to cache it
      console.log('Caching the following files:', filesToCache);

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
        console.log('Files cached successfully.');
      }).catch((error) => {
        console.log('Error caching files:', error);
      });
    })
  );
});
