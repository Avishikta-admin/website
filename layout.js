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
      transition: padding-left 0.3s ease;
      color: #333;
    }

/* Style for Hamburger Button */

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}

.hamburger {
  background: none;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10000;
  display: none; /* Initially hidden */
}

/* Show Hamburger Button on mobile */
/* Tooltip styling */
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
      color: #00e6e6;
    }
    footer .footer-links a.facebook-link i {
      color: #1877f2; /* Facebook Blue */
    }
    footer .footer-links a.instagram-link i {
      color: #e1306c; /* Instagram gradient pink */
    }
    .blinking-text {
      animation: fadeInOut 2s ease-in-out infinite;
      color: #00e6e6;
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
      display: flex;
      flex-direction: column;
      padding: 20px 12px;
      z-index: 9998;
      user-select:none;
      overflow-y: auto;
      transition: background-color 0.3s ease;
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
      transition: background-color 0.25s ease, box-shadow 0.25s ease;
      position: relative;
      box-shadow: inset 0 0 0 0 #00bcd4;
    }
    nav#main-nav > ul > li > button.section-header:hover,
    nav#main-nav > ul > li > button.section-header:focus {
      background-color: rgba(0, 188, 212, 0.15);
      outline: none;
      box-shadow: inset 4px 0 0 0 #00bcd4;
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
      transition: transform 0.3s ease;
      color: #00bcd4;
      font-size: 14px;
    }
    nav#main-nav > ul > li > button.section-header[aria-expanded="true"]::after {
      transform: translateY(-50%) rotate(180deg);
    }
    nav#main-nav ul ul {
      padding-left: 32px;
      margin-top: 8px;
      max-height: 1000px;
      overflow: hidden;
      transition: max-height 0.4s ease;
      will-change: max-height;
    }
    nav#main-nav ul ul.collapsed {
      max-height: 0;
      margin-top: 0;
      opacity: 0;
      pointer-events: none;
      transition: max-height 0.35s ease, opacity 0.25s ease;
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
      transition: background-color 0.25s ease, color 0.25s ease;
      user-select:none;
    }
    nav#main-nav a:hover,
    nav#main-nav a:focus {
      background-color: rgba(0, 188, 212, 0.25);
      color: #ffffff;
      outline: none;
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
    @media (max-width: 768px) {
      body {
        padding-left: 0;
      }

     .hamburger {
        display: block; /* Show hamburger button on mobile */
      }

     nav#main-nav {
    display: none;
  }

