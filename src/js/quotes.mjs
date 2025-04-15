import {getLocalStorage, setLocalStorage} from "./utils.mjs"

const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('author');

// Load history and index from local storage
let quoteHistory = getLocalStorage('quoteHistory') || [];
let currentIndex = getLocalStorage('currentIndex');
currentIndex = typeof currentIndex === 'number' ? currentIndex : -1;

export async function loadQuotes() {
  // If not at the end of history, move forward
  if (currentIndex < quoteHistory.length - 1) {
    currentIndex++;
    displayQuote(quoteHistory[currentIndex]);
    saveToLocalStorage();
    return;
  }

  const url = 'https://quotes-api12.p.rapidapi.com/quotes';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '23b94f4ddcmsh01f0e08854ba502p132f2ejsnc396f3ee0e31',
      'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    quoteHistory.push(result);
    currentIndex++;
    displayQuote(result);
    saveToLocalStorage();
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = "Failed to load quote.";
    authorText.textContent = "";
  }
}

export function previousQuote() {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuote(quoteHistory[currentIndex]);
    saveToLocalStorage();
  } else {
    alert("You're at the first quote.");
  }
}

function displayQuote(result) {
  quoteText.innerHTML = `"${result.quote}"`;
  authorText.innerHTML = `– ${result.author}`;
}

function saveToLocalStorage() {
  setLocalStorage('quoteHistory', quoteHistory);
  setLocalStorage('currentIndex', currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", loadQuotes);
document.getElementById("prevBtn").addEventListener("click", () => {
  // Pull the most recent currentIndex from local storage
  const storedIndex = getLocalStorage('currentIndex');
  if (typeof storedIndex === 'number') {
    currentIndex = storedIndex;
  }

  previousQuote();
});

