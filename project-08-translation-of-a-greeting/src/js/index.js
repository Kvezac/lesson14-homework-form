import { getTranslation } from "./helpers.js"

const outPutText = document.querySelector("#output-text")
const select = document.querySelector("#languages-list")

select.addEventListener("change", event => {
    const language = event.currentTarget.value;
    outPutText.textContent = getTranslation(language)
  })