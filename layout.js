(() => {
  // Load fonts and icons
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);

  const iconLink = document.createElement("link");
  iconLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
  iconLink.rel = "stylesheet";
  document.head.appendChild(iconLink);

  // Disable right-click functionality
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();  // Prevent the right-click menu from showing
    alert("Right-click is disabled on this page.");  // Alert the user
  });

  // Disable text selection (for copy-paste prevention)
  document.addEventListener('selectstart', function (event) {
    event.preventDefault();  // Prevent text selection
  });

  // Disable copy functionality
  document.addEventListener('copy', function (event) {
    event.preventDefault();  // Prevent the copy action
    alert("Copying is disabled on this page.");  // Alert the user
  });

  // Disable paste functionality
  document.addEventListener('paste', function (event) {
    event.preventDefault();  // Prevent the paste action
    alert("Pasting is disabled on this page.");  // Alert the user
  });

  // Styles for header, footer, and nav
  
  const style = document.createElement("style");
  style.textContent = `
    /* General resets and body padding for nav, header, footer */
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding-top: 54px;
      padding-bottom: 60px; /* reduced footer height */
      padding-left: 260px; /* nav width */
      background-color: #f4f6f9;
      color: #333;
    }

    header, footer {
      font-family: 'Poppins', sans-serif;
      position: fixed;
      left: 0;
      width: 100%;
      z-index: 9999;
      text-align: center;
      padding: 10px 20px;
      background: linear-gradient(135deg, #2a72d8, #feb47b);
      color:#ffffff;
      user-select: none;
      box-sizing: border-box;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    header {
      top: 0;
      font-weight: 600;
      font-size: 0.95rem;
      line-height: 1.4;
    }
    footer {
      bottom: 0;
      font-size: 0.85rem;
      color: #c0faff;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 20px;
      gap: 20px;
      flex-wrap: wrap;
      min-height: 40px; /* reduced height */
    }
    footer .footer-credit {
      color: #ffffff;
      font-weight: 600;
      white-space: nowrap;
      user-select:none;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
    }

    footer .current-time {
      color: #ffffff;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
    }

    footer .footer-credit span.heart {
      color: red;
      font-size: 1.1rem;
      user-select:none;
    }
    footer .footer-links {
      display: flex;
      gap: 16px;
      align-items: center;
      white-space: nowrap;
      font-weight: 600;
    }
    footer .footer-links a {
      color: #ffffff;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      transition: color 0.25s ease;
      user-select:none;
    }
    footer .footer-links a:hover,
    footer .footer-links a:focus {
      color: #00bcd4;
      outline: none;
    }
    footer .footer-links a.home-link i {
      color: #80e0e8;
    }
    
    .blinking-text {
      animation: fadeInOut 2s ease-in-out infinite;
      color: #00e6e6;
    }

/* Style for Hamburger Button */
.hamburger {
  background-color: #fd7e14; /* Bootstrap Blue */
  border: none;
  font-size: 30px;
  color: white; /* Icon color */
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10000;
  padding: 10px;
  border-radius: 6px; /* Rounded corners */
  display: none; /* Initially hidden */
}

.hamburger:hover {
  background-color: #e35d04; /* Darker blue on hover */
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 9999;
}

  @keyframes fadeInOut {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

    /* NAVIGATION STYLES */
    nav#main-nav {
      position: fixed;
      top: 54px;
      left: 0;
      width: 260px;
      height: calc(100vh - 114px); /* header + footer height reduced */
      background-color: #001f3f;
      color: #cfd8dc;
      box-shadow: 2px 0 15px rgba(0,0,0,0.3);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: none;
      flex-direction: column;
      padding: 20px 12px;
      z-index: 9999;
      user-select:none;
      overflow-y: auto;
    }
    nav#main-nav:hover {
      background-color: #003366;
    }
    nav#main-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      flex-grow: 1;
    }

    
    nav#main-nav li {
      margin-top: 18px;
    }
    nav#main-nav > ul > li > button.section-header {
      color: inherit;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem; /* Reduced font size here */
      background: none;
      border: none;
      width: 100%;
      cursor: pointer;
      user-select: none;
      text-align: left;
      border-radius: 6px;
      position: relative;
      box-shadow: inset 0 0 0 0 #00bcd4;
    }


/* Hide submenu by default */

/* Show submenu when li has 'open' class */
nav#main-nav ul[role="menu"] > li.open > ul {
  display: block;
}

/* Rotate arrow when li has 'open' */
nav#main-nav ul[role="menu"] > li > button.section-header::after {
  content: "▼"; /* down arrow */
  float: right;
  transition: transform 0.3s ease;
  transform-origin: center;
}

nav#main-nav ul[role="menu"] > li.open > button.section-header::after {
  transform: rotate(180deg); /* arrow up */
}


/* Submenu visibility on hover (for mouse) and active (for touch) */




/* Styling for submenu items */
nav#main-nav > ul > li > ul > li a {
  padding-left: 32px;
  color: #ffffff;
  text-decoration: none;
  display: block;
}


/* Submenu (collapsed state) when not hovered or tapped */
nav#main-nav > ul > li > ul {
  display: none;  /* Start as hidden */
  opacity: 0; /* Hidden state */
  visibility: hidden; /* Hidden state */
  max-height: 0; /* Collapsed */
  pointer-events: none; /* Block clicks initially */
  transition: opacity 0.3s ease, max-height 0.3s ease, visibility 0s 0.3s;
}

/* Show Submenu on Hover (Desktop) */
nav#main-nav > ul > li:hover > ul {
  display: block;
  opacity: 1;
  visibility: visible;
  max-height: 500px;  /* You can adjust the height if needed */
  pointer-events: auto;  /* Enable interaction */
}


/* Mobile Click: Show Submenu when clicked */
nav#main-nav > ul > li.active > ul {
  display: block;
  opacity: 1;
  visibility: visible;
  max-height: 500px;
  pointer-events: auto;
}

    nav#main-nav > ul > li > button.section-header:hover,
    nav#main-nav > ul > li > button.section-header:focus {
      background-color: rgba(0, 188, 212, 0.15);
      outline: none;
      box-shadow: inset 4px 0 0 0 #00bcd4;
    }

/* Active (tap) state for section headers (touch) */
@media (pointer: coarse) { /* Only applies to touch devices */
  nav#main-nav > ul > li > button.section-header:active {
    background-color: rgba(0, 188, 212, 0.15); /* Same as hover */
    box-shadow: inset 4px 0 0 0 #00bcd4; /* Ensure the active state has similar effects */
  }
}

    nav#main-nav > ul > li > button.section-header > i.fas {
      font-size: 20px;
      min-width: 20px;
      text-align: center;
      color: currentColor;
      font-size: 18px; /* Adjusted icon size */
    }
    nav#main-nav > ul > li > button.section-header::after {
      content: "\\f078";
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      color: #00bcd4;
      font-size: 14px;
    }
    nav#main-nav > ul > li > button.section-header[aria-expanded="true"]::after {
      transform: translateY(-50%) rotate(180deg);
      transition: transform 0.3s ease; /* Smooth transition */
    }

/* Hover for links inside the submenu */
nav#main-nav > ul > li > ul > li > a:hover,
nav#main-nav > ul > li > ul > li > a:focus {
  background-color: rgba(0, 188, 212, 0.3); /* Highlight submenu links */
  color: #ffffff;
}

/* Make submenu links clickable even if parent is active or hovered */
nav#main-nav ul ul a {
  pointer-events: auto; /* Make sure submenu links are clickable */
}

    nav#main-nav ul ul {
      padding-left: 5px;
      margin-top: 8px;
      max-height: 1000px;
      overflow: hidden;
      will-change: max-height;
    }
    nav#main-nav ul ul.collapsed {
      max-height: 0;
      margin-top: 0;
      opacity: 0;
      pointer-events: none;
    }
    nav#main-nav ul ul li {
      margin-top: 10px;
    }
    nav#main-nav a {
      color: #ffc107;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 15px;
      border-radius: 6px;
      user-select:none;
    }
    nav#main-nav a:hover,
    nav#main-nav a:focus {
      background-color: rgba(0, 188, 212, 0.25);
      color: #ffffff;
      outline: none;
    }

.submenu {
  display: none;
}
.submenu[aria-hidden="false"] {
  display: block;
}



/* Initially hide submenus */
nav#main-nav ul[role="menu"] > li.open > ul.submenu {
  max-height: 500px;  /* enough to show all submenu items */
  opacity: 1;
  pointer-events: auto;
}

nav#main-nav ul[role="menu"] > li > ul.submenu {
  display: block;  /* Important: submenu always display block */
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  position: relative; /* keep positioning */
}

/* Show submenu when parent <li> has .open class */
nav#main-nav > ul > li.open > ul.submenu {
  display: block !important;
  opacity: 1 !important;
  max-height: 500px !important;
  pointer-events: auto !important;
}

nav#main-nav > ul > li > ul.submenu {
  display: none;
  opacity: 0;
  max-height: 0;
  pointer-events: none;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

/* On hover (desktop), show submenu */
nav#main-nav > ul > li:hover > ul.submenu {
  display: block;
  opacity: 1;
  max-height: 500px;
  pointer-events: auto;
}

/* On click (mobile), show submenu */
nav#main-nav > ul > li.active > ul.submenu {
  display: block;
  opacity: 1;
  max-height: 500px;
  pointer-events: auto;
}

    nav#main-nav a > i.fas {
      min-width: 18px;
      font-size: 18px;
      color: currentColor;
      text-align: center;
    }

    /* Section colors */
    nav#main-nav > ul > li:nth-child(1) > button.section-header {
      color: #03a9f4; /* Association */
    }
    nav#main-nav > ul > li:nth-child(2) > button.section-header {
      color: #4caf50; /* Resources */
    }
    nav#main-nav > ul > li.admin-only > button.section-header {
      color: #ff5722; /* Admin Tools */
    }
    nav#main-nav > ul > li > a[role="menuitem"] {
      color: #ffc107;
    }
    nav#main-nav > ul > li > a#give-feedback-link {
      color: #00e5ff;
      font-weight: 700;
      padding: 12px 18px;
      border-radius: 6px;
      user-select:none;
    }
    nav#main-nav > ul > li > a#faq-link {
      color: #FFEBEB;
      font-weight: 700;
      padding: 12px 18px;
      border-radius: 6px;
      user-select:none;
    }
    #assoc-submenu a > i {
      color: #00e676;
    }
    #resources-submenu a > i {
      color: #29b6f6;
    }
    #admin-submenu a > i {
      color: #ff9800;
    }

    /* Scrollbar styling */
    nav#main-nav::-webkit-scrollbar {
      width: 8px;
    }
    nav#main-nav::-webkit-scrollbar-track {
      background: #001f3f;
    }
    nav#main-nav::-webkit-scrollbar-thumb {
      background-color: #00bcd4;
      border-radius: 4px;
    }

/* Responsive tweaks */
/* ✅ Mobile-specific styles for hamburger menu and responsive nav */
@media (max-width: 768px) {
  body {
    padding-left: 0;
  }

  .hamburger {
    display: block;
  }

  nav#main-nav {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: auto;
    max-height: calc(100vh - 114px);
    flex-direction: column;
    overflow-y: auto;
    padding: 10px 5px;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
  }

  nav#main-nav.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  nav#main-nav ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  nav#main-nav ul ul {
    display: none;
    position: static;
    padding-left: 20px;
    background: none;
    box-shadow: none;
    border-radius: 0;
  }


nav#main-nav ul.submenu {
  display: none;
}

nav#main-nav li.open > ul.submenu {
  display: block;
}




  nav#main-nav a {
    font-size: 0.9rem;
    padding: 6px 10px;
  }

  nav#main-nav > ul > li > button.section-header {
    font-size: 0.9rem;
    padding: 10px 12px;
  }
}

  @media (min-width: 769px) {
  nav#main-nav.visible-desktop {
    display: flex;
  }
}

main {
  position: relative; /* Ensure main is positioned for absolute children */
}

.breadcrumb {
  position: relative;         /* allow it to flow naturally within the layout */
  font-size: 0.9rem;
  color: #f5f5dc;
  background-color: #003366;
  padding: 6px 10px;
  margin: 16px 0 24px 40px;   /* consistent spacing from top and left */
  border-radius: 6px;
  display: inline-block;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  user-select: none;
  z-index: 1000;
}

.breadcrumb a {
  color: #f5f5dc; /* light cream for links */
  text-decoration: none;
  font-weight: 600;
}

.breadcrumb a:hover {
  text-decoration: underline;
  color: #fff;
}

.breadcrumb span {
  font-weight: 600;
  color: #f5f5dc; /* current page label light cream */
}

#main-nav a.active-page {
  background-color: rgba(0, 188, 212, 0.3);
  color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
}


`;
  document.head.appendChild(style);

  // Header HTML
  const headerHTML = `
    <header>

    <button id="hamburger" class="hamburger" aria-label="Toggle menu" aria-expanded="false">
        &#9776; <!-- This is the hamburger icon (three lines) -->
    </button>
      AVISHIKTA PHASE – 1 LIG (TYPE – A) APARTMENT RESIDENTS’ WELFARE ASSOCIATION<br>
      369/1, PURBACHAL KALITALA ROAD, KOLKATA – 700078
    </header>
  `;

  // Footer HTML - single line with heart and social links
  const footerHTML = `
    <footer>
      <div class="footer-credit" aria-label="Developed by credit">
        Designed, Developed and Maintained with <span class="heart">❤</span> by <strong><span class="blinking-text">Niloy Pandit</span></strong> |
        &copy; 2025 Avishikta - I &nbsp;Type - A &nbsp;RWA. All rights reserved.
      </div>
      <div class="footer-links" aria-label="Footer navigation links">
        <a href="index.html" class="home-link"><i class="fas fa-home"></i> Home</a>
      </div>
      <div class="current-time" id="current-time"></div>
    </footer>
  `;

  // Nav HTML updated per your menu mapping
  const navHTML = `
<nav id="main-nav" aria-label="Main navigation" role="menubar">
  <ul role="menu">

    <!-- Association -->
    <li role="none">
      <button class="section-header" aria-expanded="false" aria-controls="assoc-submenu" tabindex="0" role="menuitem">
        <i class="fas fa-building" aria-hidden="true"></i> Association
      </button>
      <ul id="assoc-submenu" class="submenu" role="menu" aria-hidden="true">
        <li role="none"><a href="about-us.html" role="menuitem" title="About our association"><i class="fas fa-info-circle" aria-hidden="true"></i> Who We Are</a></li>
        <li role="none"><a href="vision-mission.html" role="menuitem" title="Our vision & mission"><i class="fas fa-eye" aria-hidden="true"></i> Vision & Mission</a></li>
        <li role="none"><a href="governing-body.html" role="menuitem" title="General body"><i class="fas fa-users" aria-hidden="true"></i> Executive Committee</a></li>
        <li role="none"><a href="our-members.html" role="menuitem" title="Member details"><i class="fas fa-address-book" aria-hidden="true"></i> Residents Directory</a></li>
      </ul>
    </li>

    <!-- Resources -->
    <li role="none">
      <button class="section-header" aria-expanded="false" aria-controls="resources-submenu" tabindex="0" role="menuitem">
        <i class="fas fa-folder" aria-hidden="true"></i> Resources
      </button>
      <ul id="resources-submenu" class="submenu" role="menu" aria-hidden="true">
        <li role="none"><a href="view-announcements.html" role="menuitem" title="Check announcements"><i class="fas fa-bullhorn" aria-hidden="true"></i> News & Buzz</a></li>
        <li role="none"><a href="events.html" role="menuitem" title="View our community calendar and photo gallery"><i class="fas fa-calendar-alt" aria-hidden="true"></i> Events & Shared Moments</a></li>
        <li role="none"><a href="mom.html" role="menuitem" title="MoM"><i class="fas fa-file-alt" aria-hidden="true"></i> Meeting Minutes</a></li>
        <li role="none"><a href="new-resident-guide.html" role="menuitem" title="New Resident Guide"><i class="fas fa-house-user" aria-hidden="true"></i> New Resident Guide</a></li>
        <li role="none"><a href="general-guidelines.html" role="menuitem" title="General guidelines"><i class="fas fa-book" aria-hidden="true"></i> Community Guidelines</a></li>
        <li role="none"><a href="useful-links.html" role="menuitem" title="Helpdesk & Contacts"><i class="fas fa-book" aria-hidden="true"></i> Support Hub</a></li>
        <li role="none"><a href="download-center.html" role="menuitem" title="Access important documents and forms for download"><i class="fas fa-cloud-download-alt" aria-hidden="true"></i> Download-center</a></li>
        <li role="none"><a href="projects.html" role="menuitem" title="View projects and upgrades"><i class="fas fa-tools" aria-hidden="true"></i> Project Status & Updates</a></li>
      </ul>
    </li>

    <!-- Get Involved -->
    <li role="none">
      <button class="section-header" style="color: #D2B48C;" aria-expanded="false" aria-controls="GetInvolved-submenu" tabindex="0" role="menuitem">
        <i class="fas fa-hands-helping" aria-hidden="true"></i> Get Involved
      </button>
      <ul id="GetInvolved-submenu" class="submenu" role="menu" aria-hidden="true">
        <li role="none"><a href="feedback.html" id="give-feedback-link" role="menuitem" title="We value your feedback—let us know your thoughts"><i class="fas fa-comment-dots" aria-hidden="true"></i> Give Feedback</a></li>
        <li role="none"><a href="volunteer.html" id="volunteer-link" role="menuitem" title="Come forward to provide volunteer service"><i class="fas fa-hands-helping" aria-hidden="true"></i> Volunteer Opportunities</a></li>
      </ul>
    </li>

    <!-- Help & Contact -->
    <li role="none">
      <button class="section-header" style="color: #ffb6c1;" aria-expanded="false" aria-controls="HelpnContact-submenu" tabindex="0" role="menuitem">
        <i class="fas fa-info-circle" aria-hidden="true"></i> Get in Touch
      </button>
      <ul id="HelpnContact-submenu" class="submenu" role="menu" aria-hidden="true">
        <li role="none"><a href="contact-us.html" id="give-contact-us-link" role="menuitem" title="We are here to hear you"><i class="fas fa-envelope" aria-hidden="true"></i> Contact Us</a></li>
        <li role="none"><a href="faq.html" id="faq-link" role="menuitem" title="Find answers to frequently asked questions"><i class="fas fa-question-circle" aria-hidden="true"></i> FAQs</a></li>
      </ul>
    </li>

    <!-- Find & Explore Menu -->
    <li role="none">
      <button class="section-header" style="color: #D2B48C;" aria-expanded="false" aria-controls="instant-access-submenu" tabindex="0" role="menuitem">
        <i class="fas fa-bolt" aria-hidden="true"></i> Find & Explore
      </button>
      <ul id="instant-access-submenu" class="submenu" role="menu" aria-hidden="true">
        <li role="none"><a href="event-calendar.html" id="event-calendar-link" role="menuitem" title="View the event calendar"><i class="fas fa-calendar-alt" aria-hidden="true"></i> Event Calendar</a></li>
        <li role="none"><a href="search.html" id="quick-search-link" role="menuitem" title="Instantly search any site"><i class="fas fa-search" aria-hidden="true"></i> Site Search</a></li>
      </ul>
    </li>

    <!-- Admin Tools -->
    <li class="admin-only" role="none">
      <button class="section-header" aria-expanded="false" aria-controls="admin-submenu" tabindex="0" role="menuitem">
        <i class="fas fa-tools" aria-hidden="true"></i> Admin Tools
      </button>
      <ul id="admin-submenu" class="submenu" role="menu" aria-hidden="true">
        <li role="none"><a href="#" role="menuitem" style="pointer-events: none;" title="Coming Soon..."><i class="fas fa-bullhorn" aria-hidden="true"></i> Manage Announcements</a></li>
        <li role="none"><a href="#" role="menuitem" style="pointer-events: none;" title="Coming Soon..."><i class="fas fa-users-cog" aria-hidden="true"></i> View Feedback</a></li>
        <li role="none"><a href="#" role="menuitem" style="pointer-events: none;" title="Coming Soon..."><i class="fas fa-file-upload" aria-hidden="true"></i> Upload Image</a></li>
      </ul>
    </li>

  </ul>
</nav>


  `;