nav#main-nav.open {
    display: flex;
    flex-direction: column; /* Stack the items vertically */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Take full width */
    background-color: rgba(0, 0, 0, 0.8); /* Optional: Add a dark background */
    padding-top: 60px; /* Adjust to prevent overlapping with header */
  }

      nav#main-nav {
        position: fixed;
        top: 54px;
        left: 0;
        width: 100%;
        height: auto;
        max-height: calc(100vh - 114px);
        flex-direction: row;
        overflow-x: auto;
        padding: 10px 5px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      }
      nav#main-nav ul {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 12px;
        overflow-x: auto;
      }
      nav#main-nav ul ul {
        padding-left: 0;
        margin-top: 0;
        max-height: none;
        position: absolute;
        background-color: #001f3f;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.5);
        border-radius: 6px;
        display: none;
        z-index: 3000;
      }
      nav#main-nav > ul > li:hover > ul,
      nav#main-nav > ul > li:focus-within > ul {
        display: block;
      }
      nav#main-nav li {
        margin-top: 0;
      }
      nav#main-nav > ul > li > button.section-header {
        font-size: 0.9rem;
      }
      nav#main-nav a {
        font-size: 0.9rem;
        padding: 6px 10px;
      }

      @media (min-width: 769px) {
  nav#main-nav.visible-desktop {
    display: flex;
  }
    }
  `;
  document.head.appendChild(style);

  // Header HTML
  const headerHTML = `
    <header>

    <button id="hamburger" aria-label="Toggle navigation" class="hamburger">
      <i class="fas fa-bars"></i> <!-- Hamburger icon -->
    </button>      

      AVISHIKTA PHASE – 1 LIG (TYPE – A) APARTMENT RESIDENTS’ WELFARE ASSOCIATION<br>
      369/1, PURBACHAL KALITALA ROAD, KOLKATA – 700078
    </header>
  `;

  // Insert elements into DOM
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Footer HTML - single line with heart and social links
  const footerHTML = `
    <footer>
      <div class="footer-credit" aria-label="Developed by credit">
        Designed, Developed and Maintained with <span class="heart">❤</span> by <strong><span class="blinking-text">Niloy Pandit</span></strong> |
        &copy; 2025 Avishikta Type - A RWA. All rights reserved.
      </div>
      <div class="footer-links" aria-label="Footer navigation links">
        <a href="index.html" class="home-link"><i class="fas fa-home"></i> Home</a>
        <a href="https://facebook.com" target="_blank" rel="noopener" class="facebook-link"><i class="fab fa-facebook"></i> Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener" class="instagram-link"><i class="fab fa-instagram"></i> Instagram</a>
      </div>
      <div class="current-time" id="current-time"></div>
    </footer>
  `;

  // Nav HTML updated per your menu mapping
  const navHTML = `
    <nav id="main-nav" aria-label="Main navigation">
      <ul role="menu">
        <!-- Association -->
        <li>
          <button class="section-header" aria-expanded="true" aria-controls="assoc-submenu" tabindex="0" role="menuitem">
            <i class="fas fa-building" aria-hidden="true"></i> Association
          </button>
          <ul id="assoc-submenu" role="menu">
            <li role="none"><a href="about-us.html" role="menuitem"><i class="fas fa-info-circle" aria-hidden="true"></i> Who We Are</a></li>
            <li role="none"><a href="vision-mission.html" role="menuitem"><i class="fas fa-eye" aria-hidden="true"></i> Vision & Mission</a></li>
            <li role="none"><a href="governing-body.html" role="menuitem"><i class="fas fa-users" aria-hidden="true"></i> Executive Committee</a></li>
            <li role="none"><a href="our-members.html" role="menuitem"><i class="fas fa-address-book" aria-hidden="true"></i> Residents Directory</a></li>
          </ul>
        </li>

        <!-- Resources -->
        <li>
          <button class="section-header" aria-expanded="true" aria-controls="resources-submenu" tabindex="0" role="menuitem">
            <i class="fas fa-folder" aria-hidden="true"></i> Resources
          </button>
          <ul id="resources-submenu" role="menu">
            <li role="none"><a href="view-announcements.html" role="menuitem"><i class="fas fa-bullhorn" aria-hidden="true"></i> View Announcements</a></li>
            <li role="none"><a href="events.html" role="menuitem"><i class="fas fa-calendar-alt" aria-hidden="true"></i> Event Calendar</a></li>
            <li role="none"><a href="mom.html" role="menuitem"><i class="fas fa-file-alt" aria-hidden="true"></i> Meeting Minutes</a></li>
            <li role="none"><a href="general-guidelines.html" role="menuitem"><i class="fas fa-book" aria-hidden="true"></i> Community Guidelines</a></li>
            <li role="none"><a href="useful-links.html" role="menuitem"><i class="fas fa-headset" aria-hidden="true"></i> Helpdesk & Contacts</a></li>
          </ul>
        </li>

        <!-- Give Feedback -->
        <li>
          <a href="feedback.html" id="give-feedback-link" role="menuitem"><i class="fas fa-comment-dots" aria-hidden="true"></i> Give Feedback</a>
        </li>

        <!-- Admin Tools -->
        <li class="admin-only">
          <button class="section-header" aria-expanded="false" aria-controls="admin-submenu" tabindex="0" role="menuitem">
            <i class="fas fa-tools" aria-hidden="true"></i> Admin Tools
          </button>
          <ul id="admin-submenu" class="collapsed" role="menu">
            <li role="none"><a href="#" role="menuitem" style="pointer-events: none;" title="Coming Soon..."><i class="fas fa-bullhorn" aria-hidden="true"></i> Manage Announcements</a></li>
            <li role="none"><a href="#" role="menuitem" style="pointer-events: none;" title="Coming Soon..."><i class="fas fa-users-cog" aria-hidden="true"></i> View Feedback</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  `;

  // Insert elements into DOM
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);  
  document.body.insertAdjacentHTML("afterbegin", navHTML);

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

 // Navigation toggle functionality for collapsible sections
  const nav = document.getElementById("main-nav");
  nav.querySelectorAll("button.section-header").forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const submenuId = button.getAttribute("aria-controls");
      const submenu = document.getElementById(submenuId);

      // Toggle aria-expanded and submenu visibility
      if (submenu) {
        if (expanded) {
          button.setAttribute("aria-expanded", "false");
          submenu.classList.add("collapsed");
        } else {
          button.setAttribute("aria-expanded", "true");
          submenu.classList.remove("collapsed");
        }
      }
    });

    // Keyboard accessibility: toggle on Enter or Space
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });
  });

  // Automatically expand Association and Resources sections on load, collapse Admin Tools
  document.getElementById("assoc-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="assoc-submenu"]').setAttribute("aria-expanded", "false");

  document.getElementById("resources-submenu").classList.add("collapsed");
  document.querySelector('button[aria-controls="resources-submenu"]').setAttribute("aria-expanded", "false");

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

// Update on resize
window.addEventListener("resize", updateNavVisibility);

})();
