function generateSearchResults(event) {
  event.preventDefault();

  new Typewriter("#search-city-info", {
    strings: ["Hello", "World"],
    autoStart: true,
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", generateSearchResults);
