greetings = ["hi","hello","hey"]
count = -1
function tokenization(user_input,keyword_1) {
		    index = user_input.indexOf(keyword_1);
		    if(index == - 1) {
			    return 0;
		    } else {
			    return 1;
		    }
    }

function tokenization2(user_input,keyword_1,keyword_2) {
    index = user_input.indexOf(keyword_1);
    if(index == - 1) {
        return 0;
    } else {
        index = user_input.indexOf(keyword_2);
        if(index == - 1) {
            return 0;
        } else {
            return 1;
        }
    }
}

function getBotResponse(input) {
    user_input = input.replaceAll("[-+.^:,!?]","");
    user_input = user_input.toLowerCase();
    words = user_input.split(' ').length;
    if ( words == 1){
        //rock paper scissors
        if (user_input == "rock") {
            return "paper";
        } else if (user_input == "paper") {
            return "scissors";
        } else if (user_input == "scissors") {
            return "rock";
        }

        // Simple responses
        for (i=0; i<greetings.length+1;i++){
            if (user_input == greetings[i]) {
                return "Hello there!";
            } 
        }
    }

    weather_function = tokenization2(user_input, "weather","how");
    if (weather_function == 1) {
        if (words > 2){
            return "The weather today is cold"
        } else {
            return "I don't quite understand you well"
        }
    }

    weather_function = tokenization2(user_input, "weather","what");
    if (weather_function == 1) {
        return "Today is a rainy day!"
    }

    weather_function = tokenization2(user_input, "weather today is","cold");
    if (weather_function == 1) {
        return "yes, indeed it is cold today."
    }

    weather_function = tokenization2(user_input, "weather today is","hot");
    if (weather_function == 1) {
        return "Hmmm actually today is quite cold rather than hot."
    }

}
