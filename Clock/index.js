(function () {

    const $hour = document.querySelector('.clock__hour');
    const $minute = document.querySelector('.clock__minute');
    const $second = document.querySelector('.clock__second');
    const ONE_SECOND = 1000;
    let degreeHour = 0, degreeMinute = 0, degreeSecond = 0;

    const now = new Date();
    const actualHour = now.getHours();
    const actualMinutes = now.getMinutes();
    const actualSeconds = now.getSeconds();

    degreeHour = (actualHour * 30);
    $hour.style.transform = `rotate(${degreeHour}deg)`;

    degreeMinute = (actualMinutes * 6);
    $minute.style.transform = `rotate(${degreeMinute}deg)`;

    degreeSecond = (actualSeconds * 6);
    $second.style.transform = `rotate(${degreeSecond}deg)`;

    setInterval(() => {
        if (degreeSecond === 360) {
            degreeSecond = 0;

            if (degreeMinute === 360) {
                degreeMinute = 0;

                $hour.style.transform = `rotate(${degreeHour += 30}deg)`;
            }
            $minute.style.transform = `rotate(${degreeMinute += 6}deg)`;
        }
        $second.style.transform = `rotate(${degreeSecond += 6}deg)`;
    }, ONE_SECOND);
}());