const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('author');

let quoteHistory = [];
let currentIndex = -1;

export async function loadQuotes() {
  // If not at the end of history, move forward
  if (currentIndex < quoteHistory.length - 1) {
    currentIndex++;
    displayQuote(quoteHistory[currentIndex]);
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

    // Save and display the new quote
    quoteHistory.push(result);
    currentIndex++;
    displayQuote(result);
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = "Failed to load quote.";
    authorText.textContent = "";
  }
}

export function previousQuote() {
  if (currentIndex != 0) {
    currentIndex--;
    displayQuote(quoteHistory[currentIndex]);
  } else {
    alert("You're at the first quote.");
  }
}

function displayQuote(result) {
  quoteText.innerHTML = `"${result.quote}"`;
  authorText.innerHTML = `– ${result.author}`;
}

