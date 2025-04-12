import { loadHeaderFooter, formattedDate } from "./utils.mjs";
import weather from "./weather.mjs";
import startMapApp from "./map.mjs";
import { loadQuotes, previousQuote } from "./quotes.mjs";

loadHeaderFooter();
formattedDate();
weather();
startMapApp();
document.getElementById("nextBtn").addEventListener("click", loadQuotes);
document.getElementById("prevBtn").addEventListener("click", previousQuote);
loadQuotes();
