
# UI5con website
The source repositiory for the [UI5con](http://openui5.org/ui5con/index.html) event website.


Installation
========================
```
npm install
```

Development
========================
For development purpose it's necessary to start web-server on the local machine:
```
npm start
```

After successful start the website is available on port "3030" (can be changed in the `package.json` file) - http://localhost:3030/.

Every time when HTML/CSS/JS files are saved, automatic re-build occurs and the opened page is reloaded after that with new changes.

Resources
=========
##### **Store**
Place all resources (images, downloads, etc.) under the folder `./src/data`. They will be automatically copied to the folder `./build` (read below).
##### **Reference**
Use relative URLs like `./data/pictures/xxx.jpg`. to keep them the same in the production version.

Local build
===========
When a change is ready for production, you can first build and test them locally.

For that run the following command:
```
npm run build
```

As a result, the `./build` folder will be created under the root folder of the project. This folder contains all necessary assets to deploy to production.

Open the `./build/index.html` in a browser to test build results.

