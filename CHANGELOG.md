# Change Log

This is a change log for offline edMore changes are incluced in the commit change notes.

## March 7
(initial)
* Added Homepage, modified App to have off-canvas sidebar.
* Refurbished map script.
* Added ordinances.js
(5:06pm)
* still can't figure how to make the search function work amidst its compatibility in the browser.

## March 11
(7:22am)
* Moved inline JS to individual js files
(4:05pm)
* will be adding `./src/map/map.js`,  and `./src/map/loc.js` to git repo

## March 12
(1:58am)
* modified `app.htm`, `database/loc.js` and `index.htm`.
* updated uikit js file to stop showing more results in search.
* removing `uikit.js` in existence of `uikit.min.js`. renamed `database/data.json` to `search.json` for formality.
* `loc.js` now has a map showing the border of the municipality.
* created `database/plot.js` so that the map borders won't be affected. 
* modified credits on `app.htm`. added `humans.txt`. 
(3:12am)
* `index` is 85% complete. `app` is 65% complete

## March 14
(3:05am)
* changed `plot.js`, `style.css`, `ordinances.js` and added a backup called `ords.js`.
(3:14am)
* changed `index.htm` and `app.htm`, added meta tags

## March 15
(1:55am)
* as suggested by colleague, expand sidebar's `.uk-offcanvas-bar` to 480px.
* changed `src/map/leaflet.css` set `.leaflet-content` to 200px due to how long the ordinances were. 
* about the search function, GitHub's nginx engine doesn't allow XMLHttpRequests so we have to deal with it. tweaked `app` a bit.

(3:00am)
* learned about `<details>` and `<summary>`, modified `ordinances.js` and `app` as well.
* map changed from polygon to polyline.

## March 16
(5:36am) 
* Created Documentation
* About section now added
* Contact section now includes the team.
* only thing left is the FAQ.
* changed changelog.

(3:39pm)
* modded documentation
* modded ordinances.js
* changed screenshots
* added `src/avatars` directory
* modified `app.htm`
* modified `index.htm`