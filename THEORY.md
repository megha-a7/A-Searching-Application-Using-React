In addition to the localhost address, the console output displays a LAN address i.e., you can access the app from a mobile device on the same network

src folder--
1. app.js - current main wrapper componenet of the app
2. app.css - contains style specific to the app component
3. logo.svg - the top of the page logo
4. index.js - the entry file for the app ; imports index.css and also imports and reders the app component into the DOM via the root div located in the index.html file inside the public folder
5. index.css - the app-based style sheet
6. app.test.js - runs simple test to check if the app component renders to the DOM without crashing.

React aka progressive web apps(PWA s) are web application that use a collection of modern web techhnologies to provide native-app like experiences on all types of devices.
They take advantage of the latest browser features to make apps more performant, reliable and safe also end push notification and work when there is no internet.

PWAs rely os special scripts called service worker to give that app-like experience - registerService Worker.js (this file catches your static assets and serves them from local caching production ensuring that the web app is reliably fast even on a slower, unreliable network)

manifest.json - contains metadata associated with your app, like app's name, author, description ~ configuration of  the app.
purpose - install the app to the homescreen of a device, providing your users with quicker access and a richer experience. It also contains imfo about the icon to display on a device's homescreen and by default sets the apps to display in standalone mode when launched from home screen.

