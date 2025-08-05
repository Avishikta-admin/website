(() => {

  // 1. Inject Fonts & Icons
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);

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

  const iconLink = document.createElement("link");
  iconLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
  iconLink.rel = "stylesheet";
  document.head.appendChild(iconLink);

  const manifestLink = document.createElement('link');
  manifestLink.rel = 'manifest';
  manifestLink.href = '/website/manifest.json'; // Path to your manifest file
  document.head.appendChild(manifestLink);

 // 2. Header HTML
 const headerHTML = `
  <header id="page-header" role="banner" aria-label="Site Header">
    <button id="hamburger" type="button" class="hamburger" aria-label="Toggle menu" aria-expanded="false">Menu
      <i class="fas fa-bars"></i>
    </button>
    <button id="nav-collapse-toggle" type="button" aria-label="Toggle navigation sidebar" aria-expanded="true" class="collapse-toggle" title="Collapse Menu">
  <i class="fas fa-angle-left"></i>
</button>

    <div class="header-text">
      AVISHIKTA PHASE – 1 LIG (TYPE – A) APARTMENT RESIDENTS’ WELFARE ASSOCIATION<br>
      369/1, PURBACHAL KALITALA ROAD, KOLKATA – 700078
    </div>
  </header>
`;

  // 3. Footer HTML
  const footerHTML = `
<footer id="page-footer" role="contentinfo" aria-label="Site Footer">
  <div class="footer-content">
    <div class="footer-credit">
      Designed, Developed and Maintained with <span class="heart">❤</span> by
      <strong><span class="blinking-text">Niloy Pandit</span></strong> |
      &copy; 2025 Avishikta - I Type - A RWA. All rights reserved.
    </div>
    <div class="footer-meta">
      <span class="current-time" id="current-time" aria-live="polite" aria-atomic="true"></span>
    </div>
  </div>
</footer>
`;

const navHTML = `
<nav id="main-nav" role="navigation" aria-label="Primary navigation" class="nav-collapsed">
  <ul>
    <li><a href="index.html" class="nav-link"><i class="fas fa-home"></i> Home</a></li>
    
    <li>
      <button class="section-header" aria-expanded="false" aria-controls="submenu-association">
        <span class="menu-label">
          <i class="fas fa-users"></i> Association
        </span>
        <i class="fas fa-caret-down"></i>
      </button>
      <ul id="submenu-association" class="submenu" aria-hidden="true">
  <li><a href="about-us.html"><i class="fas fa-id-card-alt"></i> Who We Are</a></li>
  <li><a href="vision-mission.html"><i class="fas fa-bullseye"></i> Vision & Mission</a></li>
  <li><a href="governing-body.html"><i class="fas fa-users-cog"></i> Executive Committee</a></li>
  <li><a href="our-members.html"><i class="fas fa-address-book"></i> Residents Directory</a></li>
</ul>
    </li>

    <!-- Resources -->
<li>
  <button class="section-header" aria-expanded="false" aria-controls="submenu-resources">
    <span class="menu-label">
      <i class="fas fa-book"></i> Resources
    </span>
    <i class="fas fa-caret-down"></i>
  </button>
  <ul id="submenu-resources" class="submenu" aria-hidden="true">
    <li><a href="view-announcements.html"><i class="fas fa-bullhorn"></i> News & Buzz</a></li>
    <li><a href="mom.html"><i class="fas fa-file-alt"></i> Meeting Minutes</a></li>
    <li><a href="new-resident-guide.html"><i class="fas fa-compass"></i> New Resident Guideline</a></li>
    <li><a href="events.html"><i class="fas fa-camera-retro"></i> Events & Shared Moments</a></li>
    <li><a href="general-guidelines.html"><i class="fas fa-gavel"></i> Community Guidelines</a></li>
    <li><a href="download-center.html"><i class="fas fa-download"></i> Download Center</a></li>
    <li><a href="useful-links.html"><i class="fas fa-life-ring"></i> Support Hub</a></li>
    <li><a href="projects.html"><i class="fas fa-tasks"></i> Project Status & Updates</a></li>
  </ul>
</li>

<!-- Get Involved -->
<li>
  <button class="section-header" aria-expanded="false" aria-controls="submenu-getinvolved">
    <span class="menu-label">
      <i class="fas fa-hand-holding-heart"></i> Get Involved
    </span>
    <i class="fas fa-caret-down"></i>
  </button>
  <ul id="submenu-getinvolved" class="submenu" aria-hidden="true">
    <li><a href="feedback.html"><i class="fas fa-comment-dots"></i> Give Feedback</a></li>
    <li><a href="volunteer.html"><i class="fas fa-hands-helping"></i> Volunteer Opportunities</a></li>
  </ul>
</li>

<!-- Get in Touch -->
<li>
  <button class="section-header" aria-expanded="false" aria-controls="submenu-getintouch">
    <span class="menu-label">
      <i class="fas fa-envelope"></i> Get in Touch
    </span>
    <i class="fas fa-caret-down"></i>
  </button>
  <ul id="submenu-getintouch" class="submenu" aria-hidden="true">
    <li><a href="contact-us.html"><i class="fas fa-phone-alt"></i> Ready to hear you</a></li>
    <li><a href="faq.html"><i class="fas fa-question-circle"></i> FAQs</a></li>
  </ul>
</li>

<!-- Find & Explore -->
<li>
  <button class="section-header" aria-expanded="false" aria-controls="submenu-findexplore">
    <span class="menu-label">
      <i class="fas fa-search"></i> Find & Explore
    </span>
    <i class="fas fa-caret-down"></i>
  </button>
  <ul id="submenu-findexplore" class="submenu" aria-hidden="true">
    <li><a href="search.html"><i class="fas fa-search-location"></i> Site Search</a></li>
    <li><a href="event-calendar.html"><i class="fas fa-calendar-alt"></i> Event Calendar</a></li>
  </ul>
</li>

<!-- Admin Panel -->
<li>
  <button class="section-header" aria-expanded="false" aria-controls="submenu-admintools">
    <span class="menu-label">
      <i class="fas fa-user-shield"></i> Admin Panel
    </span>
    <i class="fas fa-caret-down"></i>
  </button>
  <ul id="submenu-admintools" class="submenu" aria-hidden="true">
    <li>
      <a href="#" class="disabled-link" title="Coming Soon...">
        <i class="fas fa-bullhorn"></i> Manage Announcements
      </a>
    </li>
    <li>
      <a href="#" class="disabled-link" title="Coming Soon...">
        <i class="fas fa-comments"></i> View Feedback
      </a>
    </li>
  </ul>
</li>

</ul>
</nav>
`;

  // 5. Inject header, nav, footer into body
document.body.insertAdjacentHTML('afterbegin', headerHTML);
document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

  // 6. Insert breadcrumb above main
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
      'Find & Explore': '#',
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
      if (i === crumbs.length - 1) return `<span aria-current="page">${label}</span>`;
      const href = pageLinks[label] || '#';
      return `<a href="${href}">${label}</a> <span aria-hidden="true">&gt;</span> `;
    }).join('');
  
    const main = document.querySelector('main');
    if (main && main.parentNode) {
      main.parentNode.insertBefore(breadcrumbNav, main);
    }
  }

  renderBreadcrumb();

  // 7. Inject styles
  const style = document.createElement("style");
  style.textContent = `
    /* Reset & base */
    * {
      box-sizing: border-box;
    }
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      background-color: #f4f6f9;
      color: #333;
      padding-top: 54px; /* header */
      padding-bottom: 60px; /* footer */
      padding-left: 260px; /* nav width */
      transition: padding-left 0.3s ease;
    }
    main {
      margin: 20px;
      max-width: 1200px;
    }
    /* Header */
    header#page-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 54px;
      background: linear-gradient(135deg, #2a72d8, #feb47b);
      color: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      line-height: 1.4;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      z-index: 9999;
      padding: 0 60px; /* space for buttons */
    }
    header#page-header .header-text {
      text-align: center;
      flex: 1;
      font-weight: 600;
      line-height: 1.3;
      font-size: 0.95rem;
    }
    /* Hamburger button */
    #hamburger {
      background-color: #fd7e14;
      border: none;
      font-size: 11px;
      color: white;
      cursor: pointer;
      position: fixed;
      top: 8px;
      left: 10px;
      z-index: 10000;
      padding: 10px;
      border-radius: 6px;
      display: none; /* hidden on desktop */
      transition: background-color 0.3s ease;
    }
    #hamburger:hover {
      background-color: #e35d04;
    }

    /* Collapse toggle button for desktop nav */
    #nav-collapse-toggle {
      background: transparent;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
      position: fixed;
      top: 15px;
      left: 230px; /* 260 - 30 */
      z-index: 10000;
      padding: 5px 8px;
      border-radius: 4px;
      transition: transform 0.3s ease;
      user-select: none;
    }
    #nav-collapse-toggle.collapsed {
      transform: rotate(180deg);
      left: 30px;
    }
    #nav-collapse-toggle:hover {
      color: #feb47b;
    }

   #nav-collapse-toggle i {
     transition: transform 0.3s ease;
   }

#nav-collapse-toggle.collapsed i {
  transform: rotate(0deg) !important; /* arrow pointing right */
  /* optionally, you can switch icon classes here if using something else */
}

#nav-collapse-toggle:not(.collapsed) i {
  transform: rotate(180deg) !important; /* arrow pointing left */
}

/* Nav Styles */
#main-nav {
  position: fixed;
  top: 54px;
  left: 0;
  width: 260px;
  bottom: 60px;
  background: #1e2a47;
  color: #fff;
  overflow-y: auto;
  z-index: 9998;
  display: block; /* hide nav by default on mobile */
  transition: opacity 0.3s ease;
}

#main-nav.nav-open {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex; /* or block, depending on layout */
  }

  .hamburger {
    display: none;
  }
}

#main-nav.nav-collapsed {
  transform: translateX(-220px);
  width: 40px;
  overflow: visible;
}

#main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#main-nav ul li {
  border-bottom: 1px solid #324060;
}

@media (max-width: 767px) {
  #hamburger {
    display: block;
  }

  #main-nav {
    display: none; /* Hide nav by default on mobile */
  }

  #main-nav.nav-open {
    display: block; /* Show nav when hamburger clicked */
  }
}


/* Home link: icon + text aligned left with gap */
#main-nav ul li a.nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* left align */
  gap: 8px; /* space between icon and text */
  padding: 12px 20px;
  font-size: 0.9rem;
  color: #ddd;
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
}

#main-nav ul li a.nav-link:hover {
  background-color: #feb47b;
  color: #1e2a47;
}

/* Submenu buttons: icon + text left, caret right */
#main-nav ul li button.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between; /* caret on right */
  padding: 12px 20px;
  font-size: 0.9rem;
  color: #ddd;
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  user-select: none;
}

#main-nav ul li button.section-header:hover {
  background-color: #feb47b;
  color: #1e2a47;
}

/* Wrap icon + text inside submenu buttons */
#main-nav ul li button.section-header .menu-label {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1; /* fill space except caret */
}

/* Icon colors */
#main-nav ul li a.nav-link i,
#main-nav ul li button.section-header .menu-label i {
  color: #2a72d8;
  margin: 0;
  padding: 0;
  font-size: 1em; /* match text size */
}

/* Caret icon on buttons */
#main-nav ul li button.section-header i.fa-caret-down {
  transition: transform 0.3s ease;
  margin-left: 5px;
  color: white;
}

#main-nav ul.submenu li a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ddd;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 0.85rem;
}

#main-nav ul.submenu li a i {
  color: #f3e5ab; /* or any consistent icon color */
  font-size: 1em;
}

#main-nav ul li button.section-header[aria-expanded="true"] i {
      transform: rotate(180deg);
    }

   /* Submenu container */
.submenu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding-left: 15px;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  will-change: max-height, opacity;
  pointer-events: none; /* prevent clicks when hidden */
}

/* When expanded */
li.locked .submenu,
.section-header[aria-expanded="true"] + .submenu {
  max-height: 800px; /* Adjust depending on content */
  opacity: 1;
  pointer-events: auto;
}

    #main-nav ul li ul.submenu {
      max-height: 0;
      overflow: hidden;
      background-color: #2e3b66;
      transition: max-height 0.3s ease;
      font-size: 0.85rem;
    }
    #main-nav ul li ul.submenu[aria-hidden="false"] {
      max-height: 500px; /* enough for submenu */
    }
    #main-nav ul li ul.submenu li {
      border-bottom: none;
    }
    #main-nav ul li ul.submenu li a {
      padding-left: 40px;
      color: #ccc;
      font-weight: 400;
    }
    #main-nav ul li ul.submenu li a:hover {
      color: #1e2a47;
      background-color: #feb47b;
    }

   /* Disabled submenu item (e.g., Coming Soon) */
.disabled-link {
  color: #aaa !important;
  pointer-events: none;
  opacity: 0.6;
  cursor: not-allowed;
  text-decoration: none;
}

.disabled-link i {
  color: #aaa !important;
}

    /* Breadcrumb */
    nav.breadcrumb {
      display: inline-block;          /* Shrinks to content */
      margin: 10px 20px 0 20px;
      padding: 8px 12px;
      font-size: 0.85rem;
      background-color: #2a72d8; /* Blue background */
      color: #ffffff;
      user-select: none;
      border-radius: 4px;
      white-space: nowrap;
    }
    nav.breadcrumb a {
      color: #ffffff;
      text-decoration: none;
    }
    nav.breadcrumb a:hover {
      text-decoration: underline;
    }
    nav.breadcrumb span {
      font-weight: 600;
      color: #ffffff;;
    }

    /* Footer */
    #page-footer {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      background: linear-gradient(135deg, #2a72d8, #feb47b);
      color: #fff;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.85rem;
      padding: 4px 15px;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.3);
      user-select: none;
      white-space: nowrap;  /* Prevent wrapping */
      z-index: 9999;
      text-align: center;
      overflow-x: auto;     /* In case screen is too narrow */
    }
    #page-footer a {
      color: #fff;
      text-decoration: none;
      margin-left: 12px;
      display: flex;
      align-items: center;
    }
    #page-footer a:hover {
      text-decoration: underline;
    }
    .footer-credit {
      flex: 1;
      user-select: text;
      flex-shrink: 0;       /* Prevent shrinking */
      line-height: 1.5;
      white-space: normal;  
    }
    .footer-meta {
  font-size: 0.85rem;
  color: #eee;
}
.footer-links {
      user-select: text;
    }
    .heart {
      color: red;
      margin: 0 6px;
      user-select: none;
    }
    .blinking-text {
      background-color: #1e40af; /* Medium dark blue - Tailwind’s blue-800 */
      color: #fff;               /* White text */
      padding: 1px 4px;
      border-radius: 6px;
      font-weight: bold;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      body {
        padding-left: 0;
        padding-top: 54px;
        padding-bottom: 60px;
      }
      #main-nav {
         position: fixed;
         top: 54px;
         left: 0;
         width: 300px; /* Increased from 260px */
         bottom: 60px;
         background: #1e2a47;
         color: #fff;
         overflow-y: auto;
         transition: transform 0.3s ease;
         z-index: 9998;
         transform: translateX(-100%);  /* <-- HIDE OFFSCREEN BY DEFAULT */
     }
      #main-nav.nav-open {
        transform: translateX(0);
        box-shadow: 4px 0 8px rgba(0,0,0,0.3);
      }
      #nav-collapse-toggle {
        display: none;
      }
      #hamburger {
        display: block;
      }
    }
    .tooltip {
      position: absolute;
      background-color: #333;
      color: #fff;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 0.85rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      white-space: nowrap;
      z-index: 10000;
    }
    
  `;
  document.head.appendChild(style);

  // 8. JS behavior

  const nav = document.getElementById("main-nav");
  const hamburger = document.getElementById("hamburger");
  const collapseToggle = document.getElementById("nav-collapse-toggle");

  // Handle hamburger toggle for mobile
  hamburger.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    hamburger.setAttribute("aria-expanded", open);
  });

  
  // on load
  collapseToggle.addEventListener("click", () => {
  const collapsed = nav.classList.toggle("nav-collapsed");
  collapseToggle.classList.toggle("collapsed", collapsed);
  collapseToggle.setAttribute("aria-expanded", !collapsed);

  const icon = collapseToggle.querySelector("i");

  if (collapsed) {
    // Menu is collapsed: arrow points right (">"), tooltip = Expand Menu
    collapseToggle.title = "Expand Menu";
    icon.classList.remove("fa-angle-right");
    icon.classList.add("fa-angle-left");
  } else {
    // Menu is expanded: arrow points left ("<"), tooltip = Collapse Menu
    collapseToggle.title = "Collapse Menu";
    icon.classList.remove("fa-angle-left");
    icon.classList.add("fa-angle-right");
  }

  document.body.style.paddingLeft = collapsed ? "40px" : "260px";
});

