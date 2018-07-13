function debounce(func, waitTime = 20, immediate = true) {
    var timeOut = null;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            console.count('later', immediate);
            timeOut = null;
            if (!immediate) {
                console.log('inside later');
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, waitTime);
        if (callNow) {
            console.log('inside call now');
            func.apply(context, args);
        }
    };
}

export default debounce;