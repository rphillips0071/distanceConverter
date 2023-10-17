// Assuming there's a form with the id "convert", an input with the id "distance", and some other HTML elements
document.getElementById('convert').addEventListener('submit', function (event) {
    event.preventDefault();
    var distance = document.getElementById('distance').value;
    var kilometersCalculation = (parseFloat(distance) * 1.60934).toFixed(3);
    document.getElementById('answer').innerHTML = ("".concat(distance, " miles are equal to ").concat(kilometersCalculation, " kilometers"));
    if (isNaN(parseFloat(distance))) {
        alert('You need to type a numeric value.');
    }
});
document.addEventListener('keydown', function (event) {
    var key = event.code;
    var heading = document.getElementById('firstHeading');
    var headingP = document.getElementById('firstHeadingP');
    var distance = document.getElementById('distance').value;
    var kilometersCalculation = (parseFloat(distance) * 1.60934).toFixed(3);
    var milesCalculation = (parseFloat(distance) * 0.621371).toFixed(3);
    var containerTopP = document.getElementById('containerTopP');
    if (key === 'KeyK') {
        heading.innerHTML = 'KILOMETERS TO MILES CONVERTER';
        headingP.innerHTML = 'Press the "M" key to switch to convert kilometers to miles';
        containerTopP.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
        document.getElementById('convert').addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById('answer').innerHTML = ("".concat(distance, " kilometers are equal to ").concat(milesCalculation, " miles"));
        });
    }
    else if (key === 'KeyM') {
        heading.innerHTML = 'MILES TO KILOMETERS CONVERTER';
        headingP.innerHTML = 'Press the "K" key to switch to convert miles into kilometers';
        containerTopP.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        document.getElementById('convert').addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById('answer').innerHTML = ("".concat(distance, " miles are equal to ").concat(kilometersCalculation, " kilometers"));
        });
    }
});
