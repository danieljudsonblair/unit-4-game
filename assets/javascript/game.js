
var wins = 0;
var losses = 0;
var counter = 0;


var targetNumber = Math.floor(Math.random() * 101 + 19);

$("#number-to-guess").text(targetNumber);



// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [];
for (let i = 0; i < 4; i++) {
    numberOptions[i] = Math.floor(Math.random() * 11 + 1)
}


// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image crystal-" + (i + 1));

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/crystal" + [i + 1] + ".jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);


    $("#crystals").append(imageCrystal);
}
$("#total").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);
// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;


    console.log(crystalValue);

    if (counter === targetNumber) {
        wins++;
        counter = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        for (let i = 0; i < 4; i++) {
            numberOptions[i] = Math.floor(Math.random() * 11 + 1)

        }

        for (var i = 0; i < numberOptions.length; i++) {
            $(".crystal-" + [i + 1]).attr("data-crystalvalue", numberOptions[i]);
        }

    }

    else if (counter >= targetNumber) {
        losses++;
        counter = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        for (let i = 0; i < 4; i++) {
            numberOptions[i] = Math.floor(Math.random() * 11 + 1);

        }

        for (var i = 0; i < numberOptions.length; i++) {
            $(".crystal-" + [i + 1]).attr("data-crystalvalue", numberOptions[i]);
        }
    }

    $("#total").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#number-to-guess").text(targetNumber);
});
