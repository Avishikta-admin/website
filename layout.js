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

const headerHTML = `
  <header id="page-header" role="banner" aria-label="Site Header">
    <button id="hamburger" type="button" class="hamburger" aria-label="Toggle menu" aria-expanded="false" title="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <button id="nav-collapse-toggle" type="button" aria-label="Toggle navigation sidebar" aria-expanded="true" class="collapse-toggle" title="Collapse Menu">
      <i class="fas fa-angle-left"></i>
    </button>

    <div class="header-text" title="AVISHIKTA PHASE – 1 LIG (TYPE – A) APARTMENT RESIDENTS’ WELFARE ASSOCIATION">
      AVISHIKTA PHASE – 1 LIG (TYPE – A) APARTMENT RESIDENTS’ WELFARE ASSOCIATION
    </div>

  <div class="header-actions">
  <a href="index.html" class="header-icon-btn btn-home" data-tooltip="Home"><i class="fas fa-home"></i></a>
  <a href="contact-us.html" class="header-icon-btn btn-contact" data-tooltip="Contact Us"><i class="fas fa-phone-alt"></i></a>
  <a href="faq.html" class="header-icon-btn btn-faq" data-tooltip="FAQ"><i class="fas fa-question-circle"></i></a>
  <a href="glossary.html" class="header-icon-btn btn-glossary" data-tooltip="Glossary (Common definitions)"><i class="fas fa-book"></i></a>
  <button id="langToggle" aria-label="Change language to Bengali" data-tooltip="Change language to Bengali">
    EN/বাংলা
  </button>
</div>

</header>
`;

