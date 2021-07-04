let pup = require("puppeteer");

//global variables
let gPage;
let gBrowser;
//let email = "pepproject42@gmail.com"
let pass = "harshil8"

// this line makes the code visible if in headless false is written
pup.launch({ headless: false, defaultViewport: null, args: [" --start-maximized"], slowMo: 50 })

    .then(function (browser) {
        gBrowser = browser;

        // this line open new page in browser

        return browser.pages();
    })

    .then(function (pagesArr) {

        gPage = pagesArr[0];

        // this line makes open this site
        return gPage.goto("https://accounts.spotify.com/en/login");
    })

    .then(function () {


        return gPage.type("#login-username", "pepproject42@gmail.com");

    })
    .then(function () {
        return gPage.type("#login-password", pass);
    })
    .then(function () {
        return Promise.all([
            gPage.waitForNavigation(),
            gPage.click("#login-button"),


        ]);

    })
    .then(function () {
        return Promise.all([
            gPage.waitForNavigation(),
            gPage.click("[analytics-event='Webplayer Button']"),
        ]);

    })
    .then(function () {
        return Promise.all([
            gPage.waitForNavigation(),
            gPage.click(".b682d766775429c174843277b73eec2d-scss"),
        ]);

    })
    .then(function () {
        return gPage.waitForSelector("[placeholder = 'Search for songs or episodes']", { visible: true })
    })
    .then(function () {





        return gPage.type("[placeholder = 'Search for songs or episodes']", "chooloA");
    })
    .then(function () {
        return gPage.waitForSelector('[data-testid="add-to-playlist-button"]', { visible: true })


    })
    .then(function () {
        return gPage.evaluate(function () {

            let a = document.querySelectorAll('[data-testid="add-to-playlist-button"]');
            console.log(a);
            a[0].click();


        });


    })
    .then(function () {

        return gPage.click("[stroke ='currentColor']")


    })
    .then(function () {
        return gPage.waitForSelector("[placeholder='Search for songs or episodes']", { visible: true })
    })
    /*  .then(function () {
         waitForTimeout(3000);
  */
    // })
    .then(function () {



        return gPage.type("[placeholder='Search for songs or episodes']", "tearsdontfall");

    })
    .then(function () {
        return gPage.waitForSelector(".b490086127ec0ecdc7b170c03de9c5b1-scss", { visible: true })
    })

    .then(function () {

        return Promise.all([
            gPage.waitForNavigation(),
            gPage.click(".b490086127ec0ecdc7b170c03de9c5b1-scss")
        ]);
    })

    /*  .then(function () {
 
         return gPage.click("[stroke='currentColor']")
     }) */





    .catch(function (err) {
        console.log(err);
    });