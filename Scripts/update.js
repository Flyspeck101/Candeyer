$(document).ready(function() {
  let resourceUpdate = setInterval(function() {
    updateResource(0, 0, "Candies");
    updateResource(0, 0, "Sweetness");
  }, 5);
});