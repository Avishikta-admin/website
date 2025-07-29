self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        // HTML Files
        '/website/',            // Path to the home page if it is index.html
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

        // JS File
        '/website/layout.js',  // Path to JS file inside the website folder

        // JSON File
        '/website/notices.json',  // Path to JSON file inside the website folder

        // Images (all images in the website folder)
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

        // Downloads Folder Files (All files in the downloads folder)
        '/website/downloads/community-hall-reservation',
        '/website/downloads/mom_2025-05.-2025-ec',
        '/website/downloads/mom_2025-06-29-ec',
        '/website/downloads/mom-2024-12-22-gb',
        '/website/downloads/new-membership-form',
        '/website/downloads/relative-occupants',
        '/website/downloads/rent-form',
        '/website/downloads/mom_resolutions_19thagm2025.pdf',
        '/website/downloads/internal_work_intimation_form.pdf',
        '/website/downloads/ppt_19thagm_27072025.pdf'
      ]);
    })
  );
});
