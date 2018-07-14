function debounce(func, waitTime = 20, immediate = true) {
    var timeOut = null;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeOut = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, waitTime);
        if (callNow) {
            func.apply(context, args);
        }
    };
}

export default debounce;