const footerHTML = `
<footer id="page-footer" role="contentinfo" aria-label="Site Footer">
  <div class="footer-content">
    <div class="footer-credit">
      Designed and Developed by <strong><span class="blinking-text">Niloy Pandit</span></strong> | ⚡Powered by:<strong style="color: #e0ffff;">Type - A Tech Team</strong> |
      Copyright &copy Avishikta – 1 Type – A RWA, All rights reserved
    </div>
      <span class="current-time" id="current-time" aria-live="polite" aria-atomic="true"></span>
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
  	<li><a href="about-us.html" title="Know about us"><i class="fas fa-id-card-alt"></i> Who We Are</a></li>
  	<li><a href="vision-mission.html" title="Discover our vision and mission"><i class="fas fa-bullseye"></i> Vision & Mission</a></li>
  	<li><a href="governing-body.html" title="Meet the Executive Committee"><i class="fas fa-users-cog"></i> Executive Committee</a></li>
  	<li><a href="our-members.html" title="View the Residents Directory"><i class="fas fa-address-book"></i> Residents Directory</a></li>
        <li><a href="qtrwise_exp.html" title="Q-Fin Snapshot"><i class="fas fa-file-invoice"></i> Q-Fin Ledger</a></li>
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
    <li><a href="community-bulletin.html" title="Latest announcements and upcoming events"><i class="fas fa-bullhorn"></i> Community Bulletin</a></li>
    <li><a href="mom.html" title="Minutes from past meetings"><i class="fas fa-file-alt"></i> Meeting Minutes</a></li>
    <li><a href="new-resident-guide.html" title="Guide for new residents"><i class="fas fa-compass"></i> New Resident Guide</a></li>
    <li><a href="events.html" title="Events and shared moments"><i class="fas fa-camera-retro"></i> Shared Moments</a></li>
    <li><a href="general-guidelines.html" title="Association rules and policies"><i class="fas fa-gavel"></i> Community Guide</a></li>
    <li><a href="download-center.html" title="Download important documents"><i class="fas fa-download"></i> Download Center</a></li>
    <li><a href="useful-links.html" title="Helpful resources and support"><i class="fas fa-life-ring"></i> Support Hub</a></li>
    <li><a href="projects.html" itle="View project status"><i class="fas fa-tasks"></i> Project Status</a></li>
    <li><a href="member-tools.html" title="Utilities for residents"><i class="fas fa-tasks"></i> Resident Utilities</a></li>
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
    <li><a href="feedback.html" title="Share your thoughts and suggestions"><i class="fas fa-comment-dots"></i> Give Feedback</a></li>
    <li><a href="volunteer.html" title="Join community volunteer activities"><i class="fas fa-hands-helping"></i> Volunteer Opportunities</a></li>
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
    <li><a href="search.html" title="Search any site in a flash"><i class="fas fa-search-location"></i> Site Search</a></li>
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

//for language button ---------------------------
(function setupLangToggle() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;

  const supportedPages = ['index.html', 'about-us.html', 'contact-us.html', 'vision-mission.html'];
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const lang = localStorage.getItem('lang') || 'en';

  if (supportedPages.includes(currentPage)) {
    // Update label
    langToggle.textContent = lang === 'en' ? 'EN/বাংলা' : 'বাংলা/EN';
    langToggle.title = lang === 'en' ? 'Change language to Bengali' : 'Change language to English';

    // Handle click
    langToggle.addEventListener('click', () => {
      const lang = localStorage.getItem('lang') || 'en';
      const newLang = lang === 'en' ? 'bn' : 'en';
      localStorage.setItem('lang', newLang);
      location.reload();
    });
  } else {
    // Disable on unsupported pages
    langToggle.disabled = true;
    langToggle.title = "Currently, Bengali version is available only on these pages:\n- Home\n- Who We Are\n- Vision & Mission\n- Ready to Hear You";
    langToggle.style.opacity = 0.6;
    langToggle.style.cursor = 'not-allowed';
  }
})();


  // 6. Insert breadcrumb above main
  function renderBreadcrumb() {
  // Avoid duplicates
  if (document.querySelector('.breadcrumb')) return;

  const breadcrumbMap = {
    'index.html': ['Home'],
    'about-us.html': ['Home', 'Association', 'Who We Are'],
    'vision-mission.html': ['Home', 'Association', 'Vision & Mission'],
    'governing-body.html': ['Home', 'Association', 'Executive Committee'],
    'our-members.html': ['Home', 'Association', 'Residents Directory'],
    'qtrwise_exp.html': ['Home', 'Association', 'Q-Fin Snapshot'],
    'community-bulletin.html': ['Home', 'Resources', 'Community Bulletin'],
    'mom.html': ['Home', 'Resources', 'Meeting Minutes'],
    'new-resident-guide.html': ['Home', 'Resources', 'New Resident Guide'],
    'events.html': ['Home', 'Resources', 'Shared Moments'],
    'general-guidelines.html': ['Home', 'Resources', 'Community Guide'],
    'download-center.html': ['Home', 'Resources', 'Download Center'],
    'useful-links.html': ['Home', 'Resources', 'Support Hub'],
    'projects.html': ['Home', 'Resources','Project Status'],
    'member-tools.html': ['Home', 'Resources','Resident Utilities'],
    'feedback.html': ['Home', 'Get Involved','Give Feedback'],
    'volunteer.html': ['Home', 'Get Involved','Volunteer Opportunities'],
    'search.html': ['Home', 'Find & Explore','Site Search'],
  };

  const pageLinks = {
    'Home': 'index.html',
    'Association': '#',
    'Who We Are': 'about-us.html',
    'Vision & Mission': 'vision-mission.html',
    'Executive Committee': 'governing-body.html',
    'Residents Directory': 'our-members.html',
    'Quarterly Q-Fin Snapshot': 'qtrwise_exp.html',
    'Resources': '#',
    'Community Bulletin': 'community-bulletin.html',
    'Meeting Minutes': 'mom.html',
    'New Resident Guide': 'new-resident-guide.html',
    'Shared Moments': 'events.html',
    'Community Guide': 'general-guidelines.html',
    'Download Center': 'download-center.html',
    'Project Status': 'projects.html',
    'Resident Utilities': 'member-tools.html',
    'Support Hub': 'useful-links.html',
    'Get Involved': '#',
    'Give Feedback': 'feedback.html',
    'Volunteer Opportunities': 'volunteer.html',
    'Get in Touch': '#',
    'Find & Explore': '#',
    'Site Search': 'search.html',
  };

  const fileName = window.location.pathname.split('/').pop();
  const crumbs = breadcrumbMap[fileName];
  if (!crumbs) return; // no breadcrumb for this page

  const createBreadcrumb = () => {
    if (document.querySelector('.breadcrumb')) return; // avoid duplicates

    const breadcrumbNav = document.createElement('nav');
    breadcrumbNav.className = 'breadcrumb';
    breadcrumbNav.setAttribute('aria-label', 'breadcrumb');
    breadcrumbNav.style.margin = '10px auto';
    breadcrumbNav.style.maxWidth = '900px';
    breadcrumbNav.style.fontSize = '0.8rem';

    breadcrumbNav.innerHTML = crumbs.map((label, i) => {
      if (i === crumbs.length - 1) return `<span aria-current="page">${label}</span>`;
      const href = pageLinks[label] || '#';
      return `<a href="${href}">${label}</a> <span aria-hidden="true">&gt;</span> `;
    }).join('');

    // Insert breadcrumb in preferred order
    const banner = document.querySelector('.header-banner');
    const header = document.getElementById('header');
    const main = document.querySelector('main');

    if (banner && banner.parentNode) {
      banner.parentNode.insertBefore(breadcrumbNav, banner.nextSibling);
    } else if (header && header.parentNode) {
      header.parentNode.insertBefore(breadcrumbNav, header.nextSibling);
    } else if (main && main.parentNode) {
      main.parentNode.insertBefore(breadcrumbNav, main);
    } else {
      document.body.insertBefore(breadcrumbNav, document.body.firstChild);
    }
  };

  // ✅ If target elements exist now, render immediately
  if (document.querySelector('.header-banner') || document.getElementById('header') || document.querySelector('main')) {
    createBreadcrumb();
    return;
  }

  // ✅ Otherwise, observe the DOM for insertion
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.header-banner') || document.getElementById('header') || document.querySelector('main')) {
      createBreadcrumb();
      obs.disconnect(); // stop observing once done
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Run
renderBreadcrumb();

  // 7. Inject styles
  const style = document.createElement("style");
  style.textContent = `
    /* Reset & base */
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

  body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #f4f6f9;
  color: #333;
  padding-top: 3.1rem; /* adjusted for reduced header height */
  padding-bottom: 60px;
  padding-left: 260px;
  transition: padding-left 0.3s ease;
  height: 100%;
}

