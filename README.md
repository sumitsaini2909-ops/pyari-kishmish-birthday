# Pyari Kishmish Birthday Website 🌷

A responsive pink-and-white birthday surprise website with a PIN entrance, secret message, interactive gift, Polaroid memories, tap-to-blow candles, five-question quiz, Alfaaz background music, and an animated letter.

## Run locally
1. Keep `index.html`, `kishmish-front.jpg`, `kishmish-memory-02.png`, and `alfaaz.mp3` together in this folder.
2. Open `index.html` in a browser, or use VS Code Live Server.

## Customize
- PIN: edit `SECRET_PIN` near the bottom of `index.html` (currently `1118`).
- Music: replace `alfaaz.mp3` with your audio file, keeping the same filename.
- Main photo: replace `kishmish-front.jpg`.
- Gallery: add more images and duplicate a `<article class="memory">` block in the Memories section, updating its `src` and caption.
- Quiz: edit the `quiz` array in the script.

## Deploy to Vercel
Upload this folder to a GitHub repository and import it into Vercel as a static site. No build command is required; set the output directory to `.`.

Note: browsers may restrict autoplay. The site starts the song from the successful PIN button interaction; if the browser blocks it, the visible music button lets the visitor start playback.
