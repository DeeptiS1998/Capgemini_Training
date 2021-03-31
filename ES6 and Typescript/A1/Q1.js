unction print(str) {
    "use strict";
    var sent = str + " " + "how are you";
     sent = str + " " + " how was the day";
    for (var i = 1; i < str.length; i += 2) {
        console.log(sent);
    }
}
print("Welcome");