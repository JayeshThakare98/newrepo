# Jayesh & Yojana — Royal Indo-Marathi Wedding Invitation

Editable, dependency-free HTML, CSS, and JavaScript wedding invitation site. The design follows the earlier decisions: royal maroon and antique gold, a Ganesh line-art motif, ornate navigation, a reveal envelope, and marigold/rose-colored petals. English and Marathi are separate language modes. RSVP and photo gallery sections are excluded.

## Open locally

Open `index.html` in a modern browser. For best results, serve the folder using VS Code Live Server or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Edit wedding details

Edit `js/config.js`. The couple names are Jayesh and Yojana (no nicknames). The schedule contains Mehendi (12 Dec, 9 PM, Rohit Mangal Karyalay, Bhivpuri Road, Karjat), Haldi (13 Dec, 5-11 PM), Wedding Muhurat (14 Dec, 1:45 PM), and Sneh Bhojan (14 Dec, from 2 PM onwards; end time not confirmed). The Sneh Bhojan calendar duration is currently estimated at two hours and can be edited. The original Patrika PDF is included in `assets/` and linked for download. Maps and the residence/accommodation address are not shown on the page.

The family and schedule details appear in `WEDDING-DETAILS-FORM.md`:

1. Edit the family/event details in `js/config.js` (dates use `YYYY-MM-DD`; times use 24-hour `HH:MM`).
2. The supplied original PDF is already in `assets/` and the invitation's Patrika link downloads it.
3. Update event names, times, or venues in the configuration if they change.

The site includes an animated envelope, accessible Ganesh SVG line art, bilingual content, a live countdown to the wedding muhurat, family introduction, WhatsApp host buttons, four event cards, WhatsApp invitation sharing, a calendar download containing all events, and the supplied `assets/wedding song.mp3` with a music toggle and autoplay attempt. Autoplay may be blocked by the browser, in which case guests can start the song with the music button. Mehendi and wedding durations are estimated at two hours for calendar entries; Haldi and Sneh Bhojan use the supplied end times. Petal motion respects reduced-motion settings.

## Project files

- `index.html` — page structure and content anchors
- `css/styles.css` — responsive royal invitation theme and animation
- `js/config.js` — editable wedding data
- `js/app.js` — language toggle and interactive features
- `assets/Jayesh Thakare patrika.pdf` — original Patrika, available from the invitation download button
- `WEDDING-DETAILS-FORM.md` — remaining family wording clarification

No RSVP, attendance form, photo gallery, or invented family/event details are present.
