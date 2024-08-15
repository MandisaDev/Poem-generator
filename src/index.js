function displayPoem(response){
    console.log("poem generator");
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
  let apiKey = "86etb03181f3f4bda15e2o0e83d08eaf";
  let prompt =`User instructions: Generate a poem about ${instructionsInput.value}`;
  let context = "You are a romantic poem expert and love to write short poem.Your mission is to generate a 4 lines poem in basic html and separate each line with a <br />. make sure to follow user instructions. Do not include a tittle to the poem.Sign the poem with 'sheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem); 

 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

