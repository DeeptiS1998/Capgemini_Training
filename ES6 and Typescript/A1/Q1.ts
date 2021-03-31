function print(str){
    "use strict";

   //Unable to assingn value when the variable is declared with const
    const sentence = str + " " + "hello";
    const sent = str + " " + " there";
      for (let i = 1; i < str.length; i += 2) {
          console.log(sent);
          }
      }
      print("hi");