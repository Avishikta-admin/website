self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      const filesToCache = [
        '/',
        '/about-us.html',
        '/vision-mission.html',
        '/governing-body.html',
        '/our-members.html',
        '/view-announcements.html',
        '/events.html',
        '/mom.html',
        '/new-resident-guide.html',
        '/general-guidelines.html',
        '/useful-links.html',
        '/download-center.html',
        '/projects.html',
        '/feedback.html',
        '/volunteer.html',
        '/contact-us.html',
        '/faq.html',
        '/search.html',
        '/event-calendar.html',
        '/layout.js',
        '/notices.json',
        '/19thagm-1.jpg',
        '/19thagm-2.jpg',
        '/19thagm-3.jpg',
        '/19thagm-4.jpg',
        '/19thagm-5.jpg',
        '/19thagm-6.jpg',
        '/Community_Development.jpg',
        '/Electrical_Pole_Reno.jpg',
        '/Image-1.jpg',
        '/Image-2.jpg',
        '/Image-3.jpg',
        '/img-1.jpg',
        '/img-2.jpg',
        '/img-3.jpg',
        '/img-4.jpg',
        '/img-5.jpg',
        '/khutipujo-1.jpg',
        '/new-security-room.jpg',
        '/notice_board.jpg',
        '/stp-maintenance-service.jpg',
        '/working-drain-cleaning.jpg',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        '/downloads/community-hall-reservation',
        '/downloads/mom_2025-05.-2025-ec',
        '/downloads/mom_2025-06-29-ec',
        '/downloads/mom-2024-12-22-gb',
        '/downloads/new-membership-form',
        '/downloads/relative-occupants',
        '/downloads/rent-form',
        '/downloads/mom_resolutions_19thagm2025.pdf',
        '/downloads/internal_work_intimation_form.pdf',
        '/downloads/ppt_19thagm_27072025.pdf'
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
