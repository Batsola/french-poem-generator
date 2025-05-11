function displayForm(response) {
  //response.data.answer
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  //build the API URL
  let apiKey = "0b94ffa0fbab4a7377346039a787t35o";
  let prompt = `Write a French poem about ${instructionsInput.value}, in 3 stanzas of 4 lines each in basic HTML. Use poetic vocabulary, and a  rhymed structure.`;
  let context =
    "You are a romantic French poet, a master of poetic expression. You write elegant and emotionally resonant poems in French, strictly following the user's instructions. Your response must be formatted in clean, basic HTML using <p> for stanzas and <br> for line breaks. At the end of the poem, add a final line centered and italicized that reads: <p style='text-align: center; font-style: italic;'><strong>SheCodes AI</strong></p>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating a French poem about ${instructionsInput.value}</div>`;
  //Make a call to the API

  axios.get(apiUrl).then(displayForm);
  //Display the generated post
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
