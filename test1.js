let music = "no music";

if (music == "classical") {
    console.log("oh no it's classical again");
}
else if (music == "no music") {
    console.log("Arh, peace and quiet");
}
else {
    console.log("Nice and noisy");
}

// This will loop code between here and * 3 times
for (var i = 0; i < 3; i++){
    // This will loop code between here and ** twice
    for (var j = 0; j < 2; j++){
    // This will print out twice because of the loop ^
    console.log(" | | ");
    // **
    }
    // if i is NOT equal to 2 then print "-------"
    // it will equal 2 after 2 iterations i.e only print twice
    if(i !== 2){
    console.log("-----------");
    }
    // *
    }

    if (1233 % 1234){
        console.log("true");
    } else {
        console.log("false");
    }