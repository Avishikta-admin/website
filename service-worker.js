self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        // HTML Files
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

        // JS File
        '/layout.js',  // Since JS file is in the root of website folder

        // JSON File
        '/notices.json',  // JSON file is in the root of website folder

        // Images (all the images in website folder)
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

        // External resources (Google Fonts, Font Awesome)
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

        // Downloads Folder Files (All files in the downloads folder)
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
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
