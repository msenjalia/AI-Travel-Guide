function displayResults(response) {
  console.log(response.data);

  new Typewriter("#search-city-info", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateSearch(event) {
  event.preventDefault();

  let searchQuery = document.querySelector(".searchBox");
  let searchText = searchQuery.value;

  let prompt = `${searchText}`;
  let context =
    "are an expert travel guide who specializes in setting a itenarary for a solo traveler. please give the ideal itenaray for each day in the city. answer format should list the <h2> City, Country </h2>, new line give the daily itenerary in html and bullet list for each day.";
  let apiKey = "400a01208e33f9b5ecot8677e1d71bfe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayResults);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", generateSearch);
