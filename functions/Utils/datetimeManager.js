exports.getCurrentTime = function() {
    date = new Date()
    var currentDate = date
    date = new Date(currentDate.valueOf() + global.define.GMT_KOREA_TIME_MIN * global.define.HOUR_TO_MILE)
    global.log.debug("datetimeManager", "getCurrentTime", "set timezone: " + currentDate.toISOString() + " -> " + date.toISOString())
    return date
}

exports.getCurrentTimeSec = function (date) {

    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    global.log.debug("datetimeManager", "getCurrentTimeSec", "time: " + date.toISOString() + " hour: " + hour + " min: " + min + " sec: " + sec)
    return hour * 3600 + min * 60 + sec * 1
}