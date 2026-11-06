# Testing Plan

This document lists manual test cases for the Dawnsfall portfolio website. Run them in a desktop browser and a mobile-sized viewport. These cases describe expected behavior; they have not been executed.

## Test cases

### TC-01 — Home page loads

**Steps**
1. Open `index.html`.
2. Check the page at a desktop viewport.

**Expected**
- The Home page loads without missing assets or visible layout overflow.
- The navigation, greeting, bouquet, and introductory text are visible.

### TC-02 — Main navigation works

**Steps**
1. From each page, use every main navigation link to open the other pages.
2. Check the active navigation item on each destination.

**Expected**
- Each link opens the matching page.
- The current page is visibly active and marked with `aria-current="page"` where provided.

### TC-03 — Home layout adapts to screen width

**Steps**
1. View Home at wide desktop, tablet, and narrow mobile widths.
2. Resize across the desktop/tablet layout breakpoint.

**Expected**
- The bouquet and text remain centered and do not collide.
- The layout stacks at smaller widths without horizontal scrolling.

### TC-04 — Project photos load

**Steps**
1. Open Projects.
2. Check the Wood lamp front and side photos, Diorama photo, and News Aggregator screenshot.

**Expected**
- All four images load and correspond to their project cards.
- Image descriptions are available to assistive technology.

### TC-05 — Project cards fit responsively

**Steps**
1. View Projects at wide desktop, tablet, and mobile widths.
2. Check all three project cards and their descriptions.

**Expected**
- Cards use available horizontal space on wide screens and reflow on narrower screens.
- Text and images remain inside their cards without overlap or horizontal scrolling.

### TC-06 — NewsAPI link behavior

**Steps**
1. On the News Aggregator card, activate the NewsAPI link.

**Expected**
- The NewsAPI site opens in a new tab.
- The link retains its `noopener noreferrer` protection.

### TC-07 — Skills content and CD animation

**Steps**
1. Open Skills and review the Software, Hardware, and Media groups.
2. Observe the Miku CD on a motion-enabled desktop viewport.
3. Enable the operating system or browser reduced-motion preference and reload.

**Expected**
- Each skill appears under the intended heading.
- The CD spins on larger screens and the animation stops when reduced motion is preferred.
- The image does not cause horizontal overflow on mobile.

### TC-08 — Side decorations respond to viewport changes

**Steps**
1. Resize a page across the 840px/841px breakpoint.
2. Observe the vines and plant decorations.

**Expected**
- Desktop decorations appear above the breakpoint and fade out below it.
- They do not cover text or prevent interaction.

### TC-09 — Rain effect remains unobtrusive

**Steps**
1. View Home, About, Projects, Skills, and Contact on a desktop viewport.
2. Check that rain is visible behind the content.
3. Enable reduced motion and reload a page.

**Expected**
- Rain appears at the configured 5% opacity without reducing text readability.
- Rain animation stops when reduced motion is preferred.
- Rain is hidden at mobile widths.

### TC-10 — About layout and quote display

**Steps**
1. Open About on a wide desktop viewport and then a mobile viewport.
2. Check the biography, random quote, author, and QuoteSlate credit.

**Expected**
- Biography appears in the left column and quote content in the right column on wide screens.
- The columns stack on narrow screens and remain readable.
- The quote or a helpful fallback message appears if the quote service is unavailable.

### TC-11 — Contact form embed

**Steps**
1. Open Contact with an internet connection.
2. Wait for the Typeform embed to load.
3. Navigate the form controls using the keyboard.
4. Repeat at a mobile viewport.

**Expected**
- The embedded form loads, has an accessible title, and fits the panel at both sizes.
- Controls can be reached and operated with a keyboard.
- Do not submit a real message during testing unless approved test data is available.

### TC-12 — Keyboard and focus visibility

**Steps**
1. Use Tab and Shift+Tab to move through navigation and links on each page.
2. Use Enter to activate a focused link.

**Expected**
- Focus is visible at every interactive element.
- Links can be activated without a mouse, and decorative elements are skipped by assistive technology.

## Run results (2026-11-05)

**Environment:** Static source checks were run in the project directory. No browser is available in this session, so visual, responsive, keyboard-interaction, and live-service behavior could not be exercised. “Pass (source)” means the related markup/assets/styles were checked; it does not confirm rendered behavior.

| Case | Result | Notes |
|---|---|---|
| TC-01 | Partial — source pass | Home document, stylesheet reference, navigation destinations, bouquet markup, and image asset exist. Browser rendering and overflow were not checked. |
| TC-02 | Pass — source | All five pages contain links to the five local page files; active-page markup is present. Clicking links was not exercised. |
| TC-03 | Pass |
| TC-04 | Pass — source | All four project image files exist, and each project image has descriptive alt text. Image rendering was not checked. |
| TC-05 | Pass | 
| TC-06 | Pass — source | NewsAPI link uses the requested URL, opens a new tab, and includes `noopener noreferrer`. Link activation was not exercised. |
| TC-07 | Pass — source | Skill groups, Miku disc asset, spin animation, and reduced-motion override are present. Animation behavior was not observed. |
| TC-08 | Pass — source | All page stylesheets contain the 840px/841px vine breakpoints and transitions. Fade and decoration placement were not visually checked. |
| TC-09 | Partial — source pass | Page rain styles use 5% opacity on wide screens and include reduced-motion handling. Readability and animation were not visually checked. |
| TC-10 | Partial — source pass | About columns, quote fields, API request, and unavailable-quote fallback are present. Live quote loading and responsive appearance were not checked. |
| TC-11 | Partial — source pass | Typeform iframe URL and accessible title are present. Loading, keyboard operation, and mobile fit were not checked. No form data was submitted. |
| TC-12 | Partial — source pass | Navigation styles define visible focus states. Keyboard traversal and activation were not exercised. |

