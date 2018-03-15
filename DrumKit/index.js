const DrumModule = (function () {

    function Drum() {

        /**
         * Property: number key
         * value: class HTML of audio
         */
        this._keys = {
            65: 'clap',
            83: 'hihat',
            68: 'kick',
            70: 'openhat',
            71: 'boom',
            72: 'ride',
            74: 'snare',
            75: 'tom',
            76: 'tink'
        };
        return this;
    }

    Drum.prototype.init = function () {
        const that = this;

        function playSong(e) {
            console.log(e);
            const $audioElement = document.querySelector(`audio.${that._keys[e.keyCode]}`);
            const $buttoElement = document.querySelector(`div.${that._keys[e.keyCode]}`);

            if ($audioElement && $buttoElement) {
                $audioElement.currentTime = 0;
                $audioElement.play();
                $buttoElement.classList.add('box--active');
                $buttoElement.addEventListener('transitionend', () => { $buttoElement.classList.remove('box--active'); });
            }
        }

        document.addEventListener('keydown', playSong);
        return this;
    }

    return new Drum();

}()).init();


