const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

async function loadRandomQuote() {
    quoteText.textContent = "Loading a quote...";
    quoteAuthor.textContent = "";

    const tags = ["motivation", "inspiration", "wisdom"]
        .sort(() => Math.random() - 0.5);

    for (const tag of tags) {
        try {
            const url = `https://quoteslate.vercel.app/api/quotes/random?tags=${encodeURIComponent(tag)}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Quote request failed for ${tag} (${response.status})`);
            }

            const result = await response.json();
            const quote = Array.isArray(result) ? result[0] : result;
            if (!quote?.quote) {
                throw new Error(`No ${tag} quote was returned`);
            }

            quoteText.textContent = `"${quote.quote}"`;
            quoteAuthor.textContent = quote.author ? `- ${quote.author}` : "";
            return;
        } catch (error) {
            console.warn(`Could not load a ${tag} quote:`, error);
        }
    }

    quoteText.textContent = "A quote isn't available right now. Please try again later.";
}

loadRandomQuote();
