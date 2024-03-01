$(document).ready(function() {
  // Function to attach event listener
  var attachClickListener = function(element) {
    element.addEventListener('click', function () {
      var selectedLang = this.getAttribute('data-lang');
      var currentUrl = window.location.href;
      var domainAndPathRegex = /^(https?:\/\/[^\/]+)\/[^\/]+(.*)$/;
      var domainAndPathMatches = currentUrl.match(domainAndPathRegex);
      var domainAndPath = domainAndPathMatches ? domainAndPathMatches[1] : '';
      var restOfPath = domainAndPathMatches ? domainAndPathMatches[2] : '';
      var newUrl = domainAndPath + '/' + selectedLang + restOfPath;
      window.location.href = newUrl;
    });
  }

  // Attach event listeners to existing elements
  var clickableElements = document.querySelectorAll('.language-select');
  clickableElements.forEach(function (element) {
    attachClickListener(element);
  });

  // Create a mutation observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node is a clickable element
            if (node.classList.contains('language-select')) {
              attachClickListener(node);
            }

            // Check if the added node contains any clickable elements
            var clickableChildren = node.querySelectorAll('.language-select');
            clickableChildren.forEach(function (child) {
              attachClickListener(child);
            });
          }
        });
      }
    });
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
});
