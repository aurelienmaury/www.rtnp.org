$(function () {

    var mySoundList = [
        {name: 'Jimmy Lajungle', url: 'ressources/Jimmy_Lajungle-Tribute_to_berurier.ogg'},
        {name: 'Méchant', url: 'ressources/repet-20140830/Mechante/export/Mechant.wav'}
    ];

    var mySoundIndex = 0;

    function playNext() {
        if (mySoundIndex > mySoundList.length) {
            mySoundIndex = 0;
        }

        $('#link').text(mySoundList[mySoundIndex].name);
        $('#link').attr("href", mySoundList[mySoundIndex].url);

        mySoundList[mySoundIndex].sound.play();
    }

    soundManager.setup({
        url: 'js/sm2/',
        flashVersion: 9, // optional: shiny features (default = 8)
        // optional: ignore Flash where possible, use 100% HTML5 mode
        preferFlash: false,

        onready: function () {
            $.each(mySoundList, function (index, item) {
                item.sound = soundManager.createSound({
                    id: item.name,
                    url: item.url,
                    onfinish: function () {
                        mySoundIndex = mySoundIndex + 1;
                        playNext();
                    }
                });
            });

            playNext();
        }
    });
});
