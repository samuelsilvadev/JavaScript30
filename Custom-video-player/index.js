'use strict';
(function (win, doc) {

    const $video = doc.querySelector('[data-js="video"]');
    const $playButton = doc.querySelector('[data-js="play-button"]');
    let isPlayingVideo = false;

    $video.addEventListener('error', detectTypeEventVideo);
    $video.addEventListener('loadstart', detectTypeEventVideo);
    $video.addEventListener('loadedmetadata', detectTypeEventVideo);
    $video.addEventListener('loadeddata', detectTypeEventVideo);
    $video.addEventListener('canplay', e => {
        detectTypeEventVideo(e);
        addEventsInControls();
    });

    function detectTypeEventVideo(evt) {
        console.log(evt.type, evt);
    }

    function playVideo(e) {
        console.log(e.target);
        if ($video) {
            $video.play();
            isPlayingVideo = true;
        }
    }

    function pauseVideo() {
        if ($video) {
            $video.pause();
            isPlayingVideo = false;
        }
    }

    function handleClickOnVideo(e) {
        if (!isPlayingVideo) {
            playVideo(e);
            return;
        }
        pauseVideo();
    }

    function addEventsInControls() {
        $playButton.addEventListener('click', playVideo);
        $video.addEventListener('click', handleClickOnVideo);
    }

})(window, document);