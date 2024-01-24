function displayResults(response) {
  console.log(response.data);

  let itinerary = response.data.answer;

  let cityItinerary = document.querySelector("#search-city-info");
  cityItinerary.innerHTML = itinerary;
}

function generateSearch(event) {
  event.preventDefault();

  let searchQuery = document.querySelector(".searchBox");
  let searchText = searchQuery.value;

  let prompt =
    `${searchText}` +
    "answer format should list the <h2> City, Country </h2>, new line give the daily itenerary in html and bullet list for each day, day in bold letters.";
  let context =
    "are an expert travel guide who specializes in setting 2 day maximum itineraries set as morning, afternoon and evening. You like to explore local cultures and current events, vegetarian food, shopping and adventures, be specific and detailed in possible.";
  let apiKey = "400a01208e33f9b5ecot8677e1d71bfe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayResults);

  new Typewriter("#search-city-info", {
    strings: ["Preparing your itinerary"],
    autoStart: true,
    cursor: "",
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", generateSearch);
