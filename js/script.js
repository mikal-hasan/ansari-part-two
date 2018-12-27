var eventType = prompt("Event Type (Choose from casual, semi-formal, or formal)");
  var clothingSuggestion = "";

  if( eventType == "casual" ){
     clothingSuggestion ="something comfy";
  }

  else if( eventType == "semi-formal" ){
     clothingSuggestion ="a polo";
  }

  else if ( eventType == "formal" ) {
     clothingSuggestion ="suit";
  }

clothingSuggestion +=" and ";



  var tempFahr = prompt("Temperature (Degrees in Fahrenheit)");

     if( tempFahr < 54 ){
        clothingSuggestion += "a coat";
     }

     else if( tempFahr >= 54 && tempFahr <= 70 ){
        clothingSuggestion +="a jacket";
     }

     else if ( tempFahr > 70 ) {
        clothingSuggestion +="no jacket";
     }


     var result = "Since it is " + tempFahr + " degrees and you are going to a "
     + eventType + " event, you should wear " + clothingSuggestion;

     console.log (result)