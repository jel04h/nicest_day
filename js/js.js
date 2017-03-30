
function DailyForecast () {
    this.dateString = "Sunday, January 1st";
    this.highTempF = 72;
    this.lowTempF = 56;
    this.precipChance = 25;
    this.humidity = 56;
}

DailyForecast.prototype.niceScore = function() {
    return Math.pow(this.highTempF, 2) / (this.precipChance + this.humidity);
}

$(document).ready(function() {
    var forecast = new DailyForecast();
    alert(forecast.niceScore());

});