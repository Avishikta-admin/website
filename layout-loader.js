// layout-loader.js
(function () {
  const version = '20250821'; // Change this when you update layout.js

  const script = document.createElement('script');
  script.src = `layout.js?v=${version}`;
  script.defer = true; // So it loads after the HTML is parsed
  document.head.appendChild(script);
})();








