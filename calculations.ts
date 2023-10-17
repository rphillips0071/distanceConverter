// Assuming there's a form with the id "convert", an input with the id "distance", and some other HTML elements

document.getElementById('convert')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    let distance: string = (document.getElementById('distance') as HTMLInputElement).value;
    let kilometersCalculation: string = (parseFloat(distance) * 1.60934).toFixed(3);

    document.getElementById('answer')!.innerHTML = (`${distance} miles are equal to ${kilometersCalculation} kilometers`);

    if (isNaN(parseFloat(distance))) {
        alert('You need to type a numeric value.');
    }
});

document.addEventListener('keydown', function(event: KeyboardEvent) {
    let key: string = event.code;
    let heading: HTMLElement = document.getElementById('firstHeading')!;
    let headingP: HTMLElement = document.getElementById('firstHeadingP')!;
    let distance: string = (document.getElementById('distance') as HTMLInputElement).value;
    let kilometersCalculation: string = (parseFloat(distance) * 1.60934).toFixed(3);
    let milesCalculation: string = (parseFloat(distance) * 0.621371).toFixed(3);
    let containerTopP: HTMLElement = document.getElementById('containerTopP')!;

    if (key === 'KeyK') {
        heading.innerHTML = 'KILOMETERS TO MILES CONVERTER';
        headingP.innerHTML = 'Press the "M" key to switch to convert kilometers to miles';
        containerTopP.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';

        document.getElementById('convert')!.addEventListener('submit', function(event: Event) {
            event.preventDefault();
            document.getElementById('answer')!.innerHTML = (`${distance} kilometers are equal to ${milesCalculation} miles`);
        });
    } else if (key === 'KeyM') {
        heading.innerHTML = 'MILES TO KILOMETERS CONVERTER';
        headingP.innerHTML = 'Press the "K" key to switch to convert miles into kilometers';
        containerTopP.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';

        document.getElementById('convert')!.addEventListener('submit', function(event: Event) {
            event.preventDefault();
            document.getElementById('answer')!.innerHTML = (`${distance} miles are equal to ${kilometersCalculation} kilometers`);
        });
    }
});
