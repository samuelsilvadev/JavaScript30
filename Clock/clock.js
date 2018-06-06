function Clock() {
    this.$hour = document.querySelector('.clock__hour');
    this.$minute = document.querySelector('.clock__minute');
    this.$second = document.querySelector('.clock__second');
    this.actualHour = 0;
    this.actualMinutes = 0;
    this.actualSeconds = 0;
}

Clock.prototype.getActualTime = function () {
    const now = new Date();
    this.actualHour = now.getHours();
    this.actualMinutes = now.getMinutes();
    this.actualSeconds = now.getSeconds();
}

Clock.prototype.start = function () {
    let _degreeHour = 0, _degreeMinute = 0, _degreeSecond = 0;
    const ONE_SECOND = 1000;

    _degreeHour = (this.actualHour * 30);
    this.$hour.style.transform = `rotate(${_degreeHour}deg)`;

    _degreeMinute = (this.actualMinutes * 6);
    this.$minute.style.transform = `rotate(${_degreeMinute}deg)`;

    _degreeSecond = (this.actualSeconds * 6);
    this.$second.style.transform = `rotate(${_degreeSecond}deg)`;

    setInterval(() => {
        if (_degreeSecond === 360) {
            _degreeSecond = 0;

            if (_degreeMinute === 360) {
                _degreeMinute = 0;

                this.$hour.style.transform = `rotate(${_degreeHour += 30}deg)`;
            }
            this.$minute.style.transform = `rotate(${_degreeMinute += 6}deg)`;
        }
        this.$second.style.transform = `rotate(${_degreeSecond += 6}deg)`;
    }, ONE_SECOND);
}