main {
  margin: 20px auto;
  max-width: 1200px;
  box-sizing: border-box;
  flex:1;
}

/* Header */
header#page-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: linear-gradient(135deg, #2a72d8, #feb47b);
  color: #fff;
  font-weight: 600;
  font-size: 0.7rem;       /* smaller font */
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 9999;
  padding: 0.15rem 0.5rem; /* very tight vertical padding */
  flex-wrap: nowrap;
}

/* Header text - no wrap, ellipsis */
header#page-header .header-text {
  flex: 1;
  font-weight: 600;
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 8rem); /* leave space for buttons */
  text-align: center;
  user-select: text;
}

/* Clean Hamburger button - no background */
#hamburger {
  width: 16px;
  height: 18px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 4px;
  left: 4px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

/* The three lines */
#hamburger span {
      display: block;
      height: 2px;
      width: 100%;
      background: white;
      border-radius: 1px;
      transition: all 0.3s ease;
      margin: 3px 0; /* ✅ Add spacing */
    }
#hamburger.open span {
  background-color: #FDEFE7; /* ❤️ Example: light cream */
}

/* Hover effect - subtle background */
#hamburger:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Slight white hover */
  border-radius: 4px;
}

/* Open state - smaller 'X' */
#hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(3px, 3px);
}

#hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0); /* shrink to center */
}

#hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -3px);
}

/* Collapse toggle button for desktop nav */
/* Enhanced Collapse toggle button for desktop nav */

#nav-collapse-toggle {
  background: linear-gradient(135deg, #ffd6e8, #a0e9ff); /* pastel pink-blue gradient */
  border: none;
  color: #333;
  font-size: 12px; /* smaller font */
  cursor: pointer;
  position: absolute;
  top: 50%; /* center vertically */
  transform: translateY(-50%);
  left: calc(260px - 70px); /* adjusted position closer */
  z-index: 10000;
  padding: 4px 8px; /* reduced padding */
  border-radius: 30px;
  transition: all 0.3s ease;
  user-select: none;
  box-shadow: 0 4px 8px rgba(255, 182, 193, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover effects */
#nav-collapse-toggle:hover {
  background: linear-gradient(135deg, #ffabc1, #79d4ff);
  color: #222;
  box-shadow: 0 6px 12px rgba(255, 105, 180, 0.6);
}

/* Icon inside the button */
#nav-collapse-toggle i {
  transition: transform 0.3s ease;
  pointer-events: none;
  font-size: 14px; /* smaller icon */
  line-height: 1;
}

#nav-collapse-toggle.collapsed {
  left: 30px;
}

/* Nav Styles */
#main-nav {
  position: fixed;
  top: 25px; /* optional fallback */
  left: 0;
  width: 180px;
  bottom: 20px;
  background: linear-gradient(180deg, #FBE3D6 0%, #163E64 100%);
  color: #fff; /* blue text */
  overflow-y: auto;
  z-index: 9998;
  display: block; /* hide nav by default on mobile */
  transition: opacity 0.3s ease;
  box-shadow: 2px 0 8px rgba(0,0,0,0.15);
  border-right: 1px solid #324060;
  transition: top 0.3s ease, transform 0.3s ease;
}

#main-nav.nav-open {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

/* Desktop and tablets (768px and above) */
@media (min-width: 768px) {
  .nav-menu {
    display: flex; /* show nav menu */
  }

  .hamburger {
    display: none; /* hide hamburger */
  }

  .breadcrumb {
    font-size: 0.8rem; /* larger font on desktop */
    margin: 15px auto;
  }

  .breadcrumb a {
    word-break: break-word; /* prevent overflow */
  }
}

/* Mobile devices (767px and below) */
@media (max-width: 767px) {
  #hamburger {
    display: block;
  }

  #main-nav {
    display: none; /* hide nav by default */
    width: 200px!important; /* apply width even when hidden */
  }

  #main-nav i {
    font-size: 0.6rem !important;
  }

  #main-nav ul li a,
  #main-nav ul li button.section-header,
  #main-nav ul li ul.submenu li a {
    font-size: 0.6rem !important; /* set smaller text */
  }

  #main-nav.nav-open {
    display: block; /* show nav when hamburger clicked */
  }

  .breadcrumb {
    font-size: 0.6rem !important;
    margin: 10px auto;
  }

  .breadcrumb a {
    word-break: break-word;
  }
}

#main-nav.nav-collapsed {
  transform: translateX(-160px) !important;
  width: 40px !important;
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

/* Home link: icon + text aligned left with gap */
#main-nav ul li a.nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* left align */
  gap: 8px; /* space between icon and text */
  padding: 10px 15px;
  font-size: 0.7rem;
  color: #0B1D5C;
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
}

#main-nav ul li a.nav-link:hover {
  background-color: #feb47b;
  color: #215F9A;
}

/* Submenu buttons: icon + text left, caret right */
#main-nav ul li button.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between; /* caret on right */
  padding: 10px 10px;
  font-size: 0.7rem;
  color: #F2F2F2;
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
  font-size: 0.8em; /* match text size */
}

/* Caret icon on buttons */
#main-nav ul li button.section-header i.fa-caret-down {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 2px;
  color: #163E64;
}

