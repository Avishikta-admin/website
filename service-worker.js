self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      const filesToCache = [
        '/website/',                    // Home page (index.html)
        '/website/about-us.html',       // Correct path to HTML files
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

        // JS and JSON files
        '/website/layout.js',
        '/website/notices.json',

        // Images (inside the website folder)
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

        // External resources (Google Fonts, Font Awesome)
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

        // Correct paths for PDF files
        '/website/downloads/mom_2025-05-25-ec.pdf',  // Correct path to PDF file
        '/website/downloads/community-hall-reservation.pdf',
        '/website/downloads/mom_2025-06-29-ec.pdf',
        '/website/downloads/mom-2024-12-22-gb.pdf',
        '/website/downloads/new-membership-form.pdf',
        '/website/downloads/relative-occupants.pdf',
        '/website/downloads/rent-form.pdf',
        '/website/downloads/ppt_2025-07-27-agm.pdf'
      ];

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
