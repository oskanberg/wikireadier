
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Making page more readable.');

    //load jQuery
    chrome.tabs.executeScript({
        file : 'jquery.js',
    }, function () {
        // load and run the readability function
        chrome.tabs.executeScript({
            file : 'wikipedia-more-readier.js'
        });
    }
    );
});
