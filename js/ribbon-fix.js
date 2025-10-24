// Prevent ribbon canvas from responding to clicks
function preventRibbonClicks() {
  var ribbonCanvas = document.querySelector('canvas');
  if (ribbonCanvas && ribbonCanvas !== document.querySelector('.fireworks')) {
    ribbonCanvas.style.pointerEvents = 'none';
  }
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", preventRibbonClicks);
} else {
  preventRibbonClicks();
}

// Re-apply when PJAX loads new content
if (window.pjax) {
  document.addEventListener("pjax:complete", preventRibbonClicks);
}

// Also check periodically for ribbon canvas
setInterval(preventRibbonClicks, 1000);
