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
  let prompt = `Write a French poem about ${instructionsInput.value}, with one stanza (4 lines), in basic HTML. Use poetic vocabulary and rhyme. Do not include markdown or code block formatting.`;
  let context =
    "You are a romantic French poet. Write an elegant, rhymed poem based on the user's input in French, formatted in simple HTML using <p> for stanza and <br> for line breaks. Add a final, centered, italicized line: <p style='text-align: center; font-style: italic;'><strong>SheCodes AI</strong></p>";
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
