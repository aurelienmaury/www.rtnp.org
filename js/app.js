$(document).foundation();
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(function () {
    soundManager.setup({
        url: 'js/sm2/',
        flashVersion: 9, // optional: shiny features (default = 8)
        // optional: ignore Flash where possible, use 100% HTML5 mode
        preferFlash: false,
        onready: function () {
            // Ready to use; soundManager.createSound() etc. can now be called.
            var mySound = soundManager.createSound({
                id: 'aSound', // optional: provide your own unique id
                url: 'http://images.wikia.com/mylegonetwork/images/d/dd/Scratch_1.ogg'
            });

            mySound.play();
        }
    });
});