#main-nav ul.submenu li a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ddd;
  padding: 8px 15px;
  text-decoration: none;
  font-size: 0.7rem;
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
  padding-left: 5px;
  margin-left: 0; /* optional, ensure no extra space */
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

    #main-nav ul li a,
    #main-nav ul li button.section-header {
      color: #0B1D5C; /* deep blue for reversed gradient */
      text-decoration: none;
      font-weight: 600; /* makes menu text bold */
    }

    #main-nav ul li ul.submenu {
      max-height: 0;
      overflow: hidden;
      background-color: #2e3b66;
      transition: max-height 0.3s ease;
      font-size: 0.7rem;
    }
    #main-nav ul li ul.submenu[aria-hidden="false"] {
      max-height: 500px; /* enough for submenu */
    }
    #main-nav ul li ul.submenu li {
      border-bottom: none;
    }
    #main-nav ul li ul.submenu li a {
      padding-left: 15px;
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
      margin: 10px 20px 0 0;
      padding: 2px 12px;
      font-size: 0.6rem;
      background-color: #78206E; /* Blue background */
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
      font-weight: 550;
      color: #ffffff;;
    }

/* Footer */
#page-footer {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(135deg, #2a72d8, #feb47b);
  color: #fff;
  min-height: 20px;  /* Sleek and tight */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  padding: 0.2rem 1rem;  /* Reduced padding */
  box-shadow: 0 -2px 8px rgba(0,0,0,0.3);
  user-select: none;
  white-space: normal;  /* Allow wrapping */
  z-index: 9999;
  text-align: center;
  overflow-x: auto;
  line-height: 0.1;
}

.footer-content {
  display: flex;
  flex-direction: row;  /* Change from column */
  align-items: center;
  gap: 1rem;  /* Space between credit and meta */
  line-height: 1;  /* tighter */
  width: 100%;
  max-width: 1200px;
  padding: 0 5px;
  justify-content: space-between;
}

.footer-credit {
  flex-shrink: 1;
  white-space: nowrap;
  user-select: text;
  line-height: 1;
  font-weight: 400;
  font-size: 0.65rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.75rem;
  color: #eee;
  white-space: nowrap;
  flex-shrink: 0;
}

.footer-home-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
}

.footer-home-link:hover {
  text-decoration: underline;
  color: #ffd700;
}
#page-footer a {
  color: #fff;
  text-decoration: none;
  margin-left: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

#page-footer a:hover {
  text-decoration: underline;
}

.heart {
  color: red;
  margin: 0 4px;
  user-select: none;
}

.blinking-text {
  background-color: #1e40af;
  color: #fff;
  padding: 1px 4px;
  border-radius: 6px;
  font-weight: bold;
}

/* Current time tweaks */
.current-time {
  color: #FFFCFB;
  font-weight: 700;
  margin-left: 8px;
  white-space: nowrap;
}

@media (max-width: 600px) {
  #page-footer {
    white-space: normal;  /* allow wrapping on mobile */
    min-height: auto;
    padding: 2px 3px;
  }
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 0.6rem;
  }
  .footer-credit {
    white-space: normal;
    text-align: center;
    overflow: visible;
  }
  .footer-meta {
    white-space: normal;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
}

    /* Responsive */
    @media (max-width: 768px) {
      main {
        padding-left: 0;
        padding-top: 54px;
        padding-bottom: 60px;
      }
      header#page-header {
        padding: 1rem 40px;
      }
      #main-nav {
         position: fixed;
         top: 54px;
         left: 0;
         width: 300px; /* Increased from 260px */
         bottom: 60px;
         color: #fff;
         overflow-y: auto;
         transition: transform 0.3s ease;
         z-index: 9998;
         transform: translateX(-100%);  /* <-- HIDE OFFSCREEN BY DEFAULT */
         box-sizing: border-box;
         padding: 1rem;
     }
     @media (max-width: 480px) {
        #main-nav {
           width: 240px;
        }
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
    