// Submenu expand/collapse
const sectionHeaders = nav.querySelectorAll("button.section-header");

sectionHeaders.forEach(button => {
  const parentLi = button.parentElement;
  const submenuId = button.getAttribute("aria-controls");
  const submenu = document.getElementById(submenuId);

  // Special handling for Admin Panel
  const isAdminPanel = submenuId === "submenu-admintools";

  if (isAdminPanel) {
    // Prevent any toggle behavior
    button.addEventListener("click", e => e.preventDefault());

    // Tooltip on hover
    button.addEventListener("mouseenter", () => {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerHTML = "🚧 <i class='fas fa-tools'></i> Coming Soon!";
      document.body.appendChild(tooltip);

      const rect = button.getBoundingClientRect();
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.bottom + 6 + window.scrollY}px`;

      const removeTooltip = () => tooltip.remove();
      button.addEventListener("mouseleave", removeTooltip, { once: true });
    });

    return; // Skip the rest of the loop for Admin
  }

  // Regular button behavior
  // Click toggle
  button.addEventListener("click", e => {
    e.stopPropagation();

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Close all others
    sectionHeaders.forEach(otherBtn => {
      const otherSubmenu = document.getElementById(otherBtn.getAttribute("aria-controls"));
      const otherLi = otherBtn.parentElement;

      if (otherBtn !== button) {
        otherBtn.setAttribute("aria-expanded", "false");
        otherSubmenu?.setAttribute("aria-hidden", "true");
        otherLi?.classList.remove("locked");
      }
    });

    // Toggle current one
    const newState = !isExpanded;
    button.setAttribute("aria-expanded", newState);
    submenu.setAttribute("aria-hidden", !newState);
    parentLi.classList.toggle("locked", newState);
  });

  // Hover open (desktop only, if not locked)
  parentLi.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768 && !parentLi.classList.contains("locked")) {
      button.setAttribute("aria-expanded", "true");
      submenu.setAttribute("aria-hidden", "false");
    }
  });

  parentLi.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768 && !parentLi.classList.contains("locked")) {
      button.setAttribute("aria-expanded", "false");
      submenu.setAttribute("aria-hidden", "true");
    }
  });
});


function updateLayout() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    nav.classList.remove("nav-collapsed");
    hamburger.style.display = "block";
    collapseToggle.style.display = "none";
    document.body.style.paddingLeft = "0";
    hamburger.setAttribute("aria-expanded", nav.classList.contains("nav-open"));
  } else {
  nav.classList.remove("nav-open");
  nav.classList.remove("nav-collapsed"); // Show full nav
  hamburger.style.display = "none";
  collapseToggle.style.display = "block";
  document.body.style.paddingLeft = "260px"; // Expanded width padding
  collapseToggle.setAttribute("aria-expanded", true);

  // Set arrow and tooltip for expanded sidebar initially
  collapseToggle.title = "Collapse Menu";
  collapseToggle.innerHTML = `<i class="fas fa-angle-left"></i>`;
}
}

updateLayout();

window.addEventListener("resize", () => {
    updateLayout();
});


  // 9. Current time update in footer
  function updateTime() {
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
  updateTime();
  // Update time every second
  setInterval(updateTime, 1000);

// Other JavaScript code for global elements (like side nav, header, footer, breadcrumb, etc.)

// Ensure the service worker is registered at the end of the layout.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    let swPath = '/service-worker.js';  // Default path for local development

    // Adjust path for the live server
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      swPath = '/website/service-worker.js';  // Path for production (server)
    }

    navigator.serviceWorker.register(swPath)  // Register service worker dynamically
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

  // 10. Disable right click and copy/paste as per your script
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());
})();

