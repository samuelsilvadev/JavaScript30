'use strict';
(function (win, doc) {

    const $video = doc.querySelector('[data-js="video"]');
    const $buttonTriggerVideo = doc.querySelector('[data-js="button-trigger-video"]');
    const $buttonsSkip = doc.querySelectorAll('[data-skip]');
    const $rangePropsVideo = doc.querySelectorAll('[data-js="range-props-video"]');
    const $progressStatus = doc.querySelector('[data-js="progress-status"]');
    const $progress = doc.querySelector('[data-js="progress"]');

    let isPlayingVideo = false;
    let isEventsAlreadyAdded = false;
    let isMouseDown = false;
    const ICON_PAUSE = '▮▮';
    const ICON_PLAY = '►';
    const TITLE_PAUSE = 'Click to pause video';
    const TITLE_PLAY = 'Click to play video';

    $video.addEventListener('error', detectTypeEventVideo);
    $video.addEventListener('loadstart', detectTypeEventVideo);
    $video.addEventListener('loadedmetadata', detectTypeEventVideo);
    $video.addEventListener('loadeddata', detectTypeEventVideo);
    $video.addEventListener('canplay', e => {
        detectTypeEventVideo(e);
        if (!isEventsAlreadyAdded) { addEventsInControls(); }
    });
    $video.addEventListener('ended', e => {
        detectTypeEventVideo(e);
        $video.currentTime = 0;
        isPlayingVideo = false;
    });

    function detectTypeEventVideo(evt) {
        console.log(evt.type, evt);
    }

    function _playVideo(e) {
        if ($video) {
            $video.play();
            isPlayingVideo = true;
        }
    }

    function _pauseVideo() {
        if ($video) {
            $video.pause();
            isPlayingVideo = false;
        }
    }

    function handleClickOnVideo(e) {
        if (!isPlayingVideo) {
            _playVideo(e);
            return;
        }
        _pauseVideo();
    }

    function updateButton() {
        const textToButton = isPlayingVideo ? ICON_PAUSE : ICON_PLAY;
        const textToTitle = isPlayingVideo ? TITLE_PAUSE : TITLE_PLAY;
        $buttonTriggerVideo.textContent = textToButton;
        $buttonTriggerVideo.title = textToTitle;
    }

    function skip() {
        const { dataset } = this;
        const valueToSkip = parseFloat(dataset.skip);
        $video.currentTime += valueToSkip;
    }

    function handleRanges() {
        $video[this.name] = this.value;
    }

    function handleProgressStatus() {
        const percent = ((this.currentTime / this.duration) * 100);
        $progressStatus.style.width = `${percent}%`;
    }

    function handleToChangeTimeVideo(e) {
        console.log('changing time...');
        const newTimeVideo = (e.offsetX / $progress.offsetWidth) * $video.duration;
        $video.currentTime = newTimeVideo;
    }

    function addEventsInControls() {
        $buttonTriggerVideo.addEventListener('click', handleClickOnVideo);
        $video.addEventListener('click', handleClickOnVideo);
        $video.addEventListener('play', updateButton);
        $video.addEventListener('pause', updateButton);
        $video.addEventListener('timeupdate', handleProgressStatus);
        Array.from($buttonsSkip).forEach(skipBtn => skipBtn.addEventListener('click', skip));
        const arraysRanges = Array.from($rangePropsVideo);
        arraysRanges.forEach(rangeInput => rangeInput.addEventListener('change', handleRanges));
        arraysRanges.forEach(rangeInput => rangeInput.addEventListener('mousemove', handleRanges));
        $progress.addEventListener('click', handleToChangeTimeVideo);
        $progress.addEventListener('mousemove', (e) => isMouseDown && handleToChangeTimeVideo(e));
        $progress.addEventListener('mousedown', () => isMouseDown = true);
        $progress.addEventListener('mouseup', () => isMouseDown = false);
        isEventsAlreadyAdded = true;
    }

})(window, document);