// Insert elements into DOM
document.body.insertAdjacentHTML("afterbegin", headerHTML);
document.body.insertAdjacentHTML("afterbegin", navHTML);
document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Function to update the current time in the footer
  function formatTime() {
    const currentTimeElement = document.getElementById('current-time');
    if (currentTimeElement) {
      let currentTime = new Date();
    
      // Format the date as '1st July 2025' or 'July 1, 2025'
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      let formattedDate = currentTime.toLocaleDateString('en-US', options);

      // Format the time in 12-hour format with AM/PM in uppercase
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();  // Add seconds
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;  // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;  // Ensure seconds are two digits

      let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

      // Set the formatted time and date
      currentTimeElement.innerHTML = `Date: ${formattedDate} | Time: ${formattedTime}`;
    }
  }

  // Set the time once when the page loads
  formatTime();

  // Update time every second
  setInterval(formatTime, 1000);

  // Automatically expand Association and Resources sections on load, collapse Admin Tools
  document.getElementById("assoc-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="assoc-submenu"]').setAttribute("aria-expanded", "false");

  document.getElementById("resources-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="resources-submenu"]').setAttribute("aria-expanded", "false");

  document.getElementById("HelpnContact-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="HelpnContact-submenu"]').setAttribute("aria-expanded", "false");

  document.getElementById("GetInvolved-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="GetInvolved-submenu"]').setAttribute("aria-expanded", "false");

  document.getElementById("instant-access-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="instant-access-submenu"]').setAttribute("aria-expanded", "false");

  document.getElementById("admin-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="admin-submenu"]').setAttribute("aria-expanded", "false");

 // Add a hover message for Admin Tools
  const adminTools = document.querySelector(".admin-only .section-header");
  if (adminTools) {
    adminTools.addEventListener("mouseenter", () => {
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.innerHTML = "🚧 <i class='fas fa-tools'></i> Feature is coming soon!!!"; // Tooltip with emoji and icon
      document.body.appendChild(tooltip);
      
      const rect = adminTools.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.top + rect.height + window.scrollY + 5}px`;
      
      // Remove tooltip when mouse leaves
      adminTools.addEventListener("mouseleave", () => {
        tooltip.remove();
      });
    });
  }

// Hamburger menu toggle functionality
const navMenu = document.getElementById("main-nav");
const hamburgerButton = document.getElementById("hamburger");

function updateNavVisibility() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    navMenu.classList.remove("visible-desktop");
    navMenu.classList.remove("open"); // Hide by default
    hamburgerButton.style.display = "block";
  } else {
    navMenu.classList.add("visible-desktop");
    navMenu.classList.add("open"); // Always show on desktop
    hamburgerButton.style.display = "none";
  }
}

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const isOpen = navMenu.classList.contains("open");
  hamburgerButton.setAttribute("aria-expanded", isOpen);
});

// Initial check
updateNavVisibility();

// Debounced resize event to improve performance
let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateNavVisibility();
  }, 150);
});

function renderBreadcrumb() {
  const breadcrumbMap = {
    'index.html': ['Home'],
    'about-us.html': ['Home', 'Association', 'Who We Are'],
    'vision-mission.html': ['Home', 'Association', 'Vision & Mission'],
    'governing-body.html': ['Home', 'Association', 'Executive Committee'],
    'our-members.html': ['Home', 'Association', 'Residents Directory'],
    'view-announcements.html': ['Home', 'Resources', 'News & Buzz'],
    'mom.html': ['Home', 'Resources', 'Meeting Minutes'],
    'new-resident-guide.html': ['Home', 'Resources', 'New Resident Guideline'],
    'events.html': ['Home', 'Resources', 'Events & Shared Moments'],
    'general-guidelines.html': ['Home', 'Resources', 'Community Guidelines'],
    'download-center.html': ['Home', 'Resources', 'Download Center'],
    'useful-links.html': ['Home', 'Resources', 'Support Hub'],
    'projects.html': ['Home', 'Resources','Project Status & Updates'],
    'feedback.html': ['Home', 'Get Involved','Give Feedback'],
    'volunteer.html': ['Home', 'Get Involved','Volunteer Opportunities'],
    'contact-us.html': ['Home', 'Get in Touch','Ready to hear you'],
    'faq.html': ['Home', 'Get in Touch','FAQs'],
    'search.html': ['Home', 'Find & Explore','Site Search'],
    'event-calendar.html': ['Home', 'Find & Explore','Event Calendar']
  };

  const pageLinks = {
    'Home': 'index.html',
    'Association': '#',
    'Who We Are': 'about-us.html',
    'Vision & Mission': 'vision-mission.html',
    'Executive Committee': 'governing-body.html',
    'Residents Directory': 'our-members.html',
    'Resources': '#',
    'News & Buzz': 'view-announcements.html',
    'Meeting Minutes': 'mom.html',
    'New Resident Guideline': 'new-resident-guide.html',
    'Event Calendar': 'events.html',
    'Community Guidelines': 'general-guidelines.html',
    'Download Center': 'download-center.html',
    'Project Status & Updates': 'projects.html',
    'Support Hub': 'useful-links.html',
    'Get Involved': '#',
    'Give Feedback': 'feedback.html',
    'Volunteer Opportunities': 'volunteer.html',
    'Get in Touch': '#',
    'Ready to hear you': 'contact-us.html',
    'FAQs': 'faq.html',
    'Instant Access': '#',
    'Site Search': 'search.html',
    'Event Calendar': 'event-calendar.html'
  };

  const fileName = window.location.pathname.split('/').pop();
  const crumbs = breadcrumbMap[fileName];
  if (!crumbs) return;

  const breadcrumbNav = document.createElement('nav');
  breadcrumbNav.className = 'breadcrumb';
  breadcrumbNav.setAttribute('aria-label', 'breadcrumb');

  breadcrumbNav.innerHTML = crumbs.map((label, i) => {
    if (i === crumbs.length - 1) return `<span>${label}</span>`;
    const href = pageLinks[label] || '#';
    return `<a href="${href}">${label}</a> &gt; `;
  }).join('');

  // ✅ Insert breadcrumb ABOVE <main>, not inside it
  const main = document.querySelector('main');
  if (main && main.parentNode) {
    main.parentNode.insertBefore(breadcrumbNav, main);
  }
}

//Code to click + hover

document.addEventListener('DOMContentLoaded', () => {
  renderBreadcrumb();

  // Highlight active link
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('#main-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-page');
    }
  });

  // Unified click + keyboard support for menu toggles
  document.querySelectorAll('#main-nav > ul > li > button.section-header').forEach(button => {
    const parentLi = button.closest('li');
    const submenuId = button.getAttribute('aria-controls');
    const submenu = document.getElementById(submenuId);

    // Toggle submenu on click
    button.addEventListener('click', () => {
      console.log('Clicked:', button.textContent);
      const isOpen = parentLi.classList.contains('open');

      // Close all open submenus
      document.querySelectorAll('#main-nav > ul > li.open').forEach(li => {
        if (li !== parentLi) {
          li.classList.remove('open');
          const btn = li.querySelector('button.section-header');
          if (btn) btn.setAttribute('aria-expanded', 'false');

          const sub = document.getElementById(btn?.getAttribute('aria-controls'));
          if (sub) sub.setAttribute('aria-hidden', 'true');
        }
      });

      // Toggle current
      if (isOpen) {
        parentLi.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        submenu.setAttribute('aria-hidden', 'true');
      } else {
        parentLi.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        submenu.setAttribute('aria-hidden', 'false');
      }
    });

    // Keyboard: toggle on Enter or Space
    button.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
});

})();
