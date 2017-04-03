var extendedForecast = new Array(10);

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

function nicestDay(numDays) {
    // console.log("Finding nicest day out of " + numDays + " days...");
    var dayScores = new Array(numDays);

    for (var i=0; i<numDays; i++) {
        dayScores[i] = extendedForecast[i].niceScore();
    }
    var bestScore = Math.max.apply(null, dayScores);
    var index = dayScores.indexOf(bestScore);
    // console.log("The winning score was " + bestScore + ", returning day " + index);
    return extendedForecast[index];
}

function updateWeatherForecast(zipCode) {
    var query = "http://api.wunderground.com/api/" + apiKey + "/forecast10day/q/" + zipCode;

    $.getJSON(query)
        .done(function(data) {
            
            var forecast = data.forecast.simpleForecast;
            for (var i=0; i<10; i++) {
                var dayForecast = forecast[i];
                console.log(dayForecast);

            }

        });


}

$(document).ready(function() {

    // updateWeatherForecast("98106")
    
    $('input:radio').change(function() {
        var numDays = $(this).val();
        var day = nicestDay(numDays);
        $("#nicestDay").text(day.dateString);
    });


});