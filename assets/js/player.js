$(function () {

    var mySoundList = [
        {name: 'Mechante', url: 'ressources/Mechante-4.4.mp3'},
        {name: 'Damné', url: 'ressources/Damne-20100203.mp3'}
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