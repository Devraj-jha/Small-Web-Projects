    async function getQuote() {
      try {
        const response = await fetch('https://api.quotable.io/random'); // Free quote API
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}" — ${data.author}`;
      } catch (error) {
        document.getElementById('quote').textContent = 'Failed to fetch quote.';
        console.error                                     ('Error fetching quote:', error);
      }
    }