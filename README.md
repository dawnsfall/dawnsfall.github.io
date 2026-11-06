# Dawnsfall Portfolio

MY WEBSITE YAYYYY!!!

## Project description

This is my personal portfolio website. It introduces me as an Electrical and Computer Engineering student and brings together information about my background, skills, projects, and contact options. The site uses a floral theme with responsive layouts, decorative plants, and motion effects that respect reduced-motion preferences.

The portfolio includes:

- **Home:** An introduction and bouquet illustration.
- **About Me:** My interests and background, with a random quote provided by QuoteSlate.
- **Projects:** Photos and descriptions of my wood lamp, *17776* diorama, and News Aggregator with Database Storage.
- **Skills:** My software, hardware, and media skills, alongside a spinning Miku CD illustration.
- **Contact:** An embedded Typeform contact form.

## Live website

[Visit Dawnsfall](https://dawnsfall.github.io/)

## View the website locally

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

For a local web server, you can use Visual Studio Code with the Live Server extension, or run this command from the project folder if Python is installed:

```sh
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). No build step is required.

## Notes and acknowledgments

- The random quote feature uses the [QuoteSlate API](https://github.com/Musheer360/QuoteSlate). The quote needs an internet connection; the page shows a fallback message if the service is unavailable.
- The contact form is embedded from [Typeform](https://form.typeform.com/to/XclTJDni) and requires an internet connection.
- The News Aggregator project fetches headlines from [NewsAPI](https://newsapi.org/) and stores them in a database. The project page displays a screenshot of the app.
- The diorama is inspired by [*17776* by Jon Bois](https://www.sbnation.com/a/17776-football).
- The site uses the Englebert font from [Google Fonts](https://fonts.google.com/specimen/Englebert).