/* Container for icon buttons + lang toggle */
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: auto;
  position: relative;
}

/* Icon buttons */
.header-icon-btn {
  width: 24px;            /* smaller width */
  height: 24px;           /* smaller height */
  font-size: 12px;        /* smaller icon size */
  padding: 4px;           /* add padding if needed, though your flex centering may not need much */
  border-radius: 50%;     /* keep circular */
  background: linear-gradient(135deg, #ffd6e8, #a0e9ff);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: background 0.3s ease, transform 0.2s ease;
}

.header-icon-btn:hover {
  background: linear-gradient(135deg, #b4f8c8, #a0c4ff); /* 🌟 hover effect */
  transform: scale(1.1);
}

.header-icon-btn i {
  font-size: 14px;
  color: inherit;
}

/* Home icon - dark blue/grey */
.btn-home i {
  color: #f1c40f;
}

/* Contact icon - green */
.btn-contact i {
  color: #27ae60;
}

/* FAQ icon - purple (same as yours) */
.btn-faq i {
  color: #9b59b6;
}

/* Glossary icon - orange */
.btn-glossary i {
  color: #e67e22;
}

/* Language Toggle */
#langToggle {
  background-image: linear-gradient(to right, #4b6cb7, #182848);
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  white-space: nowrap;
}

#langToggle:hover,
#langToggle:focus,
#langToggle:active {
  background-image: linear-gradient(to right, #1d976c, #93f9b9);
  color: #000;
}

#langToggle:focus {
  outline: none;
}

.header-icon-btn,
#langToggle {
  position: relative;
}

.tooltip-bubble {
  position: absolute;
  top: calc(100% - 4px); /* Move slightly up (closer to button) */
  margin-top: 6px; /* spacing below button */
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #007BFF;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1000;
  /* Center text horizontally and vertically */
  display: flex;
  align-items: center;
  justify-content: center;
}

.tooltip-bubble.show {
  opacity: 1;
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

  // Toggle 'open' class on hamburger for animation
  if (open) {
    hamburger.classList.add("open");
  } else {
    hamburger.classList.remove("open");
  }
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


// Tooltips for header buttons
document.querySelectorAll('.header-icon-btn, #langToggle').forEach(el => {
  const tooltipText = el.getAttribute('data-tooltip') || el.getAttribute('title');
  if (!tooltipText) return;

  // Create tooltip bubble
  const bubble = document.createElement('div');
  bubble.className = 'tooltip-bubble';
  bubble.innerText = tooltipText;
  el.appendChild(bubble);

  const isLink = el.tagName.toLowerCase() === 'a';

  // Desktop hover
  el.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      bubble.classList.add('show');
    }
  });
  el.addEventListener('mouseleave', () => {
    bubble.classList.remove('show');
  });

  // Mobile click (show tooltip, delay link)
  el.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Delay link for tooltip

      // Show tooltip
      bubble.classList.add('show');

      // Hide tooltip and go to link (if applicable)
      setTimeout(() => {
        bubble.classList.remove('show');
        if (isLink) window.location.href = el.getAttribute('href');
      }, 1500);
    }
  });
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
      currentTimeElement.innerHTML = `<b>Date:</b> ${formattedDate} | <b>Time:</b> ${formattedTime}`;
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

//9.1. Rotating arrow heads
const toggleBtn = document.getElementById('nav-collapse-toggle');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

  // Toggle Font Awesome classes correctly
  icon.classList.remove(isExpanded ? 'fa-angle-right' : 'fa-angle-left');
  icon.classList.add(isExpanded ? 'fa-angle-left' : 'fa-angle-right');

  // Update aria-expanded and tooltip
  toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
  toggleBtn.title = isExpanded ? 'Collapse Menu' : 'Expand Menu';

  // Toggle collapsed class for positioning
  toggleBtn.classList.toggle('collapsed', !isExpanded);
});

  // 10. Disable right click and copy/paste as per your script
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());